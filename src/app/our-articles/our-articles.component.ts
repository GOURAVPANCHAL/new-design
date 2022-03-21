import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.css']

})
export class OurArticlesComponent implements OnInit {
  images = [{ name: '/assets/pic1.jpg' }, { name: '/assets/pic2.jpg' },]
  texts = [{ name: '/assets/logo1.jpg' }, { name: '/assets/logo2.jpg' }, { name: '/assets/logo3.jpg' }, { name: '/assets/logo4.jpg' }, { name: '/assets/logo5.jpg' }]

  constructor() {

  }

  ngOnInit(): void {
  }

  popup() {
    swal("Good job!", "You clicked the button!", "success");
  }
}
