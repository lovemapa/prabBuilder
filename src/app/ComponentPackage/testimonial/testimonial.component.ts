import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  providers: [NgbCarouselConfig]
})
export class TestimonialComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    animateIn:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false, 
    center: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

  constructor() {
  
  }

  ngOnInit(): void {
  }

}
