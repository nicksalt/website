import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
    const options = {
        strings: ['Developer:', 'Mobile,', 'Frontend,', 'Backend.', 'Hey, I\'m Nick.'],
        typeSpeed: 30,
        backSpeed: 10,

    };
    
    const typed = new Typed('.typed', options);
  }

}

