import {Component} from '@angular/core';

@Component({
  selector: 'app-entity-list',
  templateUrl: './ListItem.html',
  styleUrls: ['./ListItem.css']
})
export class ListItem {

  handleShowDetails(entityId: number) {
    console.log(`************ ${entityId}`);
  }
}
