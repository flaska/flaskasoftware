import {Component, Input} from "@angular/core";

@Component({
  selector: 'experience-content',
  templateUrl: './experience.content.component.html',
  styleUrls: ['./experience.content.component.css']
})
export class ExperienceContentComponent{
  @Input() companyName: string;
  @Input() type: string;
}
