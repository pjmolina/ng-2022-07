import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const elMock = {
      nativeEllement: {},
    } as unknown as ElementRef<any>;
    const rendererMock = {
      setStyle: () => {},
    } as unknown as Renderer2;

    const directive = new HighlightDirective(elMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
