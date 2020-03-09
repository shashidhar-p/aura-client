import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-list-coords',
  templateUrl: './list-coords.component.html',
  styleUrls: ['./list-coords.component.scss']
})
export class ListCoordsComponent implements OnInit {
  apiURL = 'http://192.168.0.153:3000/coords/';
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
        coordName: {
          title: 'Name',
          type: 'string',
        },
        coordEmail: {
          title: 'Email',
          type: 'string',
        },
        coordContact: {
          title: 'Contact',
          type: 'string',
        },
        coordUsn: {
          title: 'USN',
          type: 'string',
        },
        coordUid: {
          title: 'UID',
          type: 'number',
        },
        coordRole: {
          title: 'Role',
          type: 'number',
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
          coordName: event.newData.coordName,
          coordEmail: event.newData.coordEmail,
          coordContact: event.newData.coordContact,
          coordUsn: event.newData.coordUsn,
          coordUid: event.newData.coordUid,
          coordPassword: event.newData.coordPassword,
          coordRole: event.newData.coordRole,
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
  