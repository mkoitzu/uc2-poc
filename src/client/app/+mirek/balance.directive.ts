import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ausgabenbalance]'
})


export class BalanceDirective {

  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  public setHeight(height: string) {
    this.el.style.height = height;
  }
}

