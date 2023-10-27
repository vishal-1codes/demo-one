import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-comone',
  templateUrl: './comone.component.html',
  styleUrls: ['./comone.component.scss']
})
export class ComoneComponent {

  count:any

  objName:any;

  constructor(private service : GlobalService){
    this.service.count.subscribe((res:any)=>{
      this.count = res
    })

    this.service.obj.subscribe((res:any)=>{
      this.objName = res.name
    })
  }
}
