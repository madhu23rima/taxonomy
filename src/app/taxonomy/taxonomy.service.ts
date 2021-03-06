import { Component, OnInit, Injectable } from '@angular/core';
import { ITaxonomyItem } from '../taxonomy/taxonomy.model'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TaxonomyService {

    taxonomyItemList: ITaxonomyItem[];
    constructor(private httpclient: HttpClient) {
        this.initWithLocal();
    }

    get(id: number): Observable<ITaxonomyItem> {

        return this.httpclient.get<ITaxonomyItem>('http://localhost:27004/api/systemcodes', { params: new HttpParams().set('id', id.toString()) });
    }

    getAll(): Observable<ITaxonomyItem[]> {
        return this.httpclient.get<ITaxonomyItem[]>('http://localhost:27004/api/systemcodes');

    }

    save(data: ITaxonomyItem): Observable<any> {
        return this.httpclient.post('http://localhost:27004/api/systemcodes', data)

    }


    getlocal(id: number): ITaxonomyItem {

      var item= this.taxonomyItemList.find(x => x.Id === id); 
      return item;
    }

    getAlllocal(): ITaxonomyItem[] {
        return this.taxonomyItemList;

    }

    savelocal(data: ITaxonomyItem) {
        var item = this.taxonomyItemList.find(x => x.Id === data.Id);
        if (item) {      
        
            item.Code=data.Code;
            item.Description=data.Description;
            item.IsActive=data.IsActive;
            item.Type=data.Type;
        }
        else {
           
            data.Id=this.taxonomyItemList[ this.taxonomyItemList.length-1].Id +1;          
            this.taxonomyItemList.push(data);
        }

    }
    initWithLocal() {
        var items = [
            { Id: 1, Type: 'Account Role', Code: 1, Description: 'SME', IsActive: true },
            { Id: 2, Type: 'Account Role', Code: 2, Description: 'Primary Account Manager', IsActive: true },
            { Id: 3, Type: 'Account Role', Code: 3, Description: 'Secondary Account Manager', IsActive: true },
            { Id: 4, Type: 'Permission', Code: 1, Description: 'SME', IsActive: true },
            { Id: 5, Type: 'Permission', Code: 2, Description: 'SME', IsActive: true },
            { Id: 6, Type: 'Segmentation Tiers', Code: 1, Description: 'Tier 1', IsActive: true },
            { Id: 7, Type: 'Segmentation Tiers', Code: 2, Description: 'Tier 2', IsActive: true },
            { Id: 8, Type: 'Segmentation Tiers', Code: 3, Description: 'Tier 3', IsActive: true },
            { Id: 9, Type: 'Segmentation Tiers', Code: 4, Description: 'Tier 4', IsActive: true },
            { Id: 10, Type: 'Buying Relationship', Code: 1, Description: 'Seasonal', IsActive: true },
            { Id: 11, Type: 'Buying Relationship', Code: 2, Description: 'Transactional', IsActive: true },
            { Id: 12, Type: 'Buying Relationship', Code: 3, Description: 'Contractual', IsActive: true },
            { Id: 13, Type: 'Industry Vertical', Code: 1, Description: 'Agriculture', IsActive: true },
            { Id: 14, Type: 'Industry Vertical', Code: 2, Description: 'Apparel', IsActive: true },
            { Id: 15, Type: 'Industry Vertical', Code: 3, Description: 'Automotive', IsActive: true },
            { Id: 16, Type: 'Industry Vertical', Code: 4, Description: 'Banking', IsActive: true },
            { Id: 17, Type: 'Industry Vertical', Code: 5, Description: 'Biotechnology', IsActive: true },
            { Id: 18, Type: 'Industry Vertical', Code: 6, Description: 'Chemicals', IsActive: true },
            { Id: 19, Type: 'Industry Vertical', Code: 7, Description: 'Communications', IsActive: true },
            { Id: 20, Type: 'Industry Vertical', Code: 8, Description: 'Construction', IsActive: true },
            { Id: 21, Type: 'Industry Vertical', Code: 9, Description: 'Consulting', IsActive: true },
            { Id: 22, Type: 'Industry Vertical', Code: 10, Description: 'Education', IsActive: true },
            { Id: 23, Type: 'Industry Vertical', Code: 11, Description: 'Electronics', IsActive: true },
            { Id: 24, Type: 'Industry Vertical', Code: 12, Description: 'Energy', IsActive: true },
            { Id: 25, Type: 'Industry Vertical', Code: 13, Description: 'Engineering', IsActive: true },
            { Id: 26, Type: 'Industry Vertical', Code: 14, Description: 'Entertainment', IsActive: true },

        ]
        this.taxonomyItemList = items;
    }
}

