import {Component, OnInit} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData: PricingData[]

  constructor() {
    this.pricingData = [
      new PricingData("29$", "1GB", "50MB", "No", 1, true),
      new PricingData("59$", "1GB", "50MB", "No", 2, false),
      new PricingData("79$", "1GB", "50MB", "No", 3, true)
    ]
  }

  ngOnInit(): void {
  }

  isActive(item: any){
    if (item.isActive === true){
    return 'active'
    } else {
      return ''
    }
  }
}

class PricingData {
  price: string
  bandwidth: string
  space:string
  support: string
  domain: number
  isActive: boolean
  constructor(price: string, bandwidth: string, space: string, support: string, domain: number, isActive: boolean) {
    this.price = price
    this.bandwidth = bandwidth
    this.space = space
    this.support = support
    this.domain = domain
    this.isActive = isActive
  }
}
