import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private authService: AuthenticationService,
    public menuCtrl: MenuController,
    public router: Router) {
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.menuCtrl.close('mainMenu');
    this.goHome(); 
   }

   goHome() {
    this.router.navigateByUrl( 'tabs/home' );
  }

  scan(){
    this.router.navigateByUrl( 'tabs/home' );

  }

}
