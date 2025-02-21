import { Component } from "@angular/core";
import { IconComponent } from "../../icons/icon.component";

@Component({
    selector: 'desktop-nav',
    standalone: true,
    styleUrls: ['./desktop.component.css', '../navbar.component.css'],
    templateUrl: './desktop.component.html',
    imports: [IconComponent]
})

export class DesktopNavBar {

}