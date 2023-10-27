import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-comtwo',
  templateUrl: './comtwo.component.html',
  styleUrls: ['./comtwo.component.scss']
})
export class ComtwoComponent {
  count:any

  objSurname:any;

  constructor(private service : GlobalService){
    this.service.count.subscribe((res:any)=>{
      this.count = res
    })

    this.service.obj.subscribe((res:any)=>{
      this.objSurname = res.surname
    })
  }
}
