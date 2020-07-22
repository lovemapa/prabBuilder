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
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false, 
    center: true,
    margin: 10,
    dots: true,
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
        items: 1
      }
    },
    nav: true
  }

  constructor() {
  
  }

  ngOnInit(): void {
  }

}
