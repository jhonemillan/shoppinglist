import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../models/item.model';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Injectable()
export class ShoppingProvider {
  //private shoppingItems = this.db.list<Item>('shopping-list');
  private shoppingItems: AngularFireList<Item>;

  constructor(private db: AngularFireDatabase) {
    this.shoppingItems = this.db.list('shopping-list');
  }

  getShopppigList(){
    return this.shoppingItems;
  }

  addItem(currentItem: Item){    
    //console.log(currentItem);
     return this.shoppingItems.push(currentItem);
  }

  editItem(currentItem: Item){
    return this.shoppingItems.update(currentItem.key,currentItem);
  }

  deleteItem(currentItem: Item){
    return this.shoppingItems.remove(currentItem.key)
  }

}
