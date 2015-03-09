// Grab the input fields to pass into the syncInput function.
let inputA = document.getElementById('input'),
    inputB = document.getElementById('target');

// syncInput() returns an object with 'active' DOM nodes and their event
// listener's handeler function. We can use this return value to
// remove event listeners later on, read the input values, etc.
let inputs = syncInput(inputA, inputB);

// Grab the buttons and configure sync.
let endButton = document.getElementById('end');
let saveButton = document.getElementById('save');

endButton.addEventListener('keyup', ()=> {
  removeSync(inputs);
});
saveButton.addEventListener('click', ()=> {
  saveSync(inputs, 'savedInputs');
});
