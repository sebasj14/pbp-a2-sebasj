import { Component, NgModule } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Customer App';
  name = 'SebasJ';
  sebasColor = 'green';

  changeColor() {
    this.sebasColor = this.sebasColor === 'red' ? 'green' : 'red';
  }
}
