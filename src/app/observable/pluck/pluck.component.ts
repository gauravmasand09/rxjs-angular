import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  names = [];
  titles = [];

  constructor() {}
  users = [
    { name: 'Gaurav', skills: 'Angular' , job : { title:'Frontend Devloper' , exp:'2' } , skills2:['Angular','Java'] },
    { name: 'Abhinav', skills: 'Java 8' , job : { title:'Backend Devloper' , exp:'2' } , skills2:['Angular1','Java1']},
    { name: 'Shubham', skills: 'Python' , job : { title:'Python Devloper' , exp:'2' } , skills2:['Angular2','Java3']},
    { name: 'Saurabh', skills: 'DevOps' , job : { title:'DevOps Engineer' , exp:'2' } , skills2:['Angular4','Java4']},
  ];
  ngOnInit(): void {

    //Ex - 01
    from(this.users)
      .pipe(
        // map((data) => data.skills),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.names = res;
      });

    //Ex - 02
      from(this.users)
      .pipe(
        // map((data) => data.skills),
        pluck('job','title'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.titles = res;
      });
  }
}
