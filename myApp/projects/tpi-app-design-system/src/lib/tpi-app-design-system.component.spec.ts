import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TpiAppDesignSystemComponent } from './tpi-app-design-system.component';

describe('TpiAppDesignSystemComponent', () => {
  let component: TpiAppDesignSystemComponent;
  let fixture: ComponentFixture<TpiAppDesignSystemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TpiAppDesignSystemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TpiAppDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
