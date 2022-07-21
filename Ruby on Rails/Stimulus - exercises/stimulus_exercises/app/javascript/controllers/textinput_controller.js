import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "maxchars" ];

    checkLength() {
        console.log(this.maxcharsTarget.value.length)
        if (this.maxcharsTarget.value.length > 280 ) {
            alert("You can't have more than 280 characters")
        }
    }
  }