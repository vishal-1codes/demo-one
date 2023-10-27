import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
@Component({
  selector: 'app-ngone',
  templateUrl: './ngone.component.html',
  styleUrls: ['./ngone.component.scss']
})
export class NgoneComponent implements OnInit{
  counter:any;
  constructor(private store:Store<{counter:{counter:number}}>){

  }

  ngOnInit(): void {
   this.store.select('counter').subscribe(data=>{
    this.counter=data.counter
   })
  }

}
