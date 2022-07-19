import { Directive, ElementRef, Renderer2 } from '@angular/core';

//  <div appHighlight>   ....  <div>

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
  }
}
