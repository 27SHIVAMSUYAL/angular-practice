import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from, range, startWith } from 'rxjs';

import { DxFormComponent, DxFormModule } from 'devextreme-angular';
import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';
@Component({
    selector: 'app-customer-form',
    standalone: true,
    imports: [
        CommonModule,
        DxFormModule,
        DxDropDownBoxModule,
        DxListModule
    ],
    templateUrl: './customer-form.component.html',
    styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
    @ViewChild(DxFormComponent) form?: DxFormComponent;
    customer = {
        name: "Virat Kohli",
        mobile: 901,
        email: "virat@gmail.com",
        gender: "male",
        dob: new Date()
    }

    dobOptions = {
        disabled: false,
        startWith: new Date()
    }

    genders = [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "trans", name: "Trans" },
        { id: "bi", name: "Bi" },
        { id: "others", name: "Others" }
    ];

    isDropDownBoxOpened = false;

    changeDropDownBoxValue(args: any) {
        if (args.addedItems && args.addedItems.length > 0) {
            this.customer.gender = args.addedItems[0].id;
        }
        this.isDropDownBoxOpened = false;
    }

    submitButtonOptions = {
        text: "Submit the Form",
        onClick: () => {
            const formInstance = this.form?.instance;
            if (!formInstance) {
                alert("Form instance not found");
                return;
            }

            const validationResult = formInstance.validate();
            if (validationResult.isValid) {


                console.log("Customer name :", this.customer.name);
                console.log("mobile :", this.customer.mobile);
                console.log("email :", this.customer.email);
                console.log("D.O.B :", this.customer.dob);
                console.log("Gender :" , this.customer.gender);

                alert("Form is valid");
                console.log("Form Data:", this.customer);

            } else {
                alert("Form is invalid");

            }
        }
    }

}
