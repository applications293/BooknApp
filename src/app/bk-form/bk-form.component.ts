import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bk-form',
  templateUrl: './bk-form.component.html',
  styleUrls: ['./bk-form.component.css']
})
export class BkFormComponent implements OnInit {

  //Global Variables
  name: string;
  last_name:string;
  age: string;
  gender:string;
  date:string;

  constructor(private router: Router)/*parameter called router of type Router*/{ }

  ngOnInit(){
  }

  onSubmit(){
    /*console.log(this.name);
    console.log(this.last_name);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.date);*/
    this.router.navigate(['/detail'], {queryParams: {name: this.name,
         last_name: this.last_name, age: this.age,
         gender: this.gender, date: this.date}});
  }

  clearForm(){
    console.clear();
    this.name= "";
    this.last_name= '';
    this.age= '';
    this.gender='';
    this.date='';
  }

}
