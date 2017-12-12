import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomylistComponent } from './taxonomylist.component';

describe('TaxonomylistComponent', () => {
  let component: TaxonomylistComponent;
  let fixture: ComponentFixture<TaxonomylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
