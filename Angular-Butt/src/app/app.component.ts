import { Component, OnInit } from '@angular/core';
import { DatamanagementService } from './shared/datamanagement.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Butt';
  originalData: any = [];
  readata:any = [];


  constructor(
    private readonly datamanagementService: DatamanagementService
  ){}

  ngOnInit(){
    this.getApiData();
  }


  getApiData(){
    this.datamanagementService.getApiData().subscribe((response:any) => {

    console.log(response);
    const { metadata,items } = response;
    const { stations } = metadata;
    const { readings } = items[0];
    this.originalData = stations;
    console.log(this.originalData);
    this.readata = readings;
    console.log(this.readata);



  
        });

  }

  clearAll(){
    this.originalData = [];
  }


}

