import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<number>(); 

  public page = 1;
  
  next(){
    
    this.page++;
    this.pageChange.emit(this.page);
  }

  previous(){
    if (this.page === 1)return;
    this.page--;
    this.pageChange.emit(this.page);
  }
}
