import { Component } from '@angular/core';
import { ListElement, ListElementComponent } from '../../shared/list-element/list-element.component';

@Component({
  selector: 'app-projects-list',
  imports: [ListElementComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  list?: ListElement[]
}
