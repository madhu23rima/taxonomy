import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {TaxonomyService} from  '../taxonomy.service'
import { ITaxonomyItem } from '../taxonomy.model'
@Component({
  selector: 'app-taxonomyedit',
  templateUrl: './taxonomyedit.component.html',
  styleUrls: ['./taxonomyedit.component.css']
})
export class TaxonomyeditComponent implements OnInit {
 isEdit:boolean =false;
 id:number;
 taxonomyeditForm: FormGroup;
  constructor(private router:Router , private route: ActivatedRoute, private taxonomyService: TaxonomyService) { }

  ngOnInit() {
    
    let item:ITaxonomyItem;
    let type=''
    let code=null
    let desc=''
    let isactive=true;
    this.id=null

    this.route.params.subscribe( (param:Params ) => { 
      let tid= +param['id']
      console.log( 'id passed to Edit component is ' + tid);
      if(tid){
        this.isEdit=true;
        item=this.taxonomyService.get(tid);
        this.id=item.Id;
        type=item.Type;
        code=item.Code;
        desc=item.Description;
        isactive=item.IsActive;
       
      }
      else{
        this.isEdit=false;
        //this.taxonomyeditForm.reset();
      }      
    });

    this.taxonomyeditForm = new FormGroup({
      type: new FormControl(type),
      code:new FormControl(code),
      description: new FormControl(desc),
      activate: new FormControl(isactive)
     });
  }

  onSubmit(){
    console.log(this.taxonomyeditForm);
    
  }

}
