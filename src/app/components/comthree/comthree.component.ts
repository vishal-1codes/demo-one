import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-comthree',
  templateUrl: './comthree.component.html',
  styleUrls: ['./comthree.component.scss']
})
export class ComthreeComponent {

  constructor(private service : GlobalService){

  }

  changeCont(item:any){
    console.log(item)
    this.service.count.next(item)
  }

  changeNameSurname(name:any,surname:any){
    this.service.obj.next({name:name,surname:surname})
  }
}
