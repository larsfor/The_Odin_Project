import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "hide", "dropdown", "highlight", "max240" ];
    static classes = [ "change" ];

    connect() {
        this.dropdownTarget.classList.value = 'hidden'
    }

    toggle() {
        this.hideTarget.classList.value
        this.hideTarget.classList.toggle(this.changeClass)
    }

    dropdown() {
        this.dropdownTarget.classList.toggle(this.changeClass)
    }

    hideshow() {
        if (this.hideTarget.classList.value == 'hidden') {
            this.dropdownTarget.classList.value = 'hidden'
            this.hideTarget.classList.value = ''
        } else {
            this.dropdownTarget.classList.value = ''
            this.hideTarget.classList.value = 'hidden'
        }
    }

    highlight() {
        if (this.highlightTarget.classList.value == "highlight") {
            this.highlightTarget.classList.value = ''
        } else {
            this.highlightTarget.classList.value = 'highlight'
        }
    }
  }