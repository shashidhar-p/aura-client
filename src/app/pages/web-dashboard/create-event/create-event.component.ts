import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ngx-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  coordsCount:number =1;
  coordsArray:Array<number>= [];
   arr:Array<{name:string,contact:number}>= [];
  files: File[] = [];
  form: FormGroup;
   roundsCount:number=1;
   roundsArray:Array<number>=[];

  constructor(public  fb: FormBuilder) {
    this.coordsArray.push(this.coordsCount);
    this.coordsCount+=1;

    this.roundsArray.push(this.roundsCount);
    this.roundsCount+=1;
  }

  ngOnInit() {
  this.form =new FormGroup({
    eventName : new FormControl(null, {validators: [Validators.required]}),
    description : new FormControl(null, {validators: [Validators.required]}),
    teamSize: new FormControl(null, {validators: [Validators.required]}),
    registrationLimit : new FormControl(null, {validators: [Validators.required]}),
    club : new FormControl(null, {validators: [Validators.required]}),
    category : new FormControl(null, {validators: [Validators.required]}),
    coords1Name : new FormControl(null, {validators: [Validators.required]}),
    coords1Contact : new FormControl(null, {validators: [Validators.required]}),
    round1Date : new FormControl(null, {validators: [Validators.required]}),
    round1Start : new FormControl(null, {validators: [Validators.required]}),
    round1End : new FormControl(null, {validators: [Validators.required]}),
  });
  }
  onClick() {



    this.form.addControl('coords'+this.coordsCount+'Name',this.fb.control(null, {validators: [Validators.required]}));
    this.form.addControl('coords'+this.coordsCount+'Contact',this.fb.control(null, {validators: [Validators.required]}));
    this.coordsArray.push(this.coordsCount);
    this.coordsCount +=1;
    console.log(this.form.value);
  }

  onDelete(x){

    for(var i = this.coordsArray.length - 1; i >= 0; i--) {
      if(this.coordsArray[i] === x) {
        if(this.coordsArray.length==1)
        {
          break;
        }
        else{
          this.coordsArray.splice(i, 1);
        }


      }
    }
    console.log(x);

  }

  addRound(){
    this.roundsArray.push(this.roundsCount);
    this.roundsCount+=1;
  }

  deleteRound(){
    if(this.roundsArray.length===1)
    {
      return;
    }
    else{
      this.roundsArray.pop();
      this.roundsCount-=1;
    }

  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSubmit() {
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value);
  }
}
