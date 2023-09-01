import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTruncateContent]'
})
export class TruncateContentDirective implements OnInit {
  private isContentTruncated: boolean = false;

  @Input() maxChars: number = 200;
  @Input() postContent: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.truncateContent();
  }

  truncateContent() {
    if (this.postContent.length > this.maxChars && !this.isContentTruncated) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML',
        this.postContent.slice(0, this.maxChars) + '<span>...</span>');
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.postContent);
    }
  }

  @HostListener('click')
  onClick() {
    this.isContentTruncated = !this.isContentTruncated;
    this.truncateContent();
  }
}
