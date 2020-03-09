import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableData} from "../../../@core/data/smart-table";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.scss']
})
export class ListNotificationComponent implements OnInit {
apiURL = 'https://aura.git.edu/api/notifs/';
data: any;
  settings = {
    hideSubHeader: true,
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
      title: {
        title: 'Title',
        type: 'string',
      },
      createdby: {
        title: 'Created By',
        type: 'string',
        editable:false,
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      audience: {
        title: 'Audience',
        type: 'string',
        editable:false,
      },
      type: {
        title: 'Type',
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
        createdby: 'Chode Jhaad Ko',
        title: event.newData.title,
        description: event.newData.description,
        audience: event.newData.audience,
        type: event.newData.type,
      }
      this.http.put(this.apiURL +event.data.id,body)
        .subscribe((data)=>{
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
