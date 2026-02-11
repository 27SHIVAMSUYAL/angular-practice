import { Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxFormModule } from 'devextreme-angular';
@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
        BrowserModule,
        CommonModule,
        DxFormModule
    ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
     employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    }
 
    hireDateOptions = {
        disabled: true
    }

}
