// JAVASCRIPT CODE (WITHOUT THE BUG FIX), CAN NOT WORK BECAUSE THE SUBMIT BUTTON IS NOT AVAILABLE UNTIL A KEY IS PRESSED IN ONE OF THE BOXES.
// Copies Text from box1 to box2 and replaces all '+' with ' '
const textArea1 = document.getElementById('box1');
const textArea2 = document.getElementById('box2');
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
