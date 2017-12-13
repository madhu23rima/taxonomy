import { Component, OnInit,Injectable } from '@angular/core';
import { ITaxonomyItem } from '../taxonomy/taxonomy.model'
import { HttpClient ,HttpParams }  from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class TaxonomyService {
   

    constructor(private httpclient: HttpClient ){
       
    }
  
    get(id: number): Observable<ITaxonomyItem> {

       return  this.httpclient.get<ITaxonomyItem>('http://localhost:27004/api/systemcodes',{params: new HttpParams().set('id', id.toString())});
    }

    getAll(): Observable <ITaxonomyItem[]> {     
       return  this.httpclient.get<ITaxonomyItem[]>('http://localhost:27004/api/systemcodes');
     
    }

    save(data :  ITaxonomyItem): Observable<any>{       
        return this.httpclient.post('http://localhost:27004/api/systemcodes',data)
          
     }
}

