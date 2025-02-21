import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar.component';
import { MyData } from './pages/mydata/mydata.component';
import { Menu } from './components/footerMenu/menu.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Navbar, MyData, Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}