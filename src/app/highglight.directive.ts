import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighglight]'
})
export class HighglightDirective implements OnInit{

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'oui');
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'oui');
  }




}
