import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  datArray = [
    {id:1,name:'Ronaldo',gender:'Male'},
    {id:2,name:'Messi',gender:'Male'},
    {id:3,name:'Ronaldinho',gender:'Male'},
    {id:4,name:'Zlatan',gender:'Male'},
    {id:5,name:'Martha',gender:'Female'},
    {id:6,name:'Jessica Landström',gender:'Female'},
    {id:7,name:'Amanda Ilestedt',gender:'Female'},
    {id:8,name:'Ronaldo 9',gender:'Male'},
    {id:9,name:'Benzema',gender:'Male'},
    {id:10,name:'Julia Simic',gender:'Female'},

  ]

  data = [];
  data2 = [];
  data3  = [];
  constructor() { }

  ngOnInit(): void {
    const source = from(this.datArray);

    //Ex - 01 - Filter by length
    source.pipe(
      filter(member => member.name.length < 6),
      toArray()
    ).subscribe(
      res => {
        this.data  = res;
      }
    )

    //Ex - 02 - Filter by gender
    source.pipe(
      filter(member => member.gender == "Male"),
      toArray()
    ).subscribe(
      res => {
        this.data2  = res;
      }
    )

     //Ex - 03 - Filter by nTh item
     source.pipe(
      filter(member => member.id <= 6),
      toArray()
    ).subscribe(
      res => {
        this.data3  = res;
      }
    )

    
  }

}
