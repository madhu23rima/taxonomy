import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyeditComponent } from './taxonomyedit.component';

describe('TaxonomyeditComponent', () => {
  let component: TaxonomyeditComponent;
  let fixture: ComponentFixture<TaxonomyeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomyeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
