import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Parent to child connection and child to parent connection';

  public msg;

  // public message = "hello";
  public message;
  /*function to send message from parent to the child*/
  newParent(){
    this.message = "Hello Child"
  }
  closenewParent(){
    this.message = " "
  }

  /*function to handle child to parent connection*/
  parentFunction(data){
    this.msg = data;
  }
}
