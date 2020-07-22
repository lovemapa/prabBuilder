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
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'lastimage.JPG'
    )
  }

}
