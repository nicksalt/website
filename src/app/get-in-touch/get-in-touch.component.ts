import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {
  constructor(private http: HttpClient, private toastr: ToastrService) {}
  nameFormControl = new FormControl();
  emailFormControl = new FormControl();
  messageBodyFormControl = new FormControl();

  private static validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(re.test(String(email).toLowerCase()));
  }

  public onSubmit() {
    const name = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const message = this.messageBodyFormControl.value;
    if (this.nameFormControl.value == null ) {
      this.showErrorToast('Please enter your name.');
      return;
    }
    if (this.messageBodyFormControl.value.toString() == null) {
      this.showErrorToast('Please enter a message.');
      return;
    }
    if (GetInTouchComponent.validateEmail(this.emailFormControl.value)) {
      this.showErrorToast('Please enter a valid email address.');
      return;
    }
    const destinationEmail = 'nicksalt24@gmail.com';
    const form = document.createElement('form');
    form.setAttribute('action', 'https://formspree.io/' + destinationEmail);
    form.setAttribute('method', 'POST');

    // Subject for your email
    let field = document.createElement('input');
    field.setAttribute('type', 'hidden');
    field.setAttribute('name', '_subject');
    field.setAttribute('value', 'nicksalt.me Contact Form');
    form.appendChild(field);

    // Contact email address
    field = document.createElement('input');
    field.setAttribute('type', 'hidden');
    field.setAttribute('name', 'email');
    field.setAttribute('value', email);
    form.appendChild(field);

    // Your user's name
    field = document.createElement('input');
    field.setAttribute('type', 'hidden');
    field.setAttribute('name', 'name');
    field.setAttribute('value', name);
    form.appendChild(field);

    // The text message
    field = document.createElement('input');
    field.setAttribute('type', 'hidden');
    field.setAttribute('name', 'message');
    field.setAttribute('value', message);
    form.appendChild(field);

    document.body.appendChild(form);
    form.submit();
  }

  private showErrorToast(message: string) {
    this.toastr.error(message, 'Message Error', {
      positionClass: 'toast-bottom-center',
      closeButton: true,
      progressBar: true
    });
  }
}
