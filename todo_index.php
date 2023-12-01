<?php
require 'database_con.php';
?>
<html lang="en">
<link rel="stylesheet" href="style.css" />
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Edmond's To-Do List</title>
  <script src="jquery-3.6.0.js"></script>
</head>

<body>
  <div class="main">
    <!-- navigation section -->
    <div class="navi">
      <img id="back" src="./icon/arrow-left.svg" alt="back" width="20px" />
      <div>
        <img id="userAvatar" src="./icon/user.svg" alt="user" width="30px" />
        <label id="userName">account</label>
      </div>
      <hr />
      <div class="naviTab">
        <div id="allTodoTab">
          <img src="./icon/task.png" width="30px" alt="task" />All To-do
          <label>4</label>
        </div>
        <div id="importantTab">
          <img src="./icon/star.png" width="30px" alt="star" />Important
          <label>0</label>
        </div>
        <div id="CompletedTab">
          <img src="./icon/checked.png" width="30px" alt="checked" />Completed
          <label>0</label>
        </div>
        <div id="deletedTab">
          <img src="./icon/bin.png" width="30px" alt="bin" />Deleted
          <label>0</label>
        </div>
      </div>
    </div>
    <!-- list section -->
    <div class="list">
      <img id="menu" src="./icon/bars-white.svg" alt="menu" width="20px" />
      <h2>To-do List</h2>
      <?php
      $todos = $connect->query("SELECT*FROM todo_items ORDER BY id DESC");
      ?>
      <?php if ($todos->rowCount() === 0) { ?>
        <!-- # code if database is empty... -->
      <?php } ?>

      <?php while ($todo = $todos->fetch(PDO::FETCH_ASSOC)) { ?>

        <div class="listItem">
          <!-- <img src="./icon/circle.svg" alt="check" /> -->
          <?php if ($todo['completed'] == 0) {
            echo '<img src="./icon/circle.svg" alt="check" />';
          } else {
            echo '<img src="./icon/circle-check-blue.svg" alt="check" />';
          } ?>
          <?php echo '<div data-item-id="' . $todo['id'] . '" data-completed="' . $todo['completed'] . '" data-important="' . $todo['important'] . '" data-deleted="' . $todo['deleted'] . '" data-due-date="' . $todo['due_date'] . '" data-create-date="' . $todo['create_date'] . '" data-comment="' . $todo['comment'].'"';
          if($todo['completed'] == 1){
            echo ' style = " text-decoration: line-through; color: gray;"';
          }
          echo '>' . $todo['content'] . ' </div>'; ?>
          <?php if ($todo['important'] == 0) {
            echo '<img src="./icon/star.svg" alt="important" />';
          } else {
            echo '<img src="./icon/star-solid.svg" alt="important" />';
          } ?>
        </div>
      <?php } ?>

      <div id="addNew">
        <img src="./icon/plus.svg" alt="add" />
        <input id="newToDo" type="text" placeholder="add new to-do" />
        <img src="./icon/check.svg" alt="ok" />
      </div>
    </div>
    <!-- detail section -->
    <div class="detail">
      <img id="closeDetail" src="./icon/xmark.svg" width="20px" alt="close" />
      <div class="listItem">
        <img id="detailCheck" src="./icon/circle.svg" alt="check" />
        <textarea name="todoContent" id="todoContentInput" cols="10" rows="2" placeholder="details"></textarea>
        <img id="detailStar" src="./icon/star.svg" alt="star" />
      </div>
      <div id="controlOption" class="listItem">
        <img id="dueDateImg" src="./icon/calendar.svg" alt="due date" />
        <div>Due Date:</div>
        <input type="date" id="datepicker">
      </div>
      <textarea name="comment" id="commentInput" cols="30" rows="10" placeholder="add comment"></textarea>
      <!-- </div> -->
      <div class="detailFooter">
        <label id="createdDate">created on: </label>
        <img id="deleteATodo" src="./icon/trash.svg" alt="trash" />
      </div>
    </div>
  </div>
  <script type="module" src="todo.js"></script>
</body>

</html>