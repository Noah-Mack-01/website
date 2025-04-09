import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-element',
  /*templateUrl: './list-element.component.html',*/
  template: `<li>
    @if (data.link) {<a [href]="data.link" target="_blank">
    @if (data.timestamp) { <span [classList]="['timestamp']">{{data.timestamp.toLocaleDateString()}} </span> } -  
    <span [classList]="['bold']">{{data.boldText}}:</span>
    <span [classList]="['description']"> {{data.descriptionText}}</span>
    </a> } @else {
    @if (data.timestamp) { <span [classList]="['timestamp']">{{data.timestamp.toLocaleDateString()}} </span> } -  
    <span [classList]="['bold']">{{data.boldText}}:</span>
    <span [classList]="['description']"> {{data.descriptionText}}</span>
    }
    </li>`
})
export class ListElementComponent {
  @Input() data: ListElement = { timestamp: new Date(), boldText: 'Bold text', descriptionText: 'Description text' };
  constructor(){}
}

export type ListElement = {
  link?: string;
  boldText: string;
  descriptionText: string;
  timestamp?: Date
}