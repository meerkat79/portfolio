<?php  

	$name = isset($_POST['name']) ? $_POST['name'] : '';
	$email = isset($_POST['email']) ? $_POST['email'] : '';
	$number = isset($_POST['number']) ? $_POST['number'] : '';
	$subject = isset($_POST['subject']) ? $_POST['subject'] : 'IRUDI.ME form';
	$selection = isset($_POST['selection']) ? $_POST['selection'] : '';
	$msg = isset($_POST['msg']) ? $_POST['msg'] : '';

	$to = 'rvlglobe@gmail.com';
	$message = $name." with number ".$number." wrote the following message:"."\n".$msg." Contact preference is ".$selection;
	$headers = "From ".$email;

	if(mail($to, $subject, $message, $headers)){
		echo "success";
	}
	else {
		echo "failure";
	}
?>

