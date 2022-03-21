import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }



  openNav() {

    let i: any = document.getElementById("mySidenav");
    i.style.width = "200px";
  }

  closeNav() {
    let i: any = document.getElementById("mySidenav");
    i.style.width = "0"
  }
  ngOnInit(): void {
  }


}
