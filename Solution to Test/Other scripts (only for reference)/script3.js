// TRYING TO MANIPULATE THE DOM BEFORE ENTERING THE TEST PAGE (NOT WORKING - CODE BELOW)

// const submitButton = document.querySelector("button[type='submit']");

// // Add a click event listener to the submit button
// submitButton.addEventListener('click', function () {
//   // Clicking the intial page submit button go to the page of the test
//   setTimeout(function () {
//     // Wait for the new page to load
//     window.addEventListener('load', function () {
//       var textArea2 = document.getElementById('box2');
//       // Create a new keyboard event to simulate pressing the Ctrl key
//       const ctrlDownEvent = new KeyboardEvent('keydown', {
//         key: 'Control',
//         code: 'ControlLeft',
//         ctrlKey: true,
//         bubbles: true,
//       });

//       // Create a new keyboard event to simulate releasing the Ctrl key
//       const ctrlUpEvent = new KeyboardEvent('keyup', {
//         key: 'Control',
//         code: 'ControlLeft',
//         ctrlKey: false,
//         bubbles: true,
//       });

//       // Dispatch the keyboard events on the textarea element
//       textArea2.dispatchEvent(ctrlDownEvent); // Simulate pressing Ctrl
//       // Perform any additional actions you need while the Ctrl key is pressed
//       textArea2.dispatchEvent(ctrlUpEvent); // Simulate releasing Ctrl

//       var textArea1 = document.getElementById('box1');
//       var text = textArea1.value;
//       var replacedText = text.replace(/\+/g, ' ');
//       textArea2.value = replacedText;

//       document.getElementById('submit_test').click();
//       consoletime = document.getElementById('timer').textContent;
//       console.log(consoletime);
//     });
//   }, 1000);
// });
