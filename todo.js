let listItems = document.querySelectorAll(".list .listItem");
let mainFrame = document.querySelector(".main");
let naviArea = document.querySelector(".navi");
let detailArea = document.querySelector(".detail");
let menuButton = document.getElementById("menu");
let backButton = document.getElementById("back");
let closeDetailButton = document.getElementById("closeDetail");
let deleteButton = document.getElementById("deleteATodo");
let newToDoInput = document.getElementById("newToDo");
// let detailCheck = document.getElementById("detailCheck");
let $detailCheck = $("#detailCheck");
let detailStar = document.getElementById("detailStar");
let todoContentInput = document.getElementById("todoContentInput");
let dueDateButton = document.getElementById("dueDateImg");
let currentDetailID;

listItems.forEach((div) => {
  //click a to-do item will show the details
  let content = div.querySelector("div");
  div.addEventListener("click", () => {
    listItems.forEach((otherDiv) => {
      otherDiv.style = "background-color: white;";
    });
    div.style = "background-color: antiquewhite;";
    // let computedStyle = window.getComputedStyle(detailArea);
    if (currentDetailID != content.dataset.itemId) {
      showDetail(content.dataset.itemId);
      detailArea.style.display = "flex";
      currentDetailID = content.dataset.itemId;
    }
  });

  // check button action
  let imgCheck = div.querySelector("img");
  checkButtonHover(imgCheck);
  imgCheck.addEventListener("click", function () {
    if (!imgCheck.src.endsWith("circle-check-blue.svg")) {
      imgCheck.src = "./icon/circle-check-blue.svg";
      content.style = " text-decoration: line-through; color: gray;";
      content.dataset.completed = 1;
      if (content.dataset.itemId == currentDetailID) {
        $detailCheck.src = "./icon/circle-check-blue.svg";
        todoContentInput.style = " text-decoration: line-through; color: gray;";
      }
    } else {
      imgCheck.src = "./icon/circle.svg";
      content.style = " text-decoration: ; color: darkslategrey;";
      content.dataset.completed = 0;
      if (content.dataset.itemId == currentDetailID) {
        $detailCheck.src = "./icon/circle.svg";
        todoContentInput.style = " text-decoration: ; color: darkslategrey;";
      }
    }
  });

  /* star button action */
  let imgStar = div.querySelectorAll("img")[1];
  imgStar.addEventListener("click", () => {
    // console.log(imgStar.src);
    if (imgStar.src.endsWith("star.svg")) {
      imgStar.src = "./icon/star-solid.svg";
      content.dataset.important = 1;
      if (content.dataset.itemId == currentDetailID)
        detailStar.src = "./icon/star-solid.svg";
    } else {
      imgStar.src = "./icon/star.svg";
      content.dataset.important = 0;
      if (content.dataset.itemId == currentDetailID)
        detailStar.src = "./icon/star.svg";
    }
  });
});
/* 清单条目管理 */

closeDetailButton.addEventListener("click", () => {
  detailArea.style.display = "none";
});

newToDoInput.addEventListener("input", () => {
  const inputValue = event.target.value;
  let imgs = document.querySelectorAll("#addNew img");
  if (inputValue.trim().length > 0) {
    // document.getElementById("addNew").firstChild;
    imgs[0].style.transform = "rotate(45deg)";
    imgs[1].style.display = "block";
    imgs[0].addEventListener("click", () => {
      newToDoInput.value = "";
      imgs[0].style.transform = "rotate(0)";
      imgs[1].style.display = "none";
    });
  } else {
    imgs[0].style.transform = "rotate(0)";
    imgs[1].style.display = "none";
  }
  imgs[1].addEventListener("click", () => {
    //这里添加增加一个新list的操作
  });
});

menuButton.addEventListener("click", () => {
  mainFrame.style = "grid-template-columns: auto 1fr auto;";
  detailArea.style.display = "none";
  backButton.style.display = "block";
  menuButton.style.display = "none";
  // naviArea.style = "position: absolute; z-index: 999;";
});

backButton.addEventListener("click", () => {
  mainFrame.style = "grid-template-columns: 0 1fr auto;";
  backButton.style.display = "none";
  menuButton.style.display = "block";
  // naviArea.style = "position: static; z-index: 0;";
});

function checkButtonHover(checkButton) {
  checkButton.addEventListener("mouseover", function () {
    if (this.src.endsWith("circle.svg")) {
      checkButton.src = "./icon/circle-check.svg";
    }
  });
  checkButton.addEventListener("mouseout", function () {
    if (this.src.endsWith("circle-check.svg")) {
      checkButton.src = "./icon/circle.svg";
    }
  });
}

function checkButtonClick(checkButton, textHolder) {}

function showDetail(todoID) {
  let dueDateDisplay = document.getElementById("datepicker");
  // let createdDate = document.getElementById("createdDate");
  let createdDate = document.getElementById("createdDate");
  listItems.forEach((div) => {
    let content = div.querySelector("div");
    if (content.dataset.itemId == todoID) {
      todoContentInput.value = content.textContent;
      dueDateDisplay.value = content.dataset.dueDate;
      createdDate.textContent = "created on: " + content.dataset.createDate;
      if (content.dataset.important == 0) detailStar.src = "./icon/star.svg";
      else detailStar.src = "./icon/star-solid.svg";
      if (content.dataset.completed == 0) {
        $detailCheck.attr("src", "./icon/circle.svg");
        todoContentInput.style = " text-decoration: ; color: darkslategrey;";
      } else {
        $detailCheck.attr("src", "./icon/circle-check-blue.svg");
        todoContentInput.style = " text-decoration: line-through; color: gray;";
      }
      // checkButtonHover($detailCheck);
      $detailCheck.off();
      $detailCheck.on("click", function () {
        if (!$detailCheck.attr("src").endsWith("circle-check-blue.svg")) {
          content.parentNode.querySelector("img").src =
            "./icon/circle-check-blue.svg";
          content.style = " text-decoration: line-through; color: gray;";
          content.dataset.completed = 1;
          // $detailCheck.src = "./icon/circle-check-blue.svg";
          $detailCheck.attr("src", "./icon/circle-check-blue.svg");
          todoContentInput.style =
            " text-decoration: line-through; color: gray;";
        } else {
          content.parentNode.querySelector("img").src = "./icon/circle.svg";
          content.style = " text-decoration: ; color: darkslategrey;";
          content.dataset.completed = 0;
          // $detailCheck.src = "./icon/circle.svg";
          $detailCheck.attr("src", "./icon/circle.svg");
          todoContentInput.style = " text-decoration: ; color: darkslategrey;";
        }
      });
      // console.log(content.dataset.createDate)
      return;
    }
  });
}
