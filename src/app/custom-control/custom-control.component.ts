import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomControlComponent,
    multi: true
  }]
})
export class CustomControlComponent implements ControlValueAccessor {

  stars = [1, 2, 3, 4, 5];
  currentRating: number;
  propagateChange = (rating: number) => {};
  propagateTouch = (rating: number) => {};

  setRating(rating) {
    this.currentRating = rating;
    this.propagateTouch(this.currentRating);
    this.propagateChange(this.currentRating);
  }

  writeValue(value) {
    this.currentRating = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }
}
