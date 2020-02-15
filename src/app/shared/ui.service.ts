import {ElementRef, Injectable, ViewChild} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable()
export class UIService {

  constructor(
    private snackbar: MatSnackBar,
  ) {
  }

  @ViewChild('fullpage') fullpage: ElementRef;

  showSnackbar(message, action, _duration) {
    this.snackbar.open(message, action, {
      duration: _duration
    })
  }
}
