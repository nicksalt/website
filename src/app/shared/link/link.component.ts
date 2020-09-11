import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent{

  @Input() title: string;
  @Input() href: string;
  @Input() target: string = "_blank";
  @Input() color: string = "white";
  @Input('opacity') startingOpacity: number = 0.8; 
  firstRender: boolean = true;
  
  constructor(private cdRef:ChangeDetectorRef){}

  ngOnChanges(){
    if(!this.firstRender){
      console.log("link changed " + this.title + " " + this.firstRender);
      this.cdRef.detectChanges();
    }
    this.firstRender = false
    
  }

}
