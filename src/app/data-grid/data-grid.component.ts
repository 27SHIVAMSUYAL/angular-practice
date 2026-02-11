import { Component } from '@angular/core';



import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { DxProgressBarComponent } from 'devextreme-angular/ui/progress-bar';
import {  DxiDataGridColumnComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-data-grid',
  imports: [ DxDataGridComponent, DxiDataGridColumnComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent {

  
   tasks = [
        { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
        { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
    ];


}
