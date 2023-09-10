import {Component} from '@angular/core';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent {

  handleShowDetails(entityId: number) {
    console.log(`************ ${entityId}`);
  }
}
