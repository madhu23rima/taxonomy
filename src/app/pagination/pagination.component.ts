import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PagerService } from '../pagination/pagination.service'
import { Page } from '../pagination/page.model'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PagerService]
})
export class PaginationComponent implements OnInit {
  currentPage: number = 0;
  pager: Page =new Page(); 
  _allItemsLength:number;
  @Input() set allItemsLength(value: number){
    this._allItemsLength=value;
    this.setPage(1);   
  };
  @Output() pagination = new EventEmitter<{startIndex: number, endIndex: number}>();
  constructor(private pagerService: PagerService) { }

  ngOnInit() {      
  
  }

  setPage(pageNumber: number) {
    if (pageNumber < 1 ) {
      return;    }
    this.pager = this.pagerService.getPager(this._allItemsLength, pageNumber);    
    this.pagination.emit({startIndex:this.pager.startIndex,endIndex:this.pager.endIndex})
   
  }
  update(pagenumber:number){
    let pager=this.pagerService.getCurrentPageItemIndexs(this._allItemsLength, pagenumber)
    this.pager.currentPageNumber=pagenumber;
    this.pagination.emit({startIndex:pager.startIndex,endIndex:pager.endIndex})

  }

}
