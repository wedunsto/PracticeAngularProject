import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ds-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports :[CommonModule]
})

export class ButtonComponent {
    @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    get buttonClasses() {
        const baseClasses = 'text-white font-medium rounded-lg';

        const typeClasses = {
            primary: 'bg-blue-700',
            secondary: 'bg-gray-500',
            danger: 'bg-red-600'
        };

        const sizeClasses = {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg'
        };

        return `${baseClasses} ${typeClasses[this.type]} ${sizeClasses[this.size]}`;
    }
}