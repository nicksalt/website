import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    const options = {
        strings: ['Developer:', 'Android,', 'iOS,', 'Web.', 'Student.', 'Hey, I\'m Nick.'],
        typeSpeed: 30,
        backSpeed: 10,

    };
    const typed = new Typed('.typed', options);

    setTimeout(() => this.toastr.warning('Not all features work properly.', 'In Development', {
      positionClass: 'toast-bottom-center',
      closeButton: true,
      progressBar: true
    }));
  }

}

