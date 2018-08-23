import { TestBed, inject } from '@angular/core/testing';

import { CustomProductDataAjaxService } from './custom-product-data-ajax.service';

describe('CustomProductDataAjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomProductDataAjaxService]
    });
  });

  it('should be created', inject([CustomProductDataAjaxService], (service: CustomProductDataAjaxService) => {
    expect(service).toBeTruthy();
  }));
});
