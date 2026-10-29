import { afterNextRender, Directive, ElementRef, inject, OnDestroy, signal } from '@angular/core';

/** Hace que un elemento aparezca con un fundido cuando entra en pantalla. */
@Directive({
  selector: '[reveal]',
  host: { class: 'reveal', '[class.visible]': 'visible()' },
})
export class Reveal implements OnDestroy {
  protected readonly visible = signal(false);
  private observador?: IntersectionObserver;

  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }
      this.observador = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting) {
            this.visible.set(true);
            this.observador?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      this.observador.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
  }
}
