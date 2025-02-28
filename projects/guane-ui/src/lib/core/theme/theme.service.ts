import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type GuaneTheme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class GuaneThemeService {
  private _currentTheme = new BehaviorSubject<GuaneTheme>('system');

  currentTheme$ = this._currentTheme.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = this.getLocalStorageItem('guane-ui-theme') as GuaneTheme;
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else {
        this.setTheme('system');
      }
    }
  }

  setTheme(theme: GuaneTheme) {
    this._currentTheme.next(theme);

    if (isPlatformBrowser(this.platformId)) {
      this.setLocalStorageItem('guane-ui-theme', theme);
      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: GuaneTheme) {
    if (!isPlatformBrowser(this.platformId)) return;

    document.body.classList.remove('guane-light-theme', 'guane-dark-theme');

    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      theme = prefersDark.matches ? 'dark' : 'light';
    }

    document.body.classList.add(`guane-${theme}-theme`);
  }

  toggleTheme() {
    const currentTheme = this._currentTheme.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Métodos seguros para localStorage
  private getLocalStorageItem(key: string): string | null {
    try {
      return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    } catch {
      return null;
    }
  }

  private setLocalStorageItem(key: string, value: string) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch {
      // Manejar error de localStorage si es necesario
    }
  }

  // Método para obtener el tema actual
  getCurrentTheme(): GuaneTheme {
    return this._currentTheme.value;
  }
}
