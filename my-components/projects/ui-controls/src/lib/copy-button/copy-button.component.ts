import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent {

  @Input() data: string = '';
  @Output() copied = new EventEmitter<void>();

  onCopied() {
    this.copied.next();
  }

}
