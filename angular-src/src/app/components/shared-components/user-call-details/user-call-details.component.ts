import { Component, Input, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-user-call-details',
  templateUrl: './user-call-details.component.html',
  styleUrls: ['./user-call-details.component.css']
})
export class UserCallDetailsComponent implements OnInit {

  @Input() 
  details: Array<any> = [];
  gridOptions: GridOptions = {};

  constructor() { 
  this.gridOptions = {};
        this.gridOptions = {
            context: {
                componentParent: this
            }
        };
        this.gridOptions.columnDefs = [
            {
                headerName: "Company",
                field: "client.company",
                filter: 'text'
            },
            {
                headerName: "Client Name",
                filter: 'text',
                valueGetter: (params) => params.data.client.firstName + " " + params.data.client.lastName
            },
            {
                headerName: "Calls",
                field: "calls",
                filter: 'text',
                cellStyle: {'text-align': 'center'}
            },
            {
                headerName: "Meetings",
                field: "meeting",
                filter: 'text',
                cellStyle: {'text-align': 'center'}
            }
        ];
        // setting up features for grid
        this.gridOptions.enableSorting = true;
        this.gridOptions.rowHeight =30
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.suppressRowClickSelection = true;
        this.gridOptions.rowData = [];
        // this.getMyTasks();

        var self = this;
        console.log()
        setTimeout(() => self.gridOptions.api.setRowData(this.details), 1000);
    }

  ngOnInit() {

  }

  ngOnChanges(){
  	if(this.details)
  		this.gridOptions.api.setRowData(this.details);
  }
}
