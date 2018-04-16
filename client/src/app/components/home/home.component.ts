import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  messageClass;
  message;

  constructor(
    private formBuilder: FormBuilder
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

  // onSubmit() {
  //   console.log('form submitted');

  //   //create dog match 
  //   const recipe = {
  //     name: this.form.get('name').value,
  //     description: this.form.get('description').value,
  //     imagePath: this.form.get('imagePath').value,
  //     origin: this.form.get('origin').value,
  //     createdBy: this.username
  //   }

  // }

  ngOnInit() {
  }

}
