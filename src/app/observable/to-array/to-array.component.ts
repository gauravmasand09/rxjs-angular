import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription ,  } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  subscription: Subscription;
  constructor() {}
  users = [
    {name:'Gaurav',last:'Singh'},
    {name:'Saurabh',last:'Singh'},
    {name:'Shweta',last:'Singh'},
  ]

  ngOnInit(): void {
    //Ex -01
    const sub = interval(1);
    this.subscription = sub.pipe(take(5), toArray()).subscribe((res) => {
      console.log("Converting Integers to Array",res);
    });

    console.log("Users Data Initial -> " ,this.users);
    //Ex -02
    const sub1 = from(this.users);
    sub1.pipe(
      toArray()
    ).subscribe(
      res => {
        console.log("Users Data in String -> " ,res);
      }
    )

    //Ex -03
    const sub2 = of('Gaurav','Singh','Masand');
    sub2.pipe(
      toArray()
    ).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
