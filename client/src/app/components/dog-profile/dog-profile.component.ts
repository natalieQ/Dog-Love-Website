import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { ActivatedRoute, Router } from '@angular/router';  //get current page url

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {

  dog = {
    profileID: Number,
    name: String,
    gender: String,
    personality: String,
    imgPath: String,
    likesToy: Boolean,
    likesCat: Boolean,
    owner: String,
  }
  curUrl;
  

  constructor(
    private dogService: DogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.curUrl = this.activatedRoute.snapshot.params;
    console.log(this.curUrl.id);
    this.dogService.getSinlgeDog(this.curUrl.id).subscribe(data => {
      if( data.success ){
        console.log(data.dog);
        this.dog = data.dog;
      }
    });
  }

}
