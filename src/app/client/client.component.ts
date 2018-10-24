import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  name: '';
  last_name: '';
  age: number;
  gender: '';
  date: '';

  constructor(private router: Router, private actvRoute: ActivatedRoute) { }
  /**ActivatedRoute) for getting accesss to route parameters/ */
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
