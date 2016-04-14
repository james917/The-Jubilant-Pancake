<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	if (empty($_POST['firstname']))
		$errors['firstname'] = 'First Name is required.';

	if (empty($_POST['lastname']))
		$errors['lastname'] = 'Last Name is required.';

// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	}else{ 
		$fname = $_POST['firstname'];
		$lname  = $_POST['lastname'];
	
		// no closest distance found, yet
		$closest = -1;

	    // if there are no errors, return a message
		$data['success'] = true;
		$data['message'] = levenshtein($fame, $lname);

		// return all our data to an AJAX call
		echo json_encode($data);
	}


?>