import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  Tag = "NavbarComponent";
  showAdvertisment = false;
  cookiesIsExit = false;
  profilepic: string;
  fullname: string;

  constructor(public router: Router) {
    this.showAdvertisment = false;
    this.cookiesIsExit = false;
    this.fullname = "";




  }






  ngOnInit(): void {
    window.onscroll = function () { myFunction() };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('stickynavbar')
      } else {
        navbar.classList.remove('stickynavbar')
      
      }
    }
  }

  goBack() {
    this.router.navigate(["/home"])
    window.scrollTo(0, 0)
  }






}
