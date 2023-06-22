import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


// ng g c card-list --project=ui-controls --export
@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Output() cardChange = new EventEmitter<Card[]>();
  @Input() cards: Card[] = [];

  sortCard(event: CdkDragDrop<string>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.cardChange.emit(this.cards);
  }
}
