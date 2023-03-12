const binaryInput = document.querySelector('#binary')
const decimalInput = document.querySelector('#decimal')
const button = document.querySelector('#button')

//Validations
binaryInput.addEventListener('input', () =>{

    // Check if the input value contains only 0s and 1s
    const isValid = /^[01]*$/.test(binaryInput.value);

    // Check if user enter up more than 8 numbers
    if(binaryInput.value.length > 8){
        binaryInput.value = binaryInput.value.substr(0,8);
    }

    //check if anything other than a 0 or 1 was entered
    if (!isValid) {
        alert('Please enter a binary number (0 or 1)');
        binaryInput.value = binaryInput.value.slice(0, -1);
      }

})


function coverterBinary2Decimal() {
    let binario = binaryInput.value
    let decimal = 0;
    let curretNumber = 1;
    let prevNumber = 0;

    for (let i = binario.length; i >= 0; i--) {

      if (binario[i] != 0) {
        decimal += curretNumber;
      }
      curretNumber *= 2;
      prevNumber = curretNumber;
    }

    decimalInput.value = decimal;
  }


button.addEventListener('click', (e) => {
    e.preventDefault()

    coverterBinary2Decimal()
})

