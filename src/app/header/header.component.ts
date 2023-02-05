import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!event.target.closest('p.dropdown')) {
      const arrowIcons = this.arrowIcons;
      if (arrowIcons.includes('icon-arrow-up')) {
        this.arrowIcons = ['icon-arrow-down', 'icon-arrow-down'];
      }
    }
  }

  arrowIcons: string[] = ['icon-arrow-down', 'icon-arrow-down'];
  constructor() {}
  changeArrow(index: number) {
    if (this.arrowIcons[index ^ 1] === 'icon-arrow-up') {
      this.arrowIcons[index ^ 1] = 'icon-arrow-down';
    }
    this.arrowIcons[index] =
      this.arrowIcons[index] === 'icon-arrow-down'
        ? 'icon-arrow-up'
        : 'icon-arrow-down';
  }
}
