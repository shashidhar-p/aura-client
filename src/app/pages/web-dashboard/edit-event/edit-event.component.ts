import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  coordsCount:number =1;
  coordsArray:Array<number>= [];
  coordsFinal:Array<{}> = [];
  data: any;
  roundFinal:Array<{}> = [];
  arr:Array<{name:string,contact:number}>= [];
  files: File[] = [];
  form: FormGroup;
  roundsCount:number=1;
  roundsArray:Array<number>=[];


  constructor(public  fb: FormBuilder,private http:HttpClient, private router: Router) {

    this.coordsArray.push(this.coordsCount);
    this.coordsCount+=1;

    this.roundsArray.push(this.roundsCount);
    this.roundsCount+=1;
  }

  ngOnInit() {
    this.form = new FormGroup({
      eventName: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      teamSize: new FormControl(null, {validators: [Validators.required]}),
      registrationLimit: new FormControl(null, {validators: [Validators.required]}),
      club: new FormControl(null, {validators: [Validators.required]}),
      category: new FormControl(null, {validators: [Validators.required]}),
      coords1Name: new FormControl(null, {validators: [Validators.required]}),
      coords1Contact: new FormControl(null, {validators: [Validators.required]}),
      round1Date: new FormControl(null, {validators: [Validators.required]}),
      round1Start: new FormControl(null, {validators: [Validators.required]}),
      round1End: new FormControl(null, {validators: [Validators.required]}),
    });
    //   this.form.value.eventName = data.name,
    //   this.form.value.description=data.description,
    //   this.form.value.teamSize=data.teamSize,
    //   this.form.value.registrationLimit=data.registrationLimit,
    //   this.form.value.club=data.club,
    //   this.form.value.category=data.category,
    //   // this.coordsFinal,
    //   // this.roundFinal
    // console.log(data);
    console.log("on init:"+this.coordsCount);
    // this.getData();
  this.getData().then(data => {
    if (data != {}) {
      this.setData(data).then(result => console.log("SetData " + result));
    }
  })
    // console.log("After get data:"+this.coordsCount);
  }

  onClick() {

    this.form.addControl('coords'+this.coordsCount+'Name',this.fb.control(null, {validators: [Validators.required]}));
    this.form.addControl('coords'+this.coordsCount+'Contact',this.fb.control(null, {validators: [Validators.required]}));
    this.coordsArray.push(this.coordsCount);
    this.coordsCount +=1;
    console.log("on click:"+this.coordsCount);
    // console.log(this.form.value);
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
    // console.log(x);

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

      this.del = this.roundsCount -1;
      this.form.removeControl('round'+this.del+'Date');
      this.form.removeControl('round'+this.del+'Start');
      this.form.removeControl('round'+this.del+'End');
      this.roundsArray.pop();
      this.roundsCount-=1;
    }

  }
  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);

  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  k=[]
  y={};
  onSubmit() {
    if(this.form.invalid){
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
          this.coordsFinal.push(this.x);
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
    var body = {
      name: this.form.value.eventName,
      description: this.form.value.description,
      teamSize: this.form.value.teamSize,
      registrationLimit: this.form.value.registrationLimit,
      file: this.files[0],
      club: this.form.value.club,
      category: this.form.value.category,
      coords: this.coordsFinal,
      rounds: this.roundFinal
    }
    this.http.post('http://localhost:3000',body)
      .subscribe(data=>{
        this.router.navigate(['/','pages','web-dashboard','list-events'])
        console.log("post data:"+data);


      })
    // this.form.reset();

  }

  async getData() {
    const data = await this.http.get('http://localhost:3000').toPromise();
    console.log("Tanuj Ravi Rao is Legend " );
    // .subscribe((data) =>{
    //   this.data = data;
    return data;
  }
  async setData(data) {
    this.form.get('eventName').setValue(data.name);
    this.form.get('description').setValue(data.description);
    this.form.get('teamSize').setValue(data.teamSize);
    this.form.get('registrationLimit').setValue(data.registrationLimit);
    this.form.get('club').setValue(data.club);
    this.form.get('category').setValue(data.category);
    console.log(data.coords.length);
    for (var i = 1; i <= data.coords.length - 1; i++) {
      this.onClick();
    }

    for (var i = 1; i < this.coordsCount; i++) {
      this.form.get('coords' + i + 'Name').setValue(data.coords[i - 1].Name);
      this.form.get('coords' + i + 'Contact').setValue(data.coords[i - 1].Contact);
    }

    for (var i = 1; i <= data.rounds.length - 1; i++) {
      this.addRound();
    }


    for (var i = 1; i < this.roundsCount; i++) {
      this.form.get('round' + i + 'Date').setValue(data.rounds[i - 1].Date);
      this.form.get('round' + i + 'Start').setValue(data.rounds[i - 1].Start);
      this.form.get('round' + i + 'End').setValue(data.rounds[i - 1].End);
    }
    return {result: "Success"};
  }


}
