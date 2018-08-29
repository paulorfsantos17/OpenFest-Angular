import { Component, OnInit } from '@angular/core';

import {EventService} from './event.service'

@Component({
  selector: 'open-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private eventService: EventService) { }

  ngOnInit() {
  }

}
