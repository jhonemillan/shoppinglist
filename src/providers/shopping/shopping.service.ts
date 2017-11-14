import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../models/item.model';

@Injectable()
export class ShoppingProvider {
  private shoppingItems = this.db.list<Item>('shopping-list');

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ShoppingProvider Provider');
  }

  getShopppigList(){
    return this.shoppingItems;
  }

  addItem(currentItem: Item){    
    //console.log(currentItem);
     return this.shoppingItems.push(currentItem);
  }

}
