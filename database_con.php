<?php
$server="localhost";
$user="root";
$password="";
$db="edmond_todo_list";

$connect = new mysqli("localhost", "root", "", "edmond_todo_list");
// try {
//     $connect=new PDO("mysql:host=$server;dbname=$db",$user,$password);
//     $connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
// }catch(PDOException $e){
// echo "Connection failed:". $e->getMessage();
// }


