import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('myWork') myWork: ElementRef;
  @ViewChild('aboutMe') aboutMe: ElementRef;
  @ViewChild('getInTouch') getInTouch: ElementRef;
  myWorkTop: number;
  aboutMeTop: number;
  getInTouchTop: number;
  constructor() { }

  public setMyWorkActive() {
    this.myWork.nativeElement.classList.add('active');
    this.aboutMe.nativeElement.classList.remove('active');
    this.getInTouch.nativeElement.classList.remove('active');
  }
  public setAboutMeActive() {
    this.myWork.nativeElement.classList.remove('active');
    this.aboutMe.nativeElement.classList.add('active');
    this.getInTouch.nativeElement.classList.remove('active');
  }
  public setGetInTouchActive() {
    this.myWork.nativeElement.classList.remove('active');
    this.aboutMe.nativeElement.classList.remove('active');
    this.getInTouch.nativeElement.classList.add('active');
  }
  public setNoActive() {
    this.myWork.nativeElement.classList.remove('active');
    this.aboutMe.nativeElement.classList.remove('active');
    this.getInTouch.nativeElement.classList.remove('active');
  }
  public setComponentHeights(myWorkTop: number, aboutMeTop: number, getInTouchTop: number) {
    this.myWorkTop = myWorkTop;
    this.aboutMeTop = aboutMeTop;
    this.getInTouchTop = getInTouchTop;
  }
  public onClick(item: number) {
    if (item === 0) {
      window.scrollTo({
        top: this.myWorkTop,
        left: 0,
        behavior: 'smooth'
      });
    } else if (item === 1) {
      window.scrollTo({
        top: this.aboutMeTop,
        left: 0,
        behavior: 'smooth'
      });
    } else if (item === 2) {
      window.scrollTo({
        top: this.getInTouchTop,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

}
