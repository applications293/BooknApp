import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  name: '';
  last_name: '';
  age: number;
  gender: '';
  date: '';
  
  constructor(private router: Router, private actvRoute: ActivatedRoute) { }

  ngOnInit() {
  

  this.actvRoute.queryParams.subscribe(params =>{
    this.name = params['name'];
    this.last_name = params['last_name'];
    this.age = params['age'];
    this.gender = params['gender'];
    this.date = params['date'];
  });

  console.log(this.name);
  console.log(this.last_name);
  console.log(this.age);
  console.log(this.gender);
  console.log(this.date);

}
}
