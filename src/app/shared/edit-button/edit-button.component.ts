import {Component} from "@angular/core";

@Component ({
  moduleId : module.id,
  selector: 'edit-button',
  templateUrl: 'edit-button.component.html',
  styleUrls: ['edit-button.component.scss']
})

export class EditButtonComponent {
  nameNew: string = 'Add New Film';
}
