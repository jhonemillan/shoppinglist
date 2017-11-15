import { Item } from './../../models/item.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ShoppingProvider } from '../../providers/shopping/shopping.service';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable <Item[]>;

  constructor(public navCtrl: NavController,

              private service : ShoppingProvider) {
  this.shoppingList$ = this.service.getShopppigList().snapshotChanges()
                                   .map(changes => {return changes.map(c=>({key: c.payload.key, ...c.payload.val()}))});
                      

  }
}
