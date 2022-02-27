import { ElementRef, Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: google.maps.Map;
  autocomplete: google.maps.places.Autocomplete;
  moveoMarker: google.maps.Marker;
  autocompleteMarker: google.maps.Marker;

  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;

  constructor() {}

  initMap = (mapElement: ElementRef, inputElement: ElementRef): void => {
    const loader = new Loader({
      apiKey: environment.GOOGLE_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(mapElement.nativeElement, {
        mapId: '29e267eeeb203796',
        center: { lat: 31.0461, lng: 34.8516 },
        zoom: 6,
      } as google.maps.MapOptions);

      // Moveo Marker
      this.setMoveoMarker();

      // Autocomplete
      this.setAutocomplete(inputElement);
    });
  };

  setMoveoMarker = (): void => {
    this.moveoMarker = new google.maps.Marker({
      position: { lat: 32.064582, lng: 34.7718053 },
      // label: {
      //   color: '#00aaff',
      //   fontWeight: 'bold',
      //   fontSize: '14px',
      //   text: 'Moveo Group',
      // },
      icon: {
        url: 'https://i.ibb.co/KWVW4QZ/imageedit-4-3250376453.png',
        scaledSize: new google.maps.Size(50, 50),
      },
      map: this.map,
    });

    // const infowindow = new google.maps.InfoWindow({
    //   content: 'Welcome to stackoverflow!',
    // });

    // infowindow.open(this.map, this.moveoMarker);
  };

  setAutocomplete = (inputElement: ElementRef): void => {
    const options = {
      componentRestrictions: { country: 'il' },
    };
    this.autocomplete = new google.maps.places.Autocomplete(
      inputElement.nativeElement,
      options
    );
    this.autocomplete.bindTo('bounds', this.map);

    // Initialize Autocomplete Marker
    this.autocompleteMarker = new google.maps.Marker({ map: this.map });

    this.autocomplete.addListener('place_changed', () => {
      this.autocompleteMarker.setVisible(false);

      const place = this.autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
      }

      this.autocompleteMarker.setPosition(place.geometry.location);
      this.autocompleteMarker.setVisible(true);
    });
  };

  homeToWorkRoute = (): void => {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    this.directionsRenderer.setMap(this.map);
    this.directionsService
      .route({
        origin: 'Ha-Kalanit Street 3, Ashdod, Israel',
        destination:
          'Moveo Group, First floor via stairs, Har Sinai Street, Tel Aviv-Yafo, Israel',
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        this.directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert('Directions request failed due to ' + status));
  };
}
