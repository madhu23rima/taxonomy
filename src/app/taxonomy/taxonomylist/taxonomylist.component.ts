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
  totalTaxonomyItems: number = 0;
  taxonomyItemList: ITaxonomyItem[];
  displayItemList: ITaxonomyItem[];
  serviceReady = false;
  constructor(private router: Router, private route: ActivatedRoute, private taxonomyService: TaxonomyService) {
  }

  ngOnInit() {
    if (this.serviceReady) {
      this.taxonomyService.getAll().subscribe(
        (data) => {
          this.taxonomyItemList = data.sort((a, b) => { return b.Id - a.Id });
          this.totalTaxonomyItems = this.taxonomyItemList.length;
          this.onPageChange({ startIndex: 0, endIndex: 9 });
        },
        (err) => {
          //have error handling code here

        });
    }
    else{
         this.initWithLocal();
    }

  }


  onPageChange(pagination: { startIndex: number, endIndex: number }) {
    if (this.taxonomyItemList) {
      this.displayItemList = this.taxonomyItemList.slice(pagination.startIndex, pagination.endIndex + 1);
    }
  }

  initWithLocal() {
    var items = this.taxonomyService.getAlllocal();
    this.taxonomyItemList = items;
    this.totalTaxonomyItems = this.taxonomyItemList.length;
    this.onPageChange({ startIndex: 0, endIndex: 9 });
  }

}
