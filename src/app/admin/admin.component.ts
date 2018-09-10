import { Component, OnInit , Input } from '@angular/core';



@Component({


  selector: 'open-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor() { }

  checkform(event :any){
  	console.log(event)

  }

  ngOnInit() {
  }

}
