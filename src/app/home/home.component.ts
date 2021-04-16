import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import Typed from 'typed.js';
import { SassHelperComponent } from '../provider/sass-helper/sass-helper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChild(SassHelperComponent, {static: false})
  private sassHelper: SassHelperComponent;

  public linkColor: string;
  

  ngOnInit() {
    this.changeBackground();
    const options = {
        strings: ['Developer:', 'Mobile,', 'Frontend,', 'Backend.', 'Hey, I\'m Nick.'],
        typeSpeed: 30,
        backSpeed: 10,

    };
    
    const typed = new Typed('.typed', options);



   
  }
  constructor(private el:ElementRef, private cdRef:ChangeDetectorRef){}

  ngAfterViewInit(){
    if(this.linkColor == null) {
      console.log(this.linkColor);
      this.cdRef.detectChanges();
    }
  }
  changeBackground(){
    document.getElementById("home").style.backgroundSize = `${this.el.nativeElement.offsetWidth}px ${this.el.nativeElement.offsetHeight}px`;
  }
}

