import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormComponent, DxFormModule } from 'devextreme-angular';
@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
        CommonModule,
        DxFormModule
    ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
    @ViewChild(DxFormComponent) form?: DxFormComponent;
  customer = {
        name: 'John Heart',
        productId: 901,
        quantity: 1,
        purchaseDate: new Date()
    }
 
    purchaseDateOptions = {
        disabled: true
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
                console.log("Product ID :", this.customer.productId);
                console.log("Quantity :", this.customer.quantity);
                console.log("Purchase Date :", this.customer.purchaseDate);

                alert("Form is valid");
                console.log("Form Data:", this.customer);

            } else {
                alert("Form is invalid");
                
            }
        }
    }

}
