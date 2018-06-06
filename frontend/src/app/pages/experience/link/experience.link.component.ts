import {Component, Input} from "@angular/core";

@Component({
  selector: 'experience-link',
  templateUrl: './experience.link.component.html'
})
export class ExperienceLinkComponent{
  @Input() logoName: string;
  @Input() companyFullname: string;
}
