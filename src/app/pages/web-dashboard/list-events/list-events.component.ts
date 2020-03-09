import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
  // apiURL = 'http://192.168.0.153:3000/events/'
  apiURL = 'https://aura.git.edu/api/events/'
  data: any;

  settings = {
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable:false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      oneliner: {
        title: 'oneLiner',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
        editable:false,
      },
      minTeamSize: {
        title: 'Min Team Size',
        type: 'string',
      },
      maxTeamSize: {
        title: 'Max Team Size',
        type: 'string',
      },
      registrationLimit: {
        title: 'registrationLimit',
        type: 'string',
      },
      club: {
        title: 'club',
        type: 'number',
        editable:false,
      },
      coords: {
        title: 'coords',
        type: 'number',
        editable:false,
      },
      rounds: {
        title: 'rounds',
        type: 'number',
        editable:false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData, private http:HttpClient) {
    const data = this.service.getData();
    this.http.get(this.apiURL)
      .subscribe((data)=>{
        this.data = data;
        this.source.load(this.data)
      })
  }

  ngOnInit() {

  }

  onEditConfirm(event): void {
    console.log(event.data.id)
    if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve();
      var body = {
        name: event.newData.name,
        description: event.newData.description,
        oneliner: event.newData.oneLiner,
        teamSize: event.newData.teamSize,
        registrationLimit: event.newData.registrationLimit,
        club: event.newData.club,
        category: event.newData.category,
        coords: event.newData.coords,
        rounds: event.newData.rounds
      }
      console.log(body)
      this.http.put(this.apiURL +event.data.id,body)
        .subscribe((data)=>{
          console.log(data)
        })
    } else {
      event.confirm.reject();
    }
  }
  onDeleteConfirm(event): void {
    console.log(event.data.id)
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.http.delete(this.apiURL+event.data.id)
        .subscribe((data)=>{
        })
    } else {
      event.confirm.reject();
    }
  }
}
