import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  template: `
    <div>
      <div>
        child
      </div>
      <button (click)="sendDataToParent()">
        Send data to parent
      </button>
    </div>
  `
})
export class AppChildComponent {
  @Output() dataFromChild = new EventEmitter;

  sendDataToParent() {
    return this.dataFromChild.emit('data from child');
  }
}