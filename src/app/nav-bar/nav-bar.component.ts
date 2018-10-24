import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() name;
  @Input() page;
  

  @Input() uname: '';
  @Input() last_name: '';
  @Input() age: number;
  @Input() gender: '';
  @Input() date: '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pages = [
    {name: 'Event', page: 'events'},
    {name: 'nav-bar', page: 'nav-bar'},
    {name: 'Client', page: 'client'}
  ];
  navigator(){
    if(this.name === 'Event'){
      this.router.navigate(['detail/events']);
    }else if(this.name === 'Client'){
      this.router.navigate(['detail/client'], {queryParams : {name: this.uname, 
        last_name: this.last_name, age: this.age, gender: this.gender, date: this.date}});
    }
  }

}
