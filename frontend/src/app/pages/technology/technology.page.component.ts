import {Component} from "@angular/core";

@Component({
  selector: 'technology-page',
  templateUrl: './technology.page.component.html'
})
export class TechnologyPageComponent{

  technologyList = ['nodejs', 'angular', 'react', 'mongodb', 'elastic', 'aws'];

}

