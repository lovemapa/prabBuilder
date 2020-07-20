import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-project',
  templateUrl: './recent-project.component.html',
  styleUrls: ['./recent-project.component.css']
})
export class RecentProjectComponent implements OnInit {

  projectImages:Array<any>
  constructor() {
    this.projectImages=[];
    this.getImages();
   }

  ngOnInit(): void {
  }


  getImages(){
    this.projectImages.push(
    'image1',
    'image2',
    'image3',
    'image4',
    'image5',
    'image6',
    'image7',
    'image8',
    'image9',
    )
  }

}
