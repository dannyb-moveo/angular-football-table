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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('input') inputElement: ElementRef;
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
  };
}
