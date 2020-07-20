import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AosToken } from './aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prab Builders';
  hidegoTopBar = true

 
  constructor(@Inject(AosToken) aos, public router: Router) {
    // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
    aos.init();
    aos.init({ disable: 'tablet' });
  }



  ngOnInit() {
  }





  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }
}
