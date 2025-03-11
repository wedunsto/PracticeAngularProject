import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Wedunsto1DesignSystemComponent } from './wedunsto1-design-system.component';

describe('Wedunsto1DesignSystemComponent', () => {
  let component: Wedunsto1DesignSystemComponent;
  let fixture: ComponentFixture<Wedunsto1DesignSystemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Wedunsto1DesignSystemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Wedunsto1DesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
