import { DomseguroPipe } from './domseguro.pipe';
import { DomSanitizer } from '@angular/platform-browser';


describe('DomseguroPipe', () => {
  it('create an instance', () => {
    const pipe = new DomseguroPipe(omSanitizer: DomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
