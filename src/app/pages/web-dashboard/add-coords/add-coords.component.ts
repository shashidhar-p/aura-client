import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-add-coords',
  templateUrl: './add-coords.component.html',
  styleUrls: ['./add-coords.component.scss']
})
export class AddCoordsComponent implements OnInit {
  // apiURL = 'http://192.168.0.153:3000/coords/'
  apiURL = 'https://aura.git.edu/api/coords/'
  form: FormGroup;
  files:File[]=[]
  roles:Array<string> = [];
  poster: File;
  submit: boolean=false;
  constructor(public  fb: FormBuilder,private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.form =new FormGroup({
      coordName : new FormControl(null, {validators: [Validators.required]}),
      coordEmail : new FormControl(null, {validators: [Validators.required]}),
      coordContact : new FormControl(null, {validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]}),
      coordUsn : new FormControl(null, {validators: [Validators.required]}),
      coordUid : new FormControl(null, {validators: [Validators.required]}),
      coordPassword : new FormControl(null, {validators: [Validators.required]}),
      coordRole : new FormControl(null, {validators: [Validators.required]}),
      // image : new FormControl(null, {validators: [Validators.required]}),
    });
  }
  onSelect(event) {
    // console.log(event);
    // const file = event.addedFiles[0]
    console.log(event.addedFiles[0])
    // this.form.controls['image'].setValue(event.addedFiles[0]);
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form.value.image)..
    this.poster = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.form.controls['image'].reset
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSubmit() {
    if(this.form.invalid){
      this.submit = true
      console.log('Nahi hora')
      console.log(this.form.value.image)
      return;
    }
    const body = new FormData();
    body.set('coordName', this.form.value.coordName)
    body.set('coordEmail', this.form.value.coordEmail      )
    body.set('coordContact', this.form.value.coordContact)
    body.set('coordUsn', this.form.value.coordUsn)
    body.set('coordUid', this.form.value.coordUid)
    body.set('coordPassword', this.form.value.coordPassword)
    body.set('coordRole', this.form.value.coordRole)
    body.append('image', this.poster)
    console.log(body);
    this.http.post(this.apiURL,body)
      .subscribe(data=>{
        this.router.navigate(['/','pages','web-dashboard','list-coords']);
        console.log("post data:"+data);
      })
    // this.form.reset();

  }

}
