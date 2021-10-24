import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from '../pages/home-page/components/client/client.component';
import {FaqComponent} from '../pages/home-page/components/faq/faq.component';
import {PricingComponent} from '../pages/home-page/components/pricing/pricing.component';
import {ContactComponent} from '../pages/home-page/components/contact/contact.component';
import {SwitcherComponent} from '../pages/home-page/components/switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';

@NgModule({
  declarations: [
    ClientComponent,
    FaqComponent,
    PricingComponent,
    ContactComponent,
    SwitcherComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    ClientComponent,
    FaqComponent,
    PricingComponent,
    ContactComponent,
    SwitcherComponent,
    ScrollspyDirective
  ]
})
export class SharedModule {
}
