<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "chinonsoali2005@gmail.com";
  $subject = "New message from $name";
  $body = "From: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message!";
  } else {
    echo "Sorry, there was an error sending your message.";
  }
}
?>
