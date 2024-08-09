import { Component, OnInit } from '@angular/core';
import { foodDetails } from '../../services/menulistdata';

@Component({
  selector: 'app-menu',
   templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menuList:any[] = foodDetails.menudata
  constructor(){}
  ngOnInit(): void {
    console.log(this.menuList,"menuList")
  }


}
