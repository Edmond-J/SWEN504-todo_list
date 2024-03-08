<?php
$server = "edmond-mysql.mysql.database.azure.com";
$user = "edmond";
$password = "Azure-db";
$db = "edmond_todo_list";

$connect = new mysqli($server, $user, $password, $db);
