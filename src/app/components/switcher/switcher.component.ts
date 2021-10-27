import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {

  themeList = ['default', 'pink', 'yellow', 'green', 'purple', 'light-blue']

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  isVisible = false

  public switcherReveal(): void {
    this.isVisible = !this.isVisible
  }

  public setTheme(color: string): void {
    const colors = document.getElementById('color-opt')
    if (!colors) return
      colors.setAttribute('href', "assets/css/colors/" + color + ".css")
  }

  public windowScroll(): void {
    const html = document.getElementById("back-to-top")
    if (!html) return
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
        html.style.display = "inline";
      } else {
        html.style.display = "none";
      }
  }
}
