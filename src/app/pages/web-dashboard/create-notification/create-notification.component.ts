import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent implements OnInit {
  apiURL = 'https://aura.git.edu/api/notifs/'
  form: FormGroup;
  constructor(private http:HttpClient,private router:Router){ }

  ngOnInit(){
    this.form =new FormGroup({
      // createdby : new FormControl(null, {validators: [Validators.required]}),
      title : new FormControl(null, {validators: [Validators.required]}),
      description : new FormControl(null, {validators: [Validators.required]}),
      audience : new FormControl(null, {validators: [Validators.required]}),
      type : new FormControl(null, {validators: [Validators.required]}),
    });
  }
  onSubmit() {
    if(this.form.invalid){
      return
    }
    else {
      var body = {
        createdby: 'Chode Jhaad Ko',
        title: this.form.value.title,
        description: this.form.value.description,
        audience: this.form.value.audience,
        type: this.form.value.type,
      }
      this.http.post(this.apiURL,body)
        .subscribe(data=>{
          console.log(data)
          this.router.navigate(['/','pages','web-dashboard','list-notification']);
        })
    }
  }
}
