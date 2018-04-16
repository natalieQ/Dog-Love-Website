import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  messageClass;
  message;
  matches;
  findMatch = false;
  noMatch = false;
  length;

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService,
    private router: Router
  ) { 
    this.createNewForm();
  }

  createNewForm() {
    this.form = this.formBuilder.group({
      gender_user: ["", Validators.compose([
        Validators.required
      ])],
      gender_match: ["", Validators.compose([
        Validators.required
      ])],
      personality: ["", Validators.compose([
        Validators.required
      ])],
      toy: ["", Validators.compose([
        Validators.required
      ])],
      cat: ["", Validators.compose([
        Validators.required
      ])],     
    });
  }

  onSubmit() {
    console.log('form submitted');
    this.findMatch = false;
    this.noMatch = false;

    //create dog match 
    const dog = {
      gender: this.form.get('gender_match').value,
      personality: this.form.get('personality').value,
      likesToy: this.form.get('toy').value,
      likesCat: this.form.get('cat').value,
    }

    //send to backend through dog services
    this.dogService.newMatch(dog).subscribe(data => {
      if (!data.success) {
        if(data.message != "No matche found"){
          this.messageClass = 'alert alert-danger'; 
          this.message = data.message; 
        } else {
          this.noMatch = true;
        }
      } else {
        this.findMatch = true;
        this.messageClass = 'alert alert-success'; 
        this.message = data.message; 
        this.matches = data.matches;
        this.length = this.matches.length;
        console.log(data.matches);

      }

    });
  }

  ngOnInit() {
  }

}
