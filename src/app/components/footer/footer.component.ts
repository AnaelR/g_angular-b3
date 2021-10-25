import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showText1 = true
  text1 = 'Terms & Condition'
  text2 = 'Privacy Policy'
  text3 = 'Contact Us'

  textObject = ['Privacy Policy', 'Contact Us']

  constructor() { }

  ngOnInit(): void {
  }

}
