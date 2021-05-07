import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  constructor() { }
  dataHeaders=['CheckBoxType','text','Number','Inputs','Checkbox','Radio']
  tableDataFixed=[[{'CheckBoxType':''},{'text':'text'},{'Number':12345},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}],
  [{'CheckBoxType':''},{'text':'text'},{'Number':12345789},{'Inputs':''},{'Checkbox':''},{'Radio':''}]
];;
  ngOnInit(): void {
  }

}
