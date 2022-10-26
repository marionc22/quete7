import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  devs: Array<Developer> = [
    new Developer('Rey', 'Smith', 20, 'female', 'connasse', [
      new Skill('angular', 'angular', 'angular'),
      new Skill('java', 'java', 'java'),
    ]),
    new Developer('Marion', 'Smith', 20, 'female', 'connasse', [
      new Skill('java', 'java', 'java'),
    ]),
    new Developer('Julien', 'Smith', 20, 'female', 'connasse', [
      new Skill('java', 'java', 'java'),
    ]),
  ];

  ngOnInit(): void {  console.log(this.devs)}
}
