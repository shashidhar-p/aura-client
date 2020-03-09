import { Component, OnInit, Type } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  // apiURL = 'http://192.168.0.153:3000/events/'
  apiURL = 'https://aura.git.edu/api/events/'
  coordsCount:number =1;
  coordsArray:Array<number>= [];
  coordsFinal:Array<{}> = [];
  roundFinal:Array<{}> = [];
  arr:Array<{name:string,contact:number}>= [];
  files: File[] = [];
  poster: File;
  form: FormGroup;
   roundsCount:number=1;
   roundsArray:Array<number>=[];
   clubs= ['dance','dramatics','fashion','finearts','literary','music','quiz','photography','specials'];
   category = ['platinum','gold','silver']

  constructor(public  fb: FormBuilder,private http:HttpClient, private router: Router) {
    this.coordsArray.push(this.coordsCount);
    this.coordsCount+=1;

    this.roundsArray.push(this.roundsCount);
    this.roundsCount+=1;
  }

  ngOnInit() {
  this.form =new FormGroup({
    eventName : new FormControl(null, {validators: [Validators.required]}),
    description : new FormControl(null, {validators: [Validators.required]}),
    oneliner: new FormControl(null, {validators: [Validators.required]}),
    minTeamSize: new FormControl(null, {validators: [Validators.required]}),
    maxTeamSize: new FormControl(null, {validators: [Validators.required]}),
    registrationLimit : new FormControl(null, {validators: [Validators.required]}),
    club : new FormControl(null, {validators: [Validators.required]}),
    category : new FormControl(null, {validators: [Validators.required]}),
    coords1Name : new FormControl(null, {validators: [Validators.required]}),
    coords1Contact : new FormControl(null, {validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]}),
    round1Date : new FormControl(null, {validators: [Validators.required]}),
    round1Start : new FormControl(null, {validators: [Validators.required]}),
    round1End : new FormControl(null, {validators: [Validators.required]}),
  });
  }
  onClick() {



    this.form.addControl('coords'+this.coordsCount+'Name',this.fb.control(null, {validators: [Validators.required]}));
    this.form.addControl('coords'+this.coordsCount+'Contact',this.fb.control(null, {validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]}));
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
          this.form.removeControl('coords'+x+'Name');
          this.form.removeControl('coords'+x+'Contact');
          this.coordsArray.splice(i, 1);
        }
      }
    }
    console.log(x);

  }
del=0
  addRound(){
    this.form.addControl('round'+this.roundsCount+'Date',this.fb.control(null, {validators: [Validators.required]}));
    this.form.addControl('round'+this.roundsCount+'Start',this.fb.control(null, {validators: [Validators.required]}));
    this.form.addControl('round'+this.roundsCount+'End',this.fb.control(null, {validators: [Validators.required]}));
    this.roundsArray.push(this.roundsCount);
    this.roundsCount+=1;
  }
x ={};
  deleteRound(){
    if(this.roundsArray.length===1)
    {
      return;
    }
    else{
      console.log(this.roundsCount);
      this.del = this.roundsCount -1;
      this.form.removeControl('round'+this.del+'Date');
      this.form.removeControl('round'+this.del+'Start');
      this.form.removeControl('round'+this.del+'End');
      this.roundsArray.pop();
      this.roundsCount-=1;
    }

  }
  onSelect(event) {
    console.log(event);
    this.poster = event.addedFiles[0];
    this.files.push(...event.addedFiles);

  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
k=[]
y={};
  onSubmit() {
    if(this.form.invalid){
      console.log('nai Hota')
      return;
    }
    Object.keys(this.form.controls).forEach(key => {
    this.k= key.toString().split(/\d{1,}/);
    if(this.k[0] == 'coords'){
      if(this.k[1] == 'Name'){
        this.x['Name'] = this.form.get(key).value;
      }
      if(this.k[1] == 'Contact'){
        this.x['Contact'] = this.form.get(key).value;
        this.coordsFinal.push(this.x)
        this.x ={};
      }
    }
    if(this.k[0] == 'round'){
      if(this.k[1] == 'Date'){
        this.y['Date'] =this.form.get(key).value;
      }
      if(this.k[1] == 'Start'){
        this.y['Start'] =this.form.get(key).value;
      }
      if(this.k[1] == 'End'){
        this.y['End'] =this.form.get(key).value;
        this.roundFinal.push(this.y);
        this.y={}
      }
        }
    });
    // console.log('coords: ' + this.coordsFinal[1]['Name']);
    // console.log('rounds: '+this.roundFinal[0]);
    // console.log('EventName: ' + this.form.value.eventName)
    // console.log('Description: ' + this.form.value.description)
    // console.log('TeamSize: ' + this.form.value.teamSize)
    // console.log('RegistrationLimit: ' + this.form.value.registrationLimit)
    // console.log('File: ' + this.files[0]);
    // console.log('Category: ' + this.form.value.category)
    // console.log('Club: ' + this.form.value.club)
    // console.log(this.files[0])
    // for(var i=0; i<this.coordsFinal.length;i++) {
    //   console.log(this.coordsFinal[i]['Name']);
    // }
    // for(var j=0; j<this.roundFinal.length;j++) {
    //   console.log(this.roundFinal[j]['End']);
    // }

    //name = this.form.value.eventName
    //description = this.form.value.description
    //teamSize = this.form.value.teamSize
    //registrationLimit = this.form.value.registrationLimit
    //file = this.files[0]
    //category = this.form.value.category
    //club = this.form.value.club
    const body = new FormData();
    body.set('name', this.form.value.eventName)
    body.set('description', this.form.value.description      )
    body.set('oneliner', this.form.value.oneliner)
    body.set('maxTeamSize', this.form.value.maxTeamSize)
    body.set('minTeamSize', this.form.value.minTeamSize)
    body.set('club', this.form.value.club)
    body.set('category', this.form.value.category)
    body.set('registrationLimit', this.form.value.registrationLimit)
    body.set('coords', JSON.stringify(this.coordsFinal))
    body.set('rounds', JSON.stringify(this.roundFinal))

    body.append('poster', this.poster)
    console.log(body);
    this.http.post(this.apiURL,body)
    .subscribe(data=>{
      this.router.navigate(['/','pages','web-dashboard','list-events'])
      console.log(data);
    })
  }
}
