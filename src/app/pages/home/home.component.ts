import { Component, OnInit } from '@angular/core';
import { foodDetails } from '../../services/menulistdata';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  menuList:any[] = foodDetails.menudata
  constructor(){}
  ngOnInit(): void {
    console.log(this.menuList)
    
  }
     
}
