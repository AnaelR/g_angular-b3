import {TeamMemberLinksModel} from "./team-member-links.model";
import {Model} from "./interfaces/model";

// export interface TeamMemberModel {
//   img: string
//   name: string
//   text: string
//   isActive: boolean
//   links: TeamMemberLinksModel
// }

export class TeamMemberModel implements Model{
  readonly img: string
  readonly name: string
  readonly text: string
  readonly isActive: boolean
  readonly links: TeamMemberLinksModel
  constructor(input: Partial<TeamMemberModel>) {
    this.name = input.name || ''
    this.img = input.img || ''
    this.text = input.text || ''
    this.isActive = input.isActive || false
    this.links = new TeamMemberLinksModel(input.links || {})
  }
}
