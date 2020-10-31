import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.scss']
})
export class PromoiseComponent implements OnInit {
  promiseValue: unknown;
  public Dell : Laptop = {
    brand:'Dell Inspiron',
    hardDisk:'2 TB',
    color:'Space grey',
  }
  public HP : Laptop = {
    brand:'HP Pavllion',
    hardDisk:'1 TB',
    color:'black',
  }
  public NA : Laptop = {
    brand:'Not Avaliable',
  }
  constructor() { }

  isDellAvaliable(){
    return true;
  }

  isHpAvaliable(){
    return false;
  }

  ngOnInit(): void {
    //old syntax
    // let buyLaptop = new Promise(function(resolve,reject){
    //   resolve("Promise is reolved");
    // })

    //using fat arrow function
    let buyLaptop = new Promise((resolve,reject) => {
      // resolve("Promise is reolved");
      // reject("Promise is rejected");
      if(this.isDellAvaliable()){
        return setTimeout(() => {
          // resolve("Dell is Purchased");
          resolve(this.Dell);
        }, 5000);
      }else if(this.isHpAvaliable()){
        return setTimeout(() => {
          // resolve("Hp is Purchased")
          resolve(this.HP);
        }, 5000);
      }else{
        return setTimeout(() => {
          resolve("Laptop is Out of Stock")
          resolve(this.NA);
        }, 5000);
      }
    })
    buyLaptop.then( res => {
      console.log("Then code =>  " , res);
      this.promiseValue = res;
    }).catch( err => {
      console.log("Error => ",err);
    })
  }

}


export interface Laptop {
  brand: string;
  hardDisk?: string;
  color?: string;
}