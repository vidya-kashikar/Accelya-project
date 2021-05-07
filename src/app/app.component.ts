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
    table_heading:'Activity chart',
    footer_content:'Use the same goods Decription',
    showcheckbox:false,
    limit:10,
    component_width:'800px'
  }
  constructor(private modalService:NgbModal){}
  open() { 
    const modalRef =  this.modalService.open(ReportComponent,{ size: 'lg'});
    modalRef.componentInstance.configuration = this.configuration;
  }

  toggleEditable(event:any) {
    //alert(event.target.checked)
    this.configuration.showcheckbox = true ? event.target.checked:false;
}
}
