<?php
require 'database_con.php';
global $connect;
$requestType = $_SERVER['HTTP_X_REQUEST_TYPE'];

if (isset($_POST['add'])) {
    $contentToAdd = $_POST['add'];
    $stmt = $connect->prepare("INSERT INTO todo_items(content,create_date) VALUE(?,CURDATE())");
    if ($stmt->execute([$contentToAdd])) {
        header("Location:../todo_index.php?mess=success");
    } else {
        header("Location:../todo_index.php");
    }
    $connect = null;
    exit();
}

//需要补全代码的地方
if ($requestType === 'delete') {
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
//    var_dump(json_decode($jsonData));
    $idToDelete = $data['id'];
    $stmt = $connect->prepare("DELETE FROM todo_items WHERE id = ?");
    $stmt->execute([$idToDelete]);
    $connect = null;
    exit();
}

if ($requestType === 'update') {
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
//    var_dump(json_decode($jsonData));
    $id = $data['id'];
    $content = $data['content'];
    $completed = $data['completed'];
    $important = $data['important'];
    $deleted = $data['deleted'];
    $due_date = $data['due_date'];
    $comment = $data['comment'];
    $stmt = $connect->prepare("UPDATE todo_items SET content= '$content',completed='$completed',important='$important',deleted='$deleted',due_date='$due_date',comment='$comment' WHERE id='$id'");
    $stmt->execute();
    $connect = null;
    exit();
//    completed,important,deleted,due_date,comment
}

if ($requestType === 'indicator') {
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
//    var_dump(json_decode($jsonData));
    $id = $data['id'];
    $completed = $data['completed'];
    $important = $data['important'];
    $stmt = $connect->prepare("UPDATE todo_items SET completed='$completed',important='$important' WHERE id='$id'");
    $stmt->execute();

    $connect = null;
    exit();
//    completed,important,deleted,due_date,comment
}