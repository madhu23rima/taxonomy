import { Component, OnInit } from '@angular/core';
import {TaxonomyService} from '../taxonomy/taxonomy.service'
@Component({
  selector: 'app-taxonomy',
  templateUrl: './taxonomy.component.html',
  styleUrls: ['./taxonomy.component.css'],
  providers:[TaxonomyService]
})
export class TaxonomyComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  }
}
