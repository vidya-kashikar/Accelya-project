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

  constructor(private modalService:NgbModal){}
  open() { 
    const modalRef =  this.modalService.open(ReportComponent);
    /*modalRef.componentInstance.hero = this.hero;
    let hero_Id = this.findHeroId();
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.heroes.push({"id":hero_Id+1,...receivedEntry});

      console.log(receivedEntry);
      });
        
      this.hero = {name:''};*/
  }
}
