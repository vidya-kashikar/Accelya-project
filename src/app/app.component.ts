import { Component } from '@angular/core';
import {NgbModal,NgbActiveModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from './report/report.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Accelya-Project';
  configuration = {
    table_heading:'Activity List',
    footer_content:'Use the same goods Decription',
    showcheckbox:false,
    limit:10,
    component_width:'500px',
    showSearchBox:true
  }
  constructor(private modalService:NgbModal){}
  open() { 
    //,{ size: 'lg'}
    const modalRef =  this.modalService.open(ReportComponent);
    modalRef.componentInstance.configuration = this.configuration;
  }

  toggleEditable(event:any) {
    //alert(event.target.checked)
    this.configuration.showcheckbox = true ? event.target.checked:false;
  }

  toggleSearch(event:any) {
    this.configuration.showSearchBox = true ? event.target.checked:false;
  }

}
