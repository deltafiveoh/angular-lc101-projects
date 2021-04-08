import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  rEnabled: boolean = true;
  lEnabled: boolean = true;
  dEnabled: boolean = true;
  uEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLand(rocketImage) {
   this.color = 'green';
   this.height = 0;
   this.message = "Landed!";
   rocketImage.style.bottom = '0px';
   this.takeOffEnabled = true;
 }

 abort(rocketImage) {
  this.color = 'green';
  this.height = 0;
  this.message = "Mission aborted!";
  rocketImage.style.bottom = '0px';
  this.takeOffEnabled = true;
}

 moveRocket(rocketImage, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  }
  if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
  }
  
  if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
  }

  if (direction === 'down') {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
  }
  this.positionCheck(this.width, this.height);
}

  positionCheck(width, height){
    if (height > 310000 || height < 10000 || width > 200000 || width < 0){
      if (height > 320000){
        this.uEnabled = false;
      }
      if (height < 0){
        this.dEnabled = false;
      }
      if (width > 200000){
        this.rEnabled = false;
      }
      if (width < 0){
        this.lEnabled = false;
      }
      this.color = 'orange';
    } else {
      this.color = 'blue';
      this.uEnabled = true;
      this.dEnabled = true;
      this.lEnabled = true;
      this.rEnabled = true;
    }
  }

}
