import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://img.favpng.com/14/12/13/web-development-icon-design-web-design-graphic-design-computer-icons-png-favpng-rxsrFtbeyivPkmhfgfEZzbaqR.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
