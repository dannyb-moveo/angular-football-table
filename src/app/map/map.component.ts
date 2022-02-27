import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MapService } from '../_services/map.service';

import {
  faHouseUser,
  faBuilding,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { RouteInterface } from '../_models/route.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('input') inputElement: ElementRef;
  routeDetails: RouteInterface;
  faHouse = faHouseUser;
  faBuilding = faBuilding;
  faArrowRight = faLongArrowAltRight;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mapService.initMap(this.mapElement, this.inputElement);
  }

  showRoute = (): void => {
    this.mapService.homeToWorkRoute();
    this.routeDetails = this.mapService.getRouteDetails();
  };

  removeMarkers = () => {
    this.mapService.removeAllMarkers();
  };
  hideMarkers = () => {
    this.mapService.hideMarkers();
  };
  showMarkers = () => {
    this.mapService.showMarkers();
  };

  changeMapId = (style: string) => {
    this.mapService.changeMapId(this.mapElement, style);
  };
}
