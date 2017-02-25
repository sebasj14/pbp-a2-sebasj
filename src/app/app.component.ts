import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  title = 'Customer App';
  name = 'SebasJ';
  sebasColor = 'blue';

  changeColor() {
    this.sebasColor = this.sebasColor === 'red' ? 'blue' : 'red';
  }
}
