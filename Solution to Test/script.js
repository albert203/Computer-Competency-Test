// THIS CODE BYPASSES THE BUG IF YOU HAVE ALREADY ENTERED THE TEST ONCE

// BUG: AFTER FIRST SUBMISSION, IF YOU RE-ENTER THE TEST USING EMAIL AND CLICKING THE BUTTON
// IT LOADS THE PAGE WHERE THE TEST IS BUT DOES NOT BRING UP THE SUBMIT BUTTON UNTIL A KEY IS PRESSED WITHIN ONE OF THE BOXES
// THIS CODE WORKS AROUND THAT BY SIMULATING A KEY PRESS IN THE BOX BEFORE EXECUTING THE REST OF THE CODE

// COPY AND PASTE THE JAVASCRIPT INTO THE CHROME DEVELOPER CONSOLE TAB AND PRESS ENTER TO RUN THE CODE
// IF YOU  GET A WARNING ABOUT PASTING CODE INTO THE CONSOLE, YOU NEED TO TYPE "allow pasting" INTO THE CONSOLE AND PRESS ENTER

// THIS CODE WILL AUTOMATICALLY MAKE THE MODIFICATIONS AND SUBMIT THEM USING THE SUBMIT BUTTON

// Select the textarea element
const textArea2 = document.getElementById('box2');

// If Box2 exists
if (textArea2) {
  // Simulate pressing and releasing Ctrl key (with error handling) within box2, this will bypass the bug
  try {
    const ctrlDownEvent = new KeyboardEvent('keydown', {
      key: 'Control',
      code: 'ControlLeft',
      ctrlKey: true,
      bubbles: true,
    });
    const ctrlUpEvent = new KeyboardEvent('keyup', {
      key: 'Control',
      code: 'ControlLeft',
      ctrlKey: false,
      bubbles: true,
    });
    textArea2.dispatchEvent(ctrlDownEvent);
    textArea2.dispatchEvent(ctrlUpEvent);
  } catch (error) {
    console.error('Error simulating Ctrl key press and release:', error);
  }

  // Access and modify text areas
  const textArea1 = document.getElementById('box1');
  const text = textArea1.value;
  const replacedText = text.replace(/\+/g, ' ');
  textArea2.value = replacedText;

  // Click the submit_test button (with error handling)
  const submitTestButton = document.getElementById('submit_test');
  if (submitTestButton) {
    submitTestButton.click();
  } else {
    console.error("Element with ID 'submit_test' not found!");
  }

  // Access and log timer content (with error handling)
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    console.log(timerElement.textContent);
  } else {
    console.error("Element with ID 'timer' not found!");
  }
} else {
  console.error("Element with ID 'box2' not found!");
}
