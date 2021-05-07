import { Component, Input, OnInit } from '@angular/core';
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
  row:any=[];
  @Input() public configuration:any;
  searchText: any;
  
  ngOnInit(): void {
    console.log("in report",this.configuration);
    this.dataService.getPhotos().subscribe(res=>{
        this.tableData = res.slice(0,this.configuration.limit);
           for ( let key in this.tableData[0]){
            this.dataColomns.push(key);
           }
           console.log(this.tableData);
      })
      if(this.configuration.showcheckbox) {
            this.dataColomns=['type',...this.dataColomns];
      }
  }
}
