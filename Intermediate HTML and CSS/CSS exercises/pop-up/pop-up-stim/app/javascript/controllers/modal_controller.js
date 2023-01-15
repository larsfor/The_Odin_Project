import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ 'backdrop', 'popup_modal']

  connect() {
    console.log('hello world')
  }

  toggleModal() {
    this.backdropTarget.classList.toggle('show');
    this.popup_modalTarget.classList.toggle('show');
  }
}
