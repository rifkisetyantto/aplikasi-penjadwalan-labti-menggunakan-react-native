<?php
    
    include 'koneksi.php';
    $con = mysqli_connect($server, $user, $password, $database);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true); //supaya bisa masuk kesini
    
    
    $username = $obj['username'];
    $password = $obj['password'];
    $sql_query = "select * from akun where username = '$username' and password = '$password' ";

    $check = mysqli_fetch_array(mysqli_query($con,$sql_query));
    if(isset($check)){
        $SuccessLoginMsg = 'Data Cocok';
        $SuccessLoginJson = json_encode($SuccessLoginMsg);
        echo $SuccessLoginJson;
    }

    else {
        $InvalidMSG = 'Invalid Username or Password Pleasy Try Again!';
        $InvalidMSGJSon = json_encode($InvalidMSG);
        echo $InvalidMSGJSon;
    }
    mysqli_close($con);
?> 