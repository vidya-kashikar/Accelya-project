import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  constructor() { }
  dataHeaders=['text','Number','Inputs','Checkbox','Radio']
  //tableData=[{'text':'text'},{'Number':12345},{Inputs},{}];
  ngOnInit(): void {
  }

}
