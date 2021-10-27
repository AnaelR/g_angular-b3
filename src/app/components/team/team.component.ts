import { Component, OnInit } from '@angular/core';
import {TeamMemberModel} from "../../models/team-member.model";
import {TeamMemberLinksModel} from "../../models/team-member-links.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  teamMemberList: TeamMemberModel[]

  constructor() {
    this.teamMemberList = [
      new TeamMemberModel({
        name: '@Donald Laughlin',
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        img: "../../../../../assets/images/team/team-3.png",
        isActive: true,
        links: new TeamMemberLinksModel({
          github: 'https://github.com/AnaelR',
          skype: 'https://anael.dev',
          twitter: 'https://twitter.com/AnaelR'
        })
      }),
      new TeamMemberModel({
        img: "../../../../../assets/images/team/team-2.png",
        name: "@Rigoberto Valenza",
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        isActive: false,
        links: new TeamMemberLinksModel({
          // github: 'https://github.com/AnaelR',
          skype: 'https://anael.dev',
          twitter: 'https://twitter.com/AnaelR'
        })
      }),
      new TeamMemberModel({
        img: "../../../../../assets/images/team/team-1.png",
        name: "@Venessa Smith",
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        isActive: true,
        links: new TeamMemberLinksModel({
          github: 'https://github.com/AnaelR',
          skype: 'https://anael.dev',
          twitter: 'https://twitter.com/AnaelR'
        })
      })
    ]
  }

  ngOnInit(): void {
  }

}
