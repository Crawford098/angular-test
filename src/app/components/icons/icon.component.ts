import { Component, Input, numberAttribute } from "@angular/core";

@Component({
    selector: 'icon',
    standalone: true,
    styleUrl: './icon.component.css',
    templateUrl: './icon.component.html',
    imports: []
})

export class IconComponent {

    @Input({required:true}) url!: string;
    @Input({transform: numberAttribute}) width?: number = 18;
    @Input({transform: numberAttribute}) height?: number = 18;
    @Input() alt?: number = 18;

}