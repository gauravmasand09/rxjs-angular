import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CustomComponent implements OnInit,OnDestroy {
  techStatus:any;
  techStatus2:any;
  name:any;
  nameStatus:any
  subs:Subscription;
  subs2:Subscription;
  constructor(private designService:DesignUtilityService) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const obs1 = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Angular");
      }, 1000);
      setTimeout(() => {
        observer.next("Typescript");
      }, 2000);
      setTimeout(() => {
        observer.next("Javascript");
      observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next("Html / Css");
        // observer.error(new Error("Error Occurred"));
        // this.techStatus = 'error';
      }, 4000);
      setTimeout(() => {
        observer.next("Jquery");
        // this.techStatus = 'completed';
      }, 5000);
      // observer.error();
    });

    //subscribe(data,error,completition)
    obs1.subscribe(
      res => {
        // console.log(res);
        this.designService.print(res,'elTemplate')
      },
      error => {
        this.techStatus = 'error';
      },
      completed => {
        this.techStatus = 'completed';
      }
    )

    //Ex - 02 (Custom Interval)
    const arr = ['Angular' , 'Javascript' , 'Html / Css' , 'Jquery' , 'Typescript']
    const obs2 = Observable.create( observer => {
        let count = 0;
        setInterval(() => {
          observer.next(arr[count]);
          if(count >= 2){
            observer.error();
          }
          count++;

        },1000)
      }
    )

    this.subs = obs2.subscribe(
      res => {
        this.designService.print(res,'elTemplate2')
      },
      (error) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    )

    

    //Ex - 03 (Random Names)
    const arr3= [ 'Gaurav' , 'Saurabh' , 'Muffin' , 'Bruno' , 'Ronaldo' , 'Messi']
    const obs3 = Observable.create( observer => {
        let count1 = 0;
        setInterval(() => {
          observer.next(arr3[count1]);
          // if(count1 >=2 ){
          //   observer.error();
          // }
          // if(count1 >= 6){
          //   observer.complete();
          // }
          if(count1 >= 5){
            observer.complete();
          }
          count1++;
        },1000)
      }
    )

    this.subs2 = obs3.subscribe(
      res => {
        console.log(res);
        this.name = res;
      },
      (error) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    )

  }

}
