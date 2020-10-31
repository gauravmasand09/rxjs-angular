import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private designService:DesignUtilityService) { }
  objMessage;
  ngOnInit(): void {
    //OF
    const obs1 = of('Gaurav','Singh','Masand');
    obs1.subscribe(
      res => {
        console.log(res);
        this.designService.print(res,'elContainer');
      }
    )

    const obs2 = of({a:'Gaurav',b:'Singh',c:'Masand'});
    obs2.subscribe(
      res => {
        console.log(res);
        this.objMessage = res;
      }
    )

    //FROM
    //Array 
    const obs3 = from(['Ronaldo' , 'Messi' , 'Bale']);
    obs3.subscribe(
      res => {
        console.log(res);
        this.designService.print(res,'elContainer3')
      }
    )

    //Promise 
    const promise = new Promise(resolve => {
      setTimeout(() => {
          resolve("Promise Resolved");
      }, 3000);
    })
    const obs4 = from(promise);
    obs4.subscribe(
      res => {
        console.log(res);
        this.designService.print(res,'elContainer4')
      }
    )

    const obs5 = from("My Name is Gaurav Singh and I am sexy.");
    obs5.subscribe(
      res => {
        console.log(res);
        this.designService.print(res,'elContainer5')
      }
    )
  }

}
