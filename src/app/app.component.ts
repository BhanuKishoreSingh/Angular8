import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Absence Report';
  form1 = new FormControl();
  statusOptions = ['Yes', 'No'];
  dropdownOptions = ['Own Illness or Injury', 'Care for Parent', 'Care for Parent-in-law', 'Care for Grandparent', 'Care for Spouse', 'Care for Child', 'Care for Grandchild', 'Care for Sibling', 'Care for Family', 'Bonding with a newborn/newly adopted/placement for foster care', 'Family Military/Exigency', 'Absence-Other'];
  optionResponse = '';
  intermittentStatus = false;
  displayIntermittentModal = false;
  errorModal = false;
  workIncidentStatus = false;

  constructor() {
  }

  getResponse(statusOption: any) {
    this.optionResponse = statusOption;
    this.nextStep();
  }
  getResponsePSL(statusOption: any) {
    this.optionResponse = statusOption;
    this.dropdownOptions = ['Absence-Other'];
  }

  nextStep() {
    if(this.optionResponse === 'Yes'){
      console.log('gotoNext');
    } else {
      this.intermittentStatus = true;
    }
  }
  getIntermittentStatusResponse(statusOption: any){
    if(statusOption === 'Yes'){
      this.displayIntermittentModal = true;
      this.errorModal = false;
    } else {
      this.errorModal = true;
      this.displayIntermittentModal = false;
    }
  }

  getReasonStatusResponse(statusOption: any){
    if(statusOption === 'Own Illness or Injury'){
      this.workIncidentStatus = true;
    } else {
      this.workIncidentStatus = false;
    }
  }
}
