<?php
require 'database_con.php';
global $connect;
?>
<html lang="en">
<link rel="stylesheet" href="style.css"/>

<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Edmond's To-Do List</title>
  <!-- <script src="jquery-3.6.0.js"></script> -->
</head>

<body>
<div class="main">
  <!-- navigation section -->
  <div class="navi">
    <img id="back" src="./icon/arrow-left.svg" alt="back" width="20px"/>
    <div>
      <img id="userAvatar" src="./icon/rabbit.png" alt="user" width="48"/>
      <label id="userName">Account Name</label>
    </div>
    <hr/>
    <div class="naviTab">
      <div onclick="switchToAll()">
        <img src="./icon/task.png" width="30px" alt="task"/>All To-do
          <?php
          $result = $connect->query("SELECT COUNT(*) AS all_count FROM todo_items WHERE deleted != 1");
          if ($result) {
              $row = $result->fetch_assoc();
              $count = $row['all_count'];
          }
          echo '<label id="allTodoCount">' . $count . '</label>';
          ?>
      </div>
      <div onclick="switchToImportant()">
        <img src="./icon/star.png" width="30px" alt="star"/>Important
          <?php
          $result = $connect->query("SELECT COUNT(*) AS important_count FROM todo_items WHERE important = 1");
          if ($result) {
              $row = $result->fetch_assoc();
              $count = $row['important_count'];
          }
          echo '<label id="importantCount">' . $count . '</label>';
          ?>
      </div>
      <div onclick="switchToCompleted()">
        <img src="./icon/checked.png" width="30px" alt="checked"/>Completed
          <?php
          $result = $connect->query("SELECT COUNT(*) AS completed_count FROM todo_items WHERE completed = 1");
          if ($result) {
              $row = $result->fetch_assoc();
              $count = $row['completed_count'];
          }
          echo '<label id="completedCount">' . $count . '</label>';
          ?>
      </div>
      <div onclick="switchToDeleted()">
        <img src="./icon/bin.png" width="30px" alt="bin"/>Deleted
          <?php
          $result = $connect->query("SELECT COUNT(*) AS deleted_count FROM todo_items WHERE deleted = 1");
          if ($result) {
              $row = $result->fetch_assoc();
              $count = $row['deleted_count'];
          }
          echo '<label id="deletedCount">' . $count . '</label>';
          ?>
      </div>
    </div>
  </div>
  <!-- list section -->
  <div class="list">
    <img id="menu" src="./icon/bars-white.svg" alt="menu" width="20px"/>
    <h2 id="tabTitle">All To-do</h2>
      <?php
      $todos = $connect->query("SELECT*FROM todo_items ORDER BY id DESC");
      ?>
      <?php if ($todos->num_rows === 0) { ?>
        <!-- # code if database is empty... -->
      <?php }
      while ($todo = $todos->fetch_assoc()) {
          if ($todo['deleted'] == 1) {
              echo '<div class="listItem" style="display:none;">';
          } else {
              echo '<div class="listItem">';
          }
          if ($todo['completed'] == 0) {
              echo '<img class="iconButton" src="./icon/circle.svg" alt="check" />';
          } else {
              echo '<img class="iconButton" src="./icon/circle-check-blue.svg" alt="check" />';
          }
          echo '<div data-item-id="' . $todo['id'] . '" data-completed="' . $todo['completed'] . '" data-important="' . $todo['important'] . '" data-deleted="' . $todo['deleted'] . '" data-due-date="' . $todo['due_date'] . '" data-create-date="' . $todo['create_date'] . '" data-comment="' . $todo['comment'] . '"';
          if ($todo['completed'] == 1) {
              echo ' style = " text-decoration: line-through; color: gray;"';
          }
          echo '>' . $todo['content'] . ' </div>';
          if ($todo['important'] == 0) {
              echo '<img class="iconButton" src="./icon/star.svg" alt="important" />';
          } else {
              echo '<img class="iconButton" src="./icon/star-solid.svg" alt="important" />';
          }
          echo '</div>';

      } ?>
    <form id="addNew" action="database_operate.php" method="post">
      <img class="iconButton rotate" src="./icon/plus.svg" width="16px" alt="add"/>
      <input id="newToDo" name="add" value="" type="text" placeholder="add new to-do"/>
      <input type="submit" id="hiddenSubmitTitle" style="display: none;">
      <img class="iconButton hidden" src="./icon/check.svg" width="16px" alt="ok"/>
    </form>
  </div>
  <!-- detail section -->
  <div class="detail">
    <img id="closeDetail" src="./icon/xmark.svg" width="16px" title="close" alt="close"/>
    <div class="listItem">
      <img id="detailCheck" src="./icon/circle.svg" alt="check"/>
      <textarea name="todoContent" id="todoContentInput" cols="10" rows="2" placeholder="details"></textarea>
      <img id="detailStar" src="./icon/star.svg" alt="star"/>
    </div>
    <div id="controlOption" class="listItem">
      <img class="iconButton" id="clearDueDateButton" src="./icon/calendar.svg" title="reset due date" alt="due date"/>
      <div>Due Date:</div>
      <input type="date" id="datepicker">
    </div>
    <textarea name="comment" id="commentInput" cols="30" rows="10" placeholder="add comment"></textarea>
    <div id="updateButton">Update</div>

    <div class="detailFooter" action="database_operate.php" method="post">
      <!--      <input type="hidden" id="deleteItem" name="delete" value="id" style="display: none;">-->
      <!--      <input type="submit" id="hiddenSubmitDelete" style="display: none;">-->
      <img class="iconButton" id="deleteUndo" src="./icon/undo.png" width="16px" title="undo" alt="trash"/>
      <label id="createdDate">created on: </label>
      <img class="iconButton" id="deleteATodo" src="./icon/trash.svg" title="delete" alt="trash"/>
    </div>
  </div>
  <!--  </div>-->
</div>
<script type="text/javascript" src="todo.js"></script>
</body>

</html>