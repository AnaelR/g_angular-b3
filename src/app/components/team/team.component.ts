import {Component, Input, OnInit} from '@angular/core';
import {TeamMemberModel} from "../../models/team-member.model";
import {TeamMemberLinksModel} from "../../models/team-member-links.model";
import * as faker from "faker";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  teamMemberList: TeamMemberModel[]
  @Input()toggleSocialLinks: boolean

  constructor() {
    this.teamMemberList = [
      new TeamMemberModel({
        // name: '@Donald Laughlin',
        name: faker.name.findName('Donald', 'Laughlin', 1),
        // text: "You want customer to your store. Easily your coupans and has Clooger.",
        text: faker.lorem.text(20),
        // img: "../../../../../assets/images/team/team-3.png",
        img: faker.image.imageUrl(140, 140,undefined, true, true),
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
