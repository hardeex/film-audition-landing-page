<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone-number"];

    // Prepare email content
    $to = "adewale@afriwoodstreams.com"; // Your email address
    $subject = "New Registration";
    $message = "Name: $name\nEmail: $email\nPhone Number: $phone";

    // Send email
    $headers = "From: $email"; // Set the sender's email address
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "Thank you for registering, $name! Your registration details have been sent to adewale@afriwoodstreams.com.";
    } else {
        // Error sending email
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
