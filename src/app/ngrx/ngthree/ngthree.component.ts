import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { decrement, increment, reset } from 'src/app/state/couter.action';
@Component({
  selector: 'app-ngthree',
  templateUrl: './ngthree.component.html',
  styleUrls: ['./ngthree.component.scss']
})
export class NgthreeComponent implements OnInit{

  //same name that define in app module : define state structure
  constructor(private store:Store<{counter:{counter:number}}>){

  }

  ngOnInit(): void {
   
  }

  onIncrement(){
    this.store.dispatch(increment())
  }


  onDecrement(){
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

}
