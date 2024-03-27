<?php
    if (isset($_POST['text'])) {
        $text = $_POST['text'];
        // Replace '+' with spaces
        $processedText = str_replace('+', ' ', $text);

        // Send processed text back
        echo $processedText;
    } else {
        echo "Error: Text not received";
    }
