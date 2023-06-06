import { Directive, ElementRef, HostListener, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[sharedInlineEdit]'
})
export class InlineEditDirective {
  @Input() control!: FormControl;

  @Output() onEditEnd = new EventEmitter<string>();

  constructor(public el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.enableEditing();
  }

  enableEditing() {
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
    this.el.nativeElement.focus();
  }

  @HostListener('blur')
  onBlur() {
    this.control!.setValue(this.el.nativeElement.textContent);
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'false');
    this.onEditEnd.emit(this.control!.value);
  }

  @HostListener('keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.onBlur();
  }

  selectInputText(): void {
    if (this.el && this.el.nativeElement) {
      const range = document.createRange();
      range.selectNodeContents(this.el.nativeElement);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}