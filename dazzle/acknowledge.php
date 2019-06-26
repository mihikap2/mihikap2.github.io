
<?php

  $to = 'mpoddar@fulcrumgt.com';
  $subject = 'Feedback from Otto website';
  $message = 'First Name:' . $_POST['firstname'] . "\r\n\r\n";
  $message = 'Last Name:' . $_POST['lastname'] . "\r\n\r\n";
  $message = 'E-mail:' . $_POST['email'] . "\r\n\r\n";
  $message = 'Position:' . $_POST['position'] . "\r\n\r\n";
  $message = 'Firm:' . $_POST['firm'] . "\r\n\r\n";
  $message = 'Subject:' . $_POST['subject'];

mail($to, $subject, $message, $headers);
?>
<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Acknowledge</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">


</head>

<body>
  <?php if (isset($success) && $success) { ?>
  <h1> Thank You </h1>
  <p> Your message has been sent. </p>
  <?php } else { ?>
  <h1> Oops!</h1>
  <p> Sorry, there was a problem sending your message.</p>
  <?php } ?>
</body>
</html>