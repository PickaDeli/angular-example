import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideRouter, Router } from '@angular/router';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let routerSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'home', component: HomeComponent }]),
      ],
      imports: [HomeComponent],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],*/
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    routerSpy = spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Test 1
  it('should navigate to Feedback', () => {
    component.showFeedbackPage();

    expect(routerSpy).toHaveBeenCalledWith(['feedback']);
  });

});
