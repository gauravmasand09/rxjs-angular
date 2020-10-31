import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMessage:string;
  videoSubscription:Subscription;
  constructor(private designService:DesignUtilityService) { }

  ngOnInit(): void {
    // const broadcastVideos = interval(2000);
    const broadcastVideos = timer(5000,1000);
    //timer(delay,interval)
    this.videoSubscription = broadcastVideos.subscribe(
      res => {
        console.log("Video");
        this.obsMessage = "Video -> "+res;
        this.designService.print(this.obsMessage,'elContainer');
        this.designService.print(this.obsMessage,'elContainer2');
        this.designService.print(this.obsMessage,'elContainer3');
        if(res >= 5 ){
          this.videoSubscription.unsubscribe();
        }
      }
    )
  }

}
