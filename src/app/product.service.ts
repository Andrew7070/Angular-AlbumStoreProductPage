import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {
private _albumUrl: '../assets/album.json';
id: number;
// getAlbum: function



  constructor(private _http: Http) { };
  get getAlbum() {
    return this._http.get(this._albumUrl);
  }


}
