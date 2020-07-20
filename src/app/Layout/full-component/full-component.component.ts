import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from 'src/app/ComponentPackage/navbar/navbar.component';
@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.css']
})
export class FullComponentComponent implements OnInit {

  Tag = "FullComponent";
  @ViewChild(NavbarComponent, { read: true, static: false }) navbar: NavbarComponent;
  url: string;
  constructor(private renderer: Renderer2, private element: ElementRef, private router: Router) {
    this.url = this.router.url
  }

  ngOnInit(): void {
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 350 || window.pageYOffset > 350) {
        
          document.getElementById("myBtn").style.display = "block";
          document.getElementById("myBtn").classList.add("lightSpeedIn") ;
          document.getElementById("myBtn").classList.remove("lightSpeedOut") ;
          // document.getElementById("bounce").classList.add("bounceIn");
       
      } else {
          document.getElementById("myBtn").classList.remove("lightSpeedIn") ;
          document.getElementById("myBtn").classList.add("lightSpeedOut") ; 
      }
  });
  navbar.scrollIntoView({behavior: "smooth", block: "start"})
  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
     
      $("#mytoggle").attr("aria-expanded","false");
      document.getElementById('probootstrap-navbar').classList.remove('show')
      document.getElementById('mytoggle').classList.add('collapsed')
      document.getElementById('probootstrap-navbar').style.display="none"   
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height+10
   
  }, 0);
  return false;
});
nav.find('a').on('click', function () {
    $('.navbar-collapse').hide();
    $("#mytoggle").attr("aria-expanded","false");
    document.getElementById('probootstrap-navbar').classList.remove('show')
    document.getElementById('mytoggle').classList.add('collapsed')
    document.getElementById('probootstrap-navbar').style.display="none"
});
nav.find('#mytoggle').on('click', function () {
  
   if($("#mytoggle").attr("aria-expanded") == 'true')
   {
    document.getElementById('probootstrap-navbar').style.display="none"
    // document.getElementById('probootstrap-navbar').style.background="initial"
      
       
   }else 
   {
 
    
    document.getElementById('probootstrap-navbar').style.display="unset"
    // document.getElementById('probootstrap-navbar').style.background="rgba(44, 154, 155, 0.47)"
   } 
});
   
    
  }

}
