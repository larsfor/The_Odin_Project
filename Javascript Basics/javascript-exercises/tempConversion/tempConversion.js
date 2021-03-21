const ftoc = function(fahr) {
  // Converts the fahrenheit into celcius with one decimal
  let convTemp = ((fahr - 32) * 5/9).toFixed(1);

  /* Since the function "toFixed" returns a string, you
  need to convert the string back to a float. */
  intConvTemp =  parseFloat(convTemp)

  // Return the converted value
  return intConvTemp;
}

const ctof = function(celc) {
  // Converts the celcius into fahrenheit with one decimal
  let convTemp = (celc * 9/5 + 32).toFixed(1);

  /* Since the function "toFixed" returns a string, you
  need to convert the string back to a float. */
  intConvTemp =  parseFloat(convTemp)

  // Return the converted value
  return intConvTemp;
}

module.exports = {
  ftoc,
  ctof
}
