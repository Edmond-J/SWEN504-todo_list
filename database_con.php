<?php
// $server = "edmond-mysql.mysql.database.azure.com";
// $user = "edmond";
// $password = "Azure-db";
// $db = "edmond_todo_list";

$server = getenv('DB_SERVER') ?: 'localhost';  // 本地为 localhost
$user = getenv('DB_USER') ?: 'root';           // 本地为 root
$password = getenv('DB_PASSWORD') ?: '';       // 本地为空
$db = getenv('DB_NAME') ?: 'edmond_todo_list';     // 默认数据库名称
// $path = getenv('LOCAL_PATH');

// 如果 DB_PATH 为空字符串（在容器中），则不添加 /todolist
// 因为xampp中todolist源码是放在文件夹里的，而在容器中，是放在根目录的
// $path = ($path === "") ? "" : "/todolist";

$connect = new mysqli($server, $user, $password, $db);