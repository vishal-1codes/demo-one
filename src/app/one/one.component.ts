import { Component,OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Observable,Subscription, debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';

 
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit{

contactForm = new FormGroup({
  firstname: new FormControl()
})

  subscriptionss$=new Subscription()

  constructor(private globalService:GlobalService){ }

  ngOnInit(): void {
   
  }

  getProductFun(){
   let productResult$ =  this.globalService.getProductsTwo()
   let subscriptions$=productResult$.subscribe(res=>{console.log("get res",res)} )
   this.subscriptionss$.add(subscriptions$)
   console.log("get subscription",subscriptions$);
   
  }

  ngOnDestroy(){
    this.subscriptionss$.unsubscribe()
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }


  public input$ = this.contactForm.controls.firstname.valueChanges.pipe(
    //it set default value for api call , it get data list google search histroy they we filter array of res
    startWith(''),
    //wait until we get all user data that they want to enter it stop repeating observation, it return stable value that enter in input
    debounceTime(1000), 
    //when user reapeat same query for api that time we only call api once we not try to send same query reapeat to server, hey check enter value in unique not reapeat 
    distinctUntilChanged(),
    //tap is like we are leasning conversion of pipe
    // tap((f)=>console.log(f))
    //switch map is like we use enter one query that, after some tie user go another query the switch map cancel 1st query and work on 2nd query parameters
    switchMap(name=>this.globalService.getPublic(name ?? ''))

    )


}
