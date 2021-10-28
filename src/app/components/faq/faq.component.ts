import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  textFaq = "You want customer to your store. Easily publish your coupans and\n" +
    "                when a user has manage to catch one of your coupens, the coupens wil be deducted\n" +
    "                from your coupens account at Clooger."

  textUppercase = "You want customer to your store. Easily publish your coupans and\n" +
    "                when a user has manage to catch one of your coupens, the coupens wil be deducted\n" +
    "                from your coupens account at Clooger."

  constructor() { }

  ngOnInit(): void {
  }

}
