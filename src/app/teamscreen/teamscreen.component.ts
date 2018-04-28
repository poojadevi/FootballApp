import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DatashareService} from '../datashare.service';
import { Router} from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-teamscreen',
  templateUrl: './teamscreen.component.html',
  styleUrls: ['./teamscreen.component.scss']
})
export class TeamscreenComponent implements OnInit {
public TeamList : any ;
public PlayerDetails : any ;
 public showlist = false;
 public boolean = false;
  constructor(private _data:DatashareService) { 
  }

  ngOnInit() {
   this._data.getTeamList().subscribe(data => {this.TeamList = data});
   this.showlist = true;
  }
  GetSelectedPlayers(url){
   this._data.getPlyerdata(url).subscribe(data => {this.PlayerDetails = data});
   this.boolean = true;
  }


}
