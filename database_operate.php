<?php
require 'database_con.php';
global $connect;
if (isset($_POST['content']) && $_POST['content'] === 'add') {
    $contentToAdd = $_POST['content'];
    $stmt = $connect->prepare("INSERT INTO todo_items(content,create_date) VALUE(?,CURDATE())");
    if ($stmt->execute([$contentToAdd])) {
        header("Location:../todo_index.php?mess=success");

    } else {
        header("Location:../todo_index.php");
    }
    $connect = null;
    exit();
}

if (isset($_POST['delete'])) {
    // echo $_POST['delete'];
    $idToDelete = $_POST['delete'];
    $stmt = $connect->prepare("DELETE FROM todo_items WHERE id = ?");
    if ($stmt->execute([$idToDelete])) {
        header("Location:../todo_index.php?mess=success");

    } else {
        header("Location:../todo_index.php");
    }
    $connect = null;
    exit();

}