import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DatashareService} from '../datashare.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-competition-screen',
  templateUrl: './competition-screen.component.html',
  styleUrls: ['./competition-screen.component.scss']
})
export class CompetitionScreenComponent implements OnInit {
scrName : string = "First Component";
public TestArry = [];
public CometitionList = [];
public PointsTableData : any ;
public selectedHero = {};
public boolean = false;
btnName : string = "Get Selected Points Table";
twoWayBind : string = "Custom Text";
Arraylist =[];
count : number;
  constructor(private _datashare:DatashareService) { 
  }

  ngOnInit() {
  this.count = this.Arraylist.length;
   this.TestArry=this._datashare.getEmp();
   this._datashare.getData().subscribe(data => this.CometitionList = data);
  }
  AddItem(){
  this.Arraylist.push(this.twoWayBind);
  this.twoWayBind = '';
  this.count = this.Arraylist.length;
  }
  GetSelectedPointsTable(id){
  
  	this._datashare.getPointsData(id).subscribe((data) => {this.PointsTableData = data},(err) => {
      console.log(err);
    });
	this.boolean = true;
  }
}
