import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private _jsonURL = 'assets/SampleJson.json';
  private _cameraList: Subject<any> = new Subject<any>();    // consider putting the actual type of the data you will receive
  public cameraListObs = this._cameraList.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getCameras(){
    this.http.get(this._jsonURL).subscribe(res=> {
      this._cameraList.next(this.shuffle(res))
    })
    return this.cameraListObs;
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
