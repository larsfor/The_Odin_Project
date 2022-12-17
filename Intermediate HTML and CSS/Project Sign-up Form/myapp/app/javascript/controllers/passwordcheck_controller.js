import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "firstPassword", "secondPassword", "notMatchingPassword"  ];

  // connect() {
  //   this.element.textContent = "Hello World!"
  // }

  checkPassword() {
    if (this.firstPasswordTarget.value !== this.secondPasswordTarget.value) {
      this.notMatchingPasswordTarget.textContent = "Passwords do not match"
      this.notMatchingPasswordTarget.classList = "invalid-feedback"
      this.firstPasswordTarget.classList = "form-control is-invalid"
      this.secondPasswordTarget.classList = "form-control is-invalid"
    } else {
      this.notMatchingPasswordTarget.textContent = ""
      this.notMatchingPasswordTarget.classList = "valid-feedback"
      this.firstPasswordTarget.classList = "form-control is-valid"
      this.secondPasswordTarget.classList = "form-control is-valid"
    };
  }
}