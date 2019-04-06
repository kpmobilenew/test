import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
constructor(public popoverController: PopoverController) {}


  doRefresh(event) {
    debugger
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  // clickedStar(){
  //   alert("asda")
  // }


  async clickedStar(ev: any) {
    console.log(ev)
    const popover = await this.popoverController.create({
      component: "popover-example-page",
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
