import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DogService {

  domain = "http://localhost:3000/";
  options;

  constructor(
    private http: Http
  ) { }

  // authenticate routes
  // create headers to be used in HTTP requests
  // createHeaders() {
  //   this.options = new RequestOptions({
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     })
  //   });
  // }


  newMatch(dog) {
    // this.createHeaders();
    return this.http.post(this.domain + 'dogs/newMatch', dog).map(res => res.json());
  }

  //receive dog by id
  getSinlgeDog(id){
    return this.http.get(this.domain + 'dogs/singleDog/' + id).map(res => res.json());
  }


}
