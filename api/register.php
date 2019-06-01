<?php
	// 获取请求中传递的参数
	$firstname = $_POST["firstname"];
	$lastname = $_POST["lastname"];
	$email = $_POST["email"];
	$password = md5($_POST["password"]);

	mysql_connect("localhost:3306", "root", "");
	mysql_select_db("project");
	$sql = "INSERT INTO users (firstname, lastname, email, password) VALUES ('". $firstname ."', '". $lastname ."', '". $email ."', '". $password ."')";
	$result = mysql_query($sql);
	if ($result) {
		$arr = array("code"=>200);
		$data = array("status" => 1, "message" => "用户注册成功");
		$arr["data"] = $data;
		echo json_encode($arr);
	} else {
		$arr = array("code"=>200);
		$data = array("status" => 0, "message" => "用户注册失败：" . mysql_error() );
		$arr["data"] = $data;
		echo json_encode($arr);
	}
	mysql_close();
 ?>