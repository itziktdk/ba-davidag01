import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {
step1:boolean = true;
step2:boolean;
step2init:boolean = true;
step3:boolean = false;
step3init:boolean = true;
step4:boolean = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goStep2()
  {
    this.step1 = false;
    this.step2 = true;
    this.step2init = false;
    console.log(this.step3init);
  }

  goStep3()
  {
    this.step2 = false;
    this.step3 = true;
    this.step3init = false;
    console.log('step3 started');
    console.log(this.step3init);
  }

  goStep4()
  {
    this.step3 = false;
    this.step4 = true;
  }

  goHome()
  {
    this.navCtrl.navigateRoot('home');
  }


}
