import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(message,containerID){
    let li = document.createElement('li');
    li.innerText = message;
    document.getElementById(containerID).appendChild(li);
  }
}
