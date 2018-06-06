import {Component, Input} from "@angular/core";

@Component({
  selector: 'experience-link',
  templateUrl: './experience.link.component.html',
  styleUrls: ['./experience.link.component.css']
})
export class ExperienceLinkComponent{
  @Input() companyName: string;
}
