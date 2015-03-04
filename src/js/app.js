/**
 * Synchronizes the value of any two input fields.
 *
 * @param  inputA   An input DOM node to be synced with inputB.
 * @param  inputB   An input DOM node to be synced with inputA.
 * @return An object with properties that represent each input and their coresponding event handler.
 */
const syncInput = (inputA, inputB) => {
  let aToB = () => {
    inputB.value = inputA.value;
  }

  let bToA = () => {
    inputA.value = inputB.value;
  }

  inputA.addEventListener('keyup', aToB);
  inputB.addEventListener('keyup', bToA);

  return {
    a: { node: inputA, fn: aToB },
    b: { node: inputB, fn: aToB }
  }
}

/**
 * Removes event listeners generated by the syncInput function.
 *
 * @param inputs   An object with each input DOM node & coresponding event handlers.
 */
const removeSync = (inputs) => {
  inputs.a.node.removeEventListener('keyup', inputs.a.fn);
  inputs.b.node.removeEventListener('keyup', inputs.b.fn);
}

// Grab the input fields to pass into the syncInput function.
let inputA = document.getElementById('input'),
    inputB = document.getElementById('target');

// SyncInput() returns an object with 'active' DOM nodes and their event
// listener's handeler function. We can use this return value to
// remove event listeners later on.
let inputs = syncInput(inputA, inputB);

// Grab the button.
var endButton = document.getElementById('end');

// Attach an event listener to the endButton so we can use
// removeSync when a user clicks it.
endButton.addEventListener('keyup', function() {
  removeSync(inputs);
});
