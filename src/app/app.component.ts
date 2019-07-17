import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>parent</div>
  `
})
export class AppComponent  {
  name = 'Angular';

  receiveDataFromChild(data) {
    alert(data)
  }
}
