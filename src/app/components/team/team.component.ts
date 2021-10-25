import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  dataTeam: DataTeam[]

  constructor() {
    this.dataTeam = [
      new DataTeam(true, "../../../../../assets/images/team/team-2.png", "@Rigoberto Valenza", "You want customer to your store. Easily your coupans and has\n" +
        "Clooger."),
      new DataTeam(false, "../../../../../assets/images/team/team-1.png", "@Venessa Smith", "You want customer to your store. Easily your coupans and has\n" +
        "Clooger."),
      new DataTeam(true, "../../../../../assets/images/team/team-3.png", "@Donald Laughlin", "You want customer to your store. Easily your coupans and has\n" +
        "Clooger.")
    ]
  }

  ngOnInit(): void {
  }

}

class DataTeam {
  isActive: boolean
  img: string
  name: string
  description: string
  constructor(isActive: boolean, img: string, name: string, description: string) {
    this.isActive = isActive
    this.img = img
    this.name = name
    this.description = description
  }
}
