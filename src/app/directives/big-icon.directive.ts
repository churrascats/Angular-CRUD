import { Directive, ElementRef, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[app-big-icon]',
})
export class BigIconDirective implements AfterViewInit {
  htmlItem: HTMLElement

  constructor(private el: ElementRef) {
    this.htmlItem = el.nativeElement
  }

  ngAfterViewInit(): void {
    this.htmlItem
      .querySelector('.mat-button-wrapper')
      ?.setAttribute('style', 'padding: 0')
  }
}
