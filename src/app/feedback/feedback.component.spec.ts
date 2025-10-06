import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback.component';
import { provideRouter, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: Router;
  let routerSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'feedback', component: FeedbackComponent }])
      ],
      imports: [FeedbackComponent, BrowserAnimationsModule],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]*/
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;

    //Testi 2
    router = TestBed.inject(Router);
    routerSpy = spyOn(router, 'navigate');

    //Testi 3
    //Ensin luodaan testilomake
    component.fbForm = new FormBuilder().group({
      title: ['testi', { validators: [], updateOn: 'change' }],
      description: ['kuvaus'],
      name: ['nimi'],
      email: ['testi@example.com'],
      phone: ['123456'],
      termsAndConditions: [false]
    });
    //Sitten asetetaan testimielessä virheet lomakkeelle
    component.fbForm.controls['title'].setErrors({ required: true });
    component.fbForm.controls['email'].setErrors({ email: true });

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testi 2
  it('should navigate to Homepage', () => {
    component.cancel();

    expect(routerSpy).toHaveBeenCalledWith(['home']);
  });

  //Testi 3
  it('should reset the form and clear all errors on submit', () => {
    component.onSubmit();

    expect(component.fbForm.pristine).toBeTrue();
    expect(component.fbForm.value).toEqual({
      title: null,
      description: null,
      name: null,
      email: null,
      phone: null,
      termsAndConditions: null
    });

    Object.keys(component.fbForm.controls).forEach(controlName => {
      expect(component.fbForm.controls[controlName].errors).toBeNull();
    });

  });

});
