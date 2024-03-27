// TRUE SOLUTION TO THE TEST
const textArea2 = document.getElementById('box2');

// Access and modify text areas
const textArea1 = document.getElementById('box1');
const text = textArea1.value;
const replacedText = text.replace(/\+/g, ' ');
textArea2.value = replacedText;

//2 lines added
document.getElementById("timer").innerHTML="0"; //add this to bring your score to 0
check_match(); //add this to compare and submit, this function is already present
