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
  form: FormGroup;

  roles:Array<string> = [];
  constructor(public  fb: FormBuilder,private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.form =new FormGroup({
      coordinatorName : new FormControl(null, {validators: [Validators.required]}),
      coordinatorEmail : new FormControl(null, {validators: [Validators.required]}),
      coordinatorContact : new FormControl(null, {validators: [Validators.required]}),
      coordinatorUsn : new FormControl(null, {validators: [Validators.required]}),
      coordinatorUid : new FormControl(null, {validators: [Validators.required]}),
      coordinatorPassword : new FormControl(null, {validators: [Validators.required]}),
      coordinatorRole : new FormControl(null, {validators: [Validators.required]}),
    });

    this.getData().then(role=> {
      if (role != {}) {
        this.setRole(role).then(result => console.log("SetData " + result));
      }
    });
  }

  onSubmit() {
    if(this.form.invalid){
      return;
    }

    var body = {
      coordinatorName: this.form.value.coordinatorName,
      coordinatorEmail: this.form.value.coordinatorEmail,
      coordinatorContact: this.form.value.coordinatorContact,
      coordinatorUsn: this.form.value.coordinatorUsn,
      coordinatorUid: this.form.value.coordinatorUid,
      coordinatorPassword: this.form.value.coordinatorPassword,
      coordinatorRole: this.form.value.coordinatorRole,
    };

    console.log(body);
    this.http.post('http://localhost:3000',body)
      .subscribe(data=>{
        this.router.navigate(['/','pages','web-dashboard','list-coords']);
        console.log("post data:"+data);
      })
    // this.form.reset();

  }
    async getData() {
      const role = await this.http.get('http://localhost:3000/role').toPromise();
      return role;
    }

    async setRole(role){
      if(role != {}) {
        for (var z = 0; z < role.length ; z++) {
          this.roles[z] = role[z].designation;
          console.log(role[z].designation);
        }
      }

    }

}
