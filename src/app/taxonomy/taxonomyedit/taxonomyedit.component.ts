import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaxonomyService } from '../taxonomy.service'
import { ITaxonomyItem } from '../taxonomy.model'
@Component({
  selector: 'app-taxonomyedit',
  templateUrl: './taxonomyedit.component.html',
  styleUrls: ['./taxonomyedit.component.css']
})
export class TaxonomyeditComponent implements OnInit {
  isEdit: boolean = false;
  id: number;
  taxonomyeditForm: FormGroup;
  hasError:boolean= false;
  constructor(private router: Router, private route: ActivatedRoute, private taxonomyService: TaxonomyService) { console.log('inside constructor ') }

  ngOnInit() {


    let type = ''
    let code = null
    let desc = ''
    let isactive = true;
    this.id = 0

    this.route.params.subscribe((param: Params) => {
      let tid = +param['id']

      if (tid) {
        this.isEdit = true;
        // this.taxonomyService.get(tid).subscribe(
        //   (data) => {
        //     let item = data;
        //     this.id = item.Id;
        //     this.setFormElements(item.Type, item.Code, item.Description, item.IsActive)
        //   },
        //   (err) =>{ this.setFormElements(type, code, desc, isactive);}
        // );
        var item= this.taxonomyService.getlocal(tid);
        console.log('item returned from service is' + item.Description);
        this.id = item.Id;
        this.setFormElements(item.Type, item.Code, item.Description, item.IsActive);
        console.log( this.taxonomyeditForm.value.description);
      }
      else {
        this.isEdit = false;
        this.id=0;
        this.setFormElements(type, code, desc, isactive)
      }
    });


  }

  private setFormElements(type: string, code: number, desc: string, isactive: boolean) {
    this.taxonomyeditForm = new FormGroup({
      type: new FormControl(type),
      code: new FormControl(code),
      description: new FormControl(desc),
      activate: new FormControl(isactive)
    });
  }

  onSubmit() {
    
    let id=this.id;
    let type=this.taxonomyeditForm.value['type'];
    let code=+this.taxonomyeditForm.value.code;
    let desc =this.taxonomyeditForm.value.description;
    let isactive=this.taxonomyeditForm.value.activate;
    this.hasError=false;
    // this.taxonomyService.save( { Id:  this.id, Type: type,
    //    Code:code, Description:desc,  IsActive: isactive}).subscribe(
    //      ()=>{ this.router.navigate(['../'])},
    //      (err) => { this.hasError =true;}
    //    );
    this.taxonomyService.savelocal({ Id:  this.id, Type: type,
      Code:code, Description:desc,  IsActive: isactive});

      this.router.navigate(['../'])

  }

}
