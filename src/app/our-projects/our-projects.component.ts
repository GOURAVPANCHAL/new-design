import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {

  images = [{ name: '/assets/1.jpg' }, { name: '/assets/2.jpg' }, { name: '/assets/3.jpg' }, { name: '/assets/4.jpg' }, { name: '/assets/5.jpg' }, { name: '/assets/6.jpg' }]

  constructor() { }

  ngOnInit(): void {
  }

}
