import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompetition } from './cometition';
import { IPoints } from './points';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class DatashareService {
private token : string = 'a5395c33196d4e128a590b6c1bf6b396';
private _url : string = 'http://api.football-data.org/v1/competitions/?season=2015';
private _url1 : string = 'http://api.football-data.org/v1/competitions/398/leagueTable';
private _url_team : string = 'http://api.football-data.org/v1/competitions/398/teams';
   constructor(private http:HttpClient) {}
 
	 getData():Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(this._url);
  } 
  getTeamList():Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(this._url_team);
  } 
  getPointsData(id):Observable<IPoints[]>{
  this._url1 = 'http://api.football-data.org/v1/competitions/'+id+'/leagueTable';
    return this.http.get<IPoints[]>(this._url1);
  }
  getPlyerdata(url):Observable<IPoints[]>{
    return this.http.get<IPoints[]>(url);
  }
  getEmp(){
  return [{id:1,Name:'Test'},{id:2,Name:'Test'}]
  }
}
