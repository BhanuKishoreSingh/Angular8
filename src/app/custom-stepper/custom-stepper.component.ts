import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css'],
    providers: [{provide: CdkStepper, useExisting: CustomStepperComponent}],
})
export class CustomStepperComponent extends CdkStepper {
    currentStepStatusOptions = ['A','B','C'];
    currentStepStatus = 'A';

    onClick(index: number): void {
      this.selectedIndex = index;
      switch(index) {
        case 1: {
          this.currentStepStatus = this.currentStepStatusOptions[index - 1];
          break;
        }
        case 2: {
          this.currentStepStatus = this.currentStepStatusOptions[index - 1];
          break;
        }
        case 3: {
          this.currentStepStatus = this.currentStepStatusOptions[index - 1];
          break;
        }
        default:{
          this.currentStepStatus = this.currentStepStatusOptions[2];
          break;
        }
      }
    }


}