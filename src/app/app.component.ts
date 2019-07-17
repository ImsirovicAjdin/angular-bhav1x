import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>parent</div>
    <app-child (dataFromChild)="receiveDataFromChild($event)"></app-child>
  `
})
export class AppComponent  {
  name = 'Angular';

  receiveDataFromChild(data) {
    alert(data)
  }
}
