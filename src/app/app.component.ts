import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'nicksalt.github.io';
  @ViewChild('myWorkComponent', {read: ElementRef}) myWorkRef: ElementRef;
  @ViewChild('aboutMeComponent', {read: ElementRef}) aboutMeRef: ElementRef;
  @ViewChild('getInTouchComponent', {read: ElementRef}) getInTouchRef: ElementRef;
  @ViewChild('navComponent') navComponent: NavComponent;
  myWorkTop: number;
  myWorkHeight: number;
  aboutMeTop: number;
  aboutMeHeight: number;
  getInTouchTop: number;
  getInTouchHeight: number;

  constructor(private scroll: ScrollDispatcher) {}

  ngAfterViewInit(): void {
    this.myWorkTop = this.myWorkRef.nativeElement.offsetTop;
    this.myWorkHeight = this.myWorkTop + this.myWorkRef.nativeElement.offsetHeight;
    this.aboutMeTop = this.aboutMeRef.nativeElement.offsetTop;
    this.aboutMeHeight = this.aboutMeTop + this.aboutMeRef.nativeElement.offsetHeight;
    this.getInTouchTop = this.getInTouchRef.nativeElement.offsetTop;
    this.getInTouchHeight = this.getInTouchTop + this.getInTouchRef.nativeElement.offsetHeight;
    this.navComponent.setComponentHeights(this.myWorkTop - 50,
      this.aboutMeTop, this.getInTouchTop);
    this.scroll
      .scrolled()
      .subscribe(() => {
        this.onWindowScroll();
      });
  }

  public onWindowScroll() {
    const documentHeight = document.documentElement.scrollTop + (window.innerHeight / 2);
    if (documentHeight < this.myWorkHeight &&
      this.myWorkTop < documentHeight) {
      this.navComponent.setMyWorkActive();
    } else if (documentHeight < this.aboutMeHeight &&
      this.aboutMeTop < documentHeight) {
      this.navComponent.setAboutMeActive();
    } else if (documentHeight < this.getInTouchHeight &&
      this.getInTouchTop < documentHeight) {
      this.navComponent.setGetInTouchActive();
    } else {
      this.navComponent.setNoActive();
    }
  }

  public onResize() {
    this.myWorkTop = this.myWorkRef.nativeElement.offsetTop;
    this.myWorkHeight = this.myWorkTop + this.myWorkRef.nativeElement.offsetHeight;
    this.aboutMeTop = this.aboutMeRef.nativeElement.offsetTop;
    this.aboutMeHeight = this.aboutMeTop + this.aboutMeRef.nativeElement.offsetHeight;
    this.getInTouchTop = this.getInTouchRef.nativeElement.offsetTop;
    this.getInTouchHeight = this.getInTouchTop + this.getInTouchRef.nativeElement.offsetHeight;
    this.navComponent.setComponentHeights(this.myWorkTop - 50,
      this.aboutMeTop, this.getInTouchTop);
    this.onWindowScroll();
  }


}


