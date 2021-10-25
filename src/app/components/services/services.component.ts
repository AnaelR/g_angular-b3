import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  dataService: ServiceData[]

  constructor() {
    this.dataService = [
      new ServiceData("ti-settings", "Digital Design", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      new ServiceData("ti-palette", "Unlimited Colors", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      new ServiceData("ti-stats-up", "Strategy Solutions", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      new ServiceData("ti-package", "Awesome Support", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      new ServiceData("ti-dashboard", "Truly Multipurpose", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      new ServiceData("ti-headphone", "Easy to customize", "Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    ]
  }

  ngOnInit(): void {
  }

}

class ServiceData {
  ico: string
  name: string
  description: string

  constructor(ico: string, name: string, description: string) {
    this.ico = ico
    this.name = name
    this.description = description
  }
}
