import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,of } from 'rxjs';

//other language using interface
export interface ODataResponse{
  value:any[]
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  
  count = new BehaviorSubject<any>(0)

  obj=new BehaviorSubject<Object>({name:'vishal',surname:'pawar'})

  baseurl:any;

  //other launguage done using interface
 

  constructor(private httpClient:HttpClient) { }




  public getProductsTwo(): Observable<any>{
    const url ='https://dummyjson.com/products'
    return this.httpClient.get<any>(url)
  }


  
  //it get return value in array
  public getPublic(name?:string): Observable<any[]>{
    return of([1,2,3,4,5])
  }

  //when we get response in object that time we do this ({value :any[]})
  public getPublicTwo(name?:string): Observable<{value:any[]}>{
    return this.httpClient.get<{value :any[]}>(`${this.baseurl}/people`);
  }

  //other language using interface
  public getPublicTwo2(name?:string): Observable<ODataResponse>{
    return this.httpClient.get<ODataResponse>(`${this.baseurl}/people`);
  }


  // rxjs starting


}
