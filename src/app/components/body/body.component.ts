import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  public capacity?:number;
  public speed?:number;
  public time?:number;
  public percentage:number=0;
  public info:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public calculate(){
    if (this.capacity!=null && this.speed!=null && this.time!=null){
      this.percentage= Math.round((this.speed * this.time)/this.capacity*100) ;
      if (this.percentage<80) 
        this.info="Reservoir is safe";
      if (this.percentage>=80 && this.percentage<100) 
        this.info="Reservoir would be in critical state";
      if (this.percentage>=100)
         this.info="Reservoir would be overfilled"; 
    } 
  } 

}