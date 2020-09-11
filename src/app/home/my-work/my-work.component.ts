import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, last  } from 'rxjs/operators';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects: Observable<Project[]>;
  projectsArray: Array<Project>;

  constructor(private db: AngularFirestore) {
    this.projects = this.db.collection<Project>('projects').valueChanges();

  }

  ngOnInit() {
    this.projects.subscribe(p => {
      this.projectsArray = p.sort((a,b) => a.order > b.order? 1: -1);
      this.projectsArray.forEach((p) => {
        p.image = "./assets/images/" + p.image;
      });
    });
  }
  

}
