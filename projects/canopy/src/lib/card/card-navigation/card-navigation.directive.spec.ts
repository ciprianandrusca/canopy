import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { LgCardNavigationDirective } from './card-navigation.directive';

@Component({
  template: ' <div id="test" lgCardNavigation>This is a button</div> ',
})
class TestCardComponent {}

describe('CardNavigationDirective', () => {
  let fixtureCard: ComponentFixture<TestCardComponent>;
  let testCardElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCardComponent, LgCardNavigationDirective ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureCard = TestBed.createComponent(TestCardComponent);

    testCardElement = fixtureCard.debugElement.query(
      By.directive(LgCardNavigationDirective),
    );

    fixtureCard.detectChanges();
  });

  it('should have the default class', () => {
    expect(testCardElement.nativeElement.getAttribute('class')).toContain(
      'lg-card--navigation',
    );
  });
});
