import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pages = [
    {name: 'Event', page: 'events'},
    {name: 'nav-bar', page: 'nav-bar'},
    {name: 'Client', page: 'client'}
  ];
  
    uname: '';
    last_name: '';
    age: number;
    gender: '';
    date: '';
    constructor(private router: Router, private actvRoute: ActivatedRoute) { }
    /**ActivatedRoute) for getting accesss to route parameters/ */
    ngOnInit() {
        
        this.actvRoute.queryParams.subscribe(params =>{
        this.uname = params['name'];
        this.last_name = params['last_name'];
        this.age = params['age'];
        this.gender = params['gender'];
        this.date = params['date'];
      });
      console.log(this.uname);
      console.log(this.last_name);
      console.log(this.age);
      console.log(this.gender);
      console.log(this.date);
}
}
