<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- MOST OF THE HTML PART OF THE TEST -->
    <p>The goal is to copy the text from the first box into the second box, after replacing the + symbols with a space.</p>

    <!-- TEXTAREA 1 -->
    <textarea id="box1"  style="width: 300px; height: 400px;">This+is+a+simple+speed+test+to+see+how+competent+you+are+with+a+computer.+(27640)+One+possible+solution+is+to+use+a+mouse+to+right+click+this+text,+paste+it+into+word,+replace+the+plus+symbols+with+spaces,</textarea>

    <!-- TEXTAREA 2 -->
    <textarea placeholder="Second box" id="box2" style="width: 300px; height: 400px;" onkeyup="check_match()" oninput="check_match()"></textarea>

    <!-- DIV -->
    <div class="rounded_corders margin_padding bg_light_gray" style="width: 300px; min-height: 35px;">

        <!-- FORM & SUBMIT button -->
        <form method="post" action="index.php">
            <br><br><button type="submit" class="mk_button bg_blue" id="submit_test" name="submit" style="">Submit</button>
        </form>

    </div>

    <!-- INLINE SCRIPT THAT HANDLES THE AJAX REQUEST TO GET THE DATA WITHIN BOX1 AND SEND IT TO THE BACKEND PROCESS.PHP FILE TO BE MODIFIED (more explanation in the read.txt file)  -->
    <script>
    document.getElementById("submit_test").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission

        var text = document.getElementById("box1").value; // Get text from textarea 1

        // Send text to process.php 
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // Update textarea 2 with the response from process.php
        xhr.onreadystatechange = function() {
        // If the request completed and response is ready
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("box2").value = xhr.responseText; // Update textarea 2
        }
        };
        xhr.send("text=" + text); // Send text as data
    });
    </script>

</body>
</html>

