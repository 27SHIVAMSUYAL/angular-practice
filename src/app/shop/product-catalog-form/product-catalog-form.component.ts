import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { DxProgressBarComponent } from 'devextreme-angular/ui/progress-bar';
import { DxiDataGridColumnComponent } from 'devextreme-angular/ui/data-grid';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-product-catalog-form',
  imports: [DxDataGridComponent, DxProgressBarComponent, DxiDataGridColumnComponent],
  templateUrl: './product-catalog-form.component.html',
  styleUrl: './product-catalog-form.component.css'
})
export class ProductCatalogFormComponent {


  tasks:any[] = [
    { product_id: 1, product_name: "Buy groceries", product_quantity: 123,product_price: 10.5 },
    { product_id: 2, product_name: "Write a blog post", product_quantity: 456, product_price: 20.0 }
  ];


   onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.tasks = XLSX.utils.sheet_to_json(worksheet);
      };
      reader.readAsBinaryString(file);
    }
  }




}
