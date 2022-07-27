import { Controller } from "@hotwired/stimulus" 
export default class extends  Controller {
    static targets = [ "variantfield" ];

    addVariant(event) {
        event.preventDefault();

        // From https://guides.rubyonrails.org/form_helpers.html#adding-fields-on-the-fly
        // When generating new sets of fields you must ensure the key of the associated array 
        // is unique - the current JavaScript date (milliseconds since the epoch) is a common choice.
        let key =  new Date().getTime();

        // Create td element for each variant to be added
        let td = document.createElement('td');
        let tr = document.createElement('tr');

        // Create label for the name of the variant
        let labelVariantNameElement = document.createElement("label")
        let labelVariantNameText = document.createTextNode("Variant:")
        labelVariantNameElement.setAttribute('style', "margin-right: 10px")
        labelVariantNameElement.appendChild(labelVariantNameText)

        // Create input for the name of the variant
        let inputVariantName = document.createElement("input")
        inputVariantName.setAttribute("type", "text")
        inputVariantName.setAttribute('style', "margin-right: 10px")

        // Create label for the value of the variant
        let labelVariantValueElement = document.createElement("label")
        let labelVariantValueText = document.createTextNode("Value:")
        labelVariantValueElement.setAttribute('style', "margin-right: 10px")
        labelVariantValueElement.appendChild(labelVariantValueText)

        // Create input for the value of the variant
        let inputVariantValue = document.createElement("input")
        inputVariantValue.setAttribute("type", "text")
        inputVariantValue.setAttribute('style', "margin-right: 10px")

        // Set the attributes for the name of the variant and the value of the variant
        let idAttributeName = "car_variants_attributes_0_name".replace("0", key);
        let nameAttributeName = "car[variants_attributes][0][name]".replace("0", key);
        labelVariantNameElement.setAttribute("for", idAttributeName)
        inputVariantName.setAttribute("id", idAttributeName)
        inputVariantName.setAttribute("name", nameAttributeName)

        let idAttributeValue = "car_variants_attributes_0_value".replace("0", key);
        let nameAttributeValue = "car[variants_attributes][0][name]".replace("0", key);
        labelVariantValueElement.setAttribute("for", idAttributeValue)
        inputVariantValue.setAttribute("id", idAttributeValue)
        inputVariantValue.setAttribute("name", nameAttributeValue)

        // Add the labels and input fields to the td
        td.appendChild(labelVariantNameElement)
        td.appendChild(inputVariantName)
        td.appendChild(labelVariantValueElement)
        td.appendChild(inputVariantValue)
        tr.appendChild(td)


        this.variantfieldTarget.appendChild(tr);
    }
}