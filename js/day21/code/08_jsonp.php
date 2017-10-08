<?php
	
	//echo "hello world";
	class Res{
		public $status;
		public $msg;
	}
	$res = new Res();
	$res->status = 1;
	$res->msg = "hello";
	
	
	
	$fn = $_GET["cb1"]; //fn1
	
	echo $fn."(". json_encode($res) .")"; //fn1()
	
?>

