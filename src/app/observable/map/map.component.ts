import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private designService:DesignUtilityService) { }
  sub1:Subscription;
  msg1:any;
  sub2:Subscription;
  msg2:any;
  sub3:Subscription;
  msg3:any;
  ngOnInit(): void {

    const broadCastVideos = interval(1000);

    //Ex - 01

    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video '+data)
    ).subscribe(
      res => {
        this.msg1 = res;
      }
    )
    setTimeout(() => {
      this.sub1.unsubscribe()
    },10000);

    //Ex - 02
    this.sub2 = broadCastVideos.pipe(
      map(data => (data + 1) * 10)
    ).subscribe(
      res => {
        this.msg2 = res;
      }
    )

    setTimeout(() => {
      this.sub2.unsubscribe()
    },10000);

    //Ex - 03 
    // const inter = interval(1000).pipe(
    //   map(
    //     data => {
    //       return from([
    //         {id:1,first_name:'Gaurav',last_name:'Singh'},
    //         {id:2,first_name:'Cristiano',last_name:'Ronaldo'},
    //         {id:3,first_name:'Lionel',last_name:'Messi'},
    //         {id:4,first_name:'David',last_name:'Bechkham'},
    //       ]);
    //     }
    //   )
    // ).subscribe(
    //     res => {
    //       this.designService.print(res,'elContainer');
    //     }
    // )
    const arr = from([
      {id:1,first_name:'Gaurav',last_name:'Singh'},
      {id:2,first_name:'Cristiano',last_name:'Ronaldo'},
      {id:3,first_name:'Lionel',last_name:'Messi'},
      {id:4,first_name:'David',last_name:'Bechkham'},
    ])
    arr.pipe(
      map(data => data['first_name'] + ' ' + data['last_name'])
    ).subscribe(
      res => {
        this.designService.print(res,'elContainer');
      }
    )

    

  }

}
