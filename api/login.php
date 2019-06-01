<?php 
	// 获取请求中的参数数据
	$email = $_POST["email"];
	$password = md5($_POST["password"]);
	mysql_connect("localhost:3306", "root", "");
	mysql_select_db("project");
	$sql = "SELECT * FROM users WHERE email='". $email ."' AND password='". $password ."'";
	$result = mysql_query($sql);
	if (mysql_num_rows($result) === 1) {
		$arr = array("code"=>200);
		$data = array("status" => 1, "message" => "用户登录成功");
		$arr["data"] = $data;
		echo json_encode($arr);
	} else {
		$arr = array("code"=>200);
		$data = array("status" => 0, "message" => "用户名或密码错误");
		$arr["data"] = $data;
		echo json_encode($arr);
	}
	mysql_close();
 ?>