import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { ShoppingProvider } from './../../providers/shopping/shopping.service';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  shoppingItem: Item = {
    description: undefined,
    quantity: undefined,
    price: undefined
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private service: ShoppingProvider,
              private serviceToast: ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(){
    this.service.addItem(this.shoppingItem).then(val =>{
      this.serviceToast.show(`${this.shoppingItem.description} has been created`);
      this.navCtrl.setRoot('HomePage')
    });
  }


}
