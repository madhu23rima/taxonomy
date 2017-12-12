import { Component, OnInit } from '@angular/core';
import { ITaxonomyItem } from '../taxonomy.model'
import { Router, ActivatedRoute } from '@angular/router';
import { TaxonomyService } from '../taxonomy.service';
@Component({
  selector: 'app-taxonomylist',
  templateUrl: './taxonomylist.component.html',
  styleUrls: ['./taxonomylist.component.css']
})
export class TaxonomylistComponent implements OnInit {
  taxonomyItemList: ITaxonomyItem[];
  displayItemList: ITaxonomyItem[];
  count: number
  constructor(private router: Router, private route: ActivatedRoute, private taxonomyService: TaxonomyService) { }

  ngOnInit() {
    this.taxonomyItemList = this.taxonomyService.getAll();   
    this.displayItemList = this.taxonomyItemList.slice(0, 5);
    this.count = this.taxonomyItemList.length;
   
  }

  onPageChange(pagination: { startIndex: number, endIndex: number }) {
    this.displayItemList = this.taxonomyItemList.slice(pagination.startIndex, pagination.endIndex + 1);
  }

}
