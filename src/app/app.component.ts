import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  emailControl = new FormControl(
    '',
    [
      Validators.email,
      Validators.required
    ]);
  nameControl = new FormControl(
    '',
    [
      Validators.required
    ]);
  textControl = new FormControl(
    '',
    [
      Validators.maxLength(150),
      Validators.required
    ]);
  checkControl = new FormControl();

  phoneArrayControl = new FormArray([
    new FormControl('',
      [
        this.hasPlusCheck,
        Validators.pattern(/^((8|\+38)-?)?(\(?044\)?)?-?\d{3}-?\d{2}-?\d{2}$/g)

      ])
  ]);

  ratingControl = new FormControl('', [Validators.required]);

  feedbackForm: FormGroup = this.builder.group({
    email: this.emailControl,
    name: this.nameControl,
    phone: this.phoneArrayControl,
    check: this.checkControl,
    text: this.textControl,
    rating: this.ratingControl
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit() {}

  submitFeedback() {
    console.log(this.feedbackForm.value);
  }

  removePhone(index: number) {
    this.phoneArrayControl.removeAt(index);
  }

  addPhone() {
    this.phoneArrayControl.push(
      new FormControl('',
        [
          this.hasPlusCheck,
          Validators.pattern(/^((8|\+38)-?)?(\(?044\)?)?-?\d{3}-?\d{2}-?\d{2}$/g)
        ]
      ));
  }

  hasPlusCheck(input: FormControl) {
    const hasPlus = input.value.indexOf('+') === 0;
    return hasPlus ? null : { needsPlus: true };
  }
}
