import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormFormat]',
  standalone: true,
})
export class FormFormatDirective {
  @HostListener('keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
