import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPanelComponent } from './related-panel.component';

describe('RelatedPanelComponent', () => {
  let component: RelatedPanelComponent;
  let fixture: ComponentFixture<RelatedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
