import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private router: Router
    ) {}

    onHome(): void {
        this.router.navigateByUrl('home');
    }

    onView(): void {
        this.router.navigateByUrl('recepie');
    }

    onAdd(): void {
        this.router.navigateByUrl('recepie/add');
    }
}