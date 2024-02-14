<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone-number"];

    // Prepare email content
    $to = "adewale@afriwoodstreams.com"; 
    $subject = "New Registration";
    $message = "Name: $name\nEmail: $email\nPhone Number: $phone";

    // Send email
    $headers = "From: $email"; // Set the sender's email address
    if (mail($to, $subject, $message, $headers)) {
         // Email sent successfully
         echo '<script>alert("Thank you for registering, ' . $name . '! We\'ll get in touch with you shortly.");</script>';
        } else {
            // Error sending email
            echo '<script>alert("Oops! Something went wrong. Please try again later.");</script>';
        }
}
?>
