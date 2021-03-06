import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { ShoppingProvider } from '../../providers/shopping/shopping.service';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  currentItem: Item;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ShoppingProvider,
              private serviceToast: ToastProvider) {
    
    this.currentItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  saveItem(){
    this.service.editItem(this.currentItem).then(()=>{
      this.serviceToast.show(`The ${this.currentItem.description} has been saved`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  deleteItem(){
    this.service.deleteItem(this.currentItem).then(()=>{
      this.navCtrl.setRoot('HomePage');
      this.serviceToast.show(`The ${this.currentItem.description} has been deleted`);
    })
  }

}
