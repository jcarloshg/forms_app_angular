import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {

  menuItemsTemplate: MenuItem[] = [
    {
      texto: 'Basicos',
      route: './template/basicos',
    },
    {
      texto: 'Dinamicos',
      route: './template/dinamicos',
    },
    {
      texto: 'Switches',
      route: './template/switches',
    },
  ];

  menuItemsReactive: MenuItem[] = [
    {
      texto: 'Basicos',
      route: './reactive/basicos',
    },
    {
      texto: 'Dinamicos',
      route: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      route: './reactive/switches',
    },
  ];

  menuItemsAuth: MenuItem[] = [
    {
      texto: 'Login',
      route: './registro/login',
    },
    {
      texto: 'Registro',
      route: './registro/registro',
    },
  ];
}
