import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverOfferComponent } from './whatever-offer.component';

describe('WhateverOfferComponent', () => {
  let component: WhateverOfferComponent;
  let fixture: ComponentFixture<WhateverOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhateverOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
