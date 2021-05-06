import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService,public activeModal:NgbActiveModal) { }
  tableData:any=[];
  dataColomns:any=[];
  dataColomnsForIteration:any=[];
  row:any=[];
  table_heading ='Table Heading';
  footer_content='Use the same goods Decription';
  searchText: any;
  showSearchBox:boolean=true;
  limit:number=3;
  showRowCheckbox:boolean=true;
  
  ngOnInit(): void {
    this.dataService.getPhotos().subscribe(res=>{
        this.tableData = res.slice(0,this.limit);
           for ( let key in this.tableData[0]){
            this.dataColomns.push(key);
           }
           console.log(this.tableData);
      })
      this.dataColomnsForIteration =  Object.assign({},...this.dataColomns)
      if(this.showRowCheckbox) {
            this.dataColomns=['type',...this.dataColomns];
      }
      console.log( this.dataColomnsForIteration,"---",this.dataColomns);
  }
}
