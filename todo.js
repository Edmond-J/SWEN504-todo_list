let listItems = document.querySelectorAll(".list .listItem");
let mainFrame = document.querySelector(".main");
let naviArea = document.querySelector(".navi");
let detailArea = document.querySelector(".detail");
let menuButton = document.getElementById("menu");
let backButton = document.getElementById("back");
let closeDetailButton = document.getElementById("closeDetail");
let newToDoInput = document.getElementById("newToDo");
let detailCheck = document.getElementById("detailCheck");
let detailStar = document.getElementById("detailStar");
let todoContentInput = document.getElementById("todoContentInput");
let allTodoCount = document.getElementById("allTodoCount");
// let importantTab = document.getElementById("importantTab");
let importantCount = document.getElementById("importantCount");
// let completedTab = document.getElementById("CompletedTab");
let completedCount = document.getElementById("completedCount");
let deletedCount = document.getElementById("deletedCount");
let clearDueDateButton = document.getElementById("clearDueDateButton");
let deleteUndo = document.getElementById("deleteUndo");
let deleteButton = document.getElementById("deleteATodo");
let tabTitle = document.getElementById("tabTitle");
let submitButton = document.getElementById("submit");
let currentDetailID;
let currentItem;
listItems.forEach((div) => {
  //click a to-do item will show the details
  let content = div.querySelector("div");
  div.addEventListener("click", () => {
    // listItems.forEach((otherDiv) => {
    // otherDiv.style = "background-color: white;";
    // });
    // div.style = "background-color: antiquewhite;";
    // if (currentDetailID !== content.dataset.itemId) {
    currentDetailID = content.dataset.itemId;
    currentItem = div;
    showDetail();
    detailArea.style.display = "flex";
    // }
  });
  /*   check button action */
  let imgCheck = div.querySelector("img");
  checkButtonHover(imgCheck);
  imgCheck.addEventListener("click", function () {
    switchCheckIcon(imgCheck, content);
  });
  /* star button action */
  let imgStar = div.querySelectorAll("img")[1];
  imgStar.addEventListener("click", () => {
    switchStarIcon(imgStar, content);
  });
});
/* 清单条目管理 */
submitButton.addEventListener("click", () => {
  let hiddenSubmitTitle = document.getElementById("hiddenSubmitTitle");
  // newTodo.submit();
  hiddenSubmitTitle.click();
});
closeDetailButton.addEventListener("click", () => {
  detailArea.style.display = "none";
  currentDetailID = 0;
});
newToDoInput.addEventListener("input", () => {
  const inputValue = event.target.value;
  let imgs = document.querySelectorAll("#addNew img");
  if (inputValue.trim().length > 0) {
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
  // detailArea.style.display = "none";
  backButton.style.display = "block";
  menuButton.style.display = "none";
});
backButton.addEventListener("click", () => {
  mainFrame.style = "grid-template-columns: 0 1fr auto;";
  backButton.style.display = "none";
  menuButton.style.display = "block";
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

detailCheck.addEventListener("click", () => {
  let content = currentItem.querySelector("div");
  switchCheckIcon(content.parentNode.querySelector("img"), content);
});

detailStar.addEventListener("click", () => {
  let content = currentItem.querySelector("div");
  switchStarIcon(
    content.parentNode.querySelector("img:nth-of-type(2)"),
    content
  );
});

clearDueDateButton.addEventListener("click", () => {
  let content = currentItem.querySelector("div");
  clearDueDateButton.parentNode.querySelector("input").value = "";
  content.dataset.dueDate = "";
});
deleteUndo.addEventListener("click", () => {
  currentItem.querySelector("div").dataset.deleted = "0";
  currentItem.style.display = "grid";
  updateTabCount();
  switchToDeleted();
});

deleteButton.addEventListener("click", () => {
  let deletedStatus = currentItem.querySelector("div").dataset.deleted;
  if (deletedStatus === "1") {
    let confirmed = confirm('Permanently delete? no way to recovery');
    if (confirmed) {
      let node = deleteButton.parentNode.querySelector("input");
      node.value = currentDetailID;
      let hiddenSubmitDelete = document.getElementById("hiddenSubmitDelete");
      hiddenSubmitDelete.click();
    }
  } else {
    currentItem.querySelector("div").dataset.deleted = "1";
    currentItem.style.display = "none";
    updateTabCount();
  }
});

function showDetail() {
  let dueDateDisplay = document.getElementById("datepicker");
  let createdDate = document.getElementById("createdDate");
  let content = currentItem.querySelector("div");
  todoContentInput.value = content.textContent;
  dueDateDisplay.value = content.dataset.dueDate;
  if (content.dataset.deleted === "0") deleteUndo.style.visibility = "hidden";
  else deleteUndo.style.visibility = "visible";
  createdDate.textContent = "created on: " + content.dataset.createDate;
  if (content.dataset.important === "0") detailStar.src = "./icon/star.svg";
  else detailStar.src = "./icon/star-solid.svg";
  if (content.dataset.completed === "0") {
    detailCheck.src = "./icon/circle.svg";
    todoContentInput.style = " text-decoration: ; color: darkslategrey;";
  } else {
    detailCheck.src = "./icon/circle-check-blue.svg";
    todoContentInput.style = " text-decoration: line-through; color: gray;";
  }
  checkButtonHover(detailCheck);
}

function switchCheckIcon(imgElement, textHolder) {
  if (!imgElement.src.endsWith("circle-check-blue.svg")) {
    imgElement.src = "./icon/circle-check-blue.svg";
    textHolder.style = " text-decoration: line-through; color: gray;";
    textHolder.dataset.completed = 1;
    completedCount.textContent = parseInt(completedCount.textContent, 10) + 1;
    if (textHolder.dataset.itemId === currentDetailID) {
      detailCheck.src = "./icon/circle-check-blue.svg";
      todoContentInput.style = " text-decoration: line-through; color: gray;";
    }
  } else {
    imgElement.src = "./icon/circle.svg";
    textHolder.style = " text-decoration: ; color: darkslategrey;";
    textHolder.dataset.completed = 0;
    completedCount.textContent = parseInt(completedCount.textContent, 10) - 1;
    if (textHolder.dataset.itemId === currentDetailID) {
      detailCheck.src = "./icon/circle.svg";
      todoContentInput.style = " text-decoration: ; color: darkslategrey;";
    }
  }
}

function switchStarIcon(imgElement, textHolder) {
  if (imgElement.src.endsWith("star.svg")) {
    imgElement.src = "./icon/star-solid.svg";
    textHolder.dataset.important = 1;
    importantCount.textContent = parseInt(importantCount.textContent, 10) + 1;
    if (textHolder.dataset.itemId === currentDetailID)
      detailStar.src = "./icon/star-solid.svg";
  } else {
    imgElement.src = "./icon/star.svg";
    textHolder.dataset.important = 0;
    importantCount.textContent = parseInt(importantCount.textContent, 10) - 1;
    if (textHolder.dataset.itemId === currentDetailID)
      detailStar.src = "./icon/star.svg";
  }
}

function switchToAll() {
  naviArea.querySelectorAll("div").forEach((div) => {
    div.style.background = "none";
  });
  allTodoCount.parentNode.style = "background-color: lightgray;";
  tabTitle.textContent = "All To-do";
  listItems.forEach((div) => {
    div.style.display = "grid";
    let content = div.querySelector("div");
    if (content.dataset.deleted === "1") {
      div.style.display = "none";
    }
  });
}

function switchToImportant() {
  naviArea.querySelectorAll("div").forEach((div) => {
    div.style.background = "none";
  });
  importantCount.parentNode.style = "background-color: lightgray;";
  tabTitle.textContent = "Important";
  listItems.forEach((div) => {
    div.style.display = "none";
    let content = div.querySelector("div");
    if (content.dataset.important === "1" && content.dataset.deleted === "0") {
      div.style.display = "grid";
    }
  });
}

function switchToCompleted() {
  naviArea.querySelectorAll("div").forEach((div) => {
    div.style.background = "none";
  });
  completedCount.parentNode.style = "background-color: lightgray;";
  tabTitle.textContent = "Completed";
  listItems.forEach((div) => {
    div.style.display = "none";
    let content = div.querySelector("div");
    if (content.dataset.completed === "1" && content.dataset.deleted === "0") {
      div.style.display = "grid";
    }
  });
}

function switchToDeleted() {
  naviArea.querySelectorAll("div").forEach((div) => {
    div.style.background = "none";
  });
  // document.getElementById(tabTitle.textContent).style="background-color: white;"
  deletedCount.parentNode.style = "background-color: lightgray;";
  tabTitle.textContent = "Deleted";
  listItems.forEach((div) => {
    div.style.display = "none";
    let content = div.querySelector("div");
    if (content.dataset.deleted === "1") {
      div.style.display = "grid";
    }
  });
}

function updateTabCount() {
  let all = 0;
  let imp = 0;
  let comp = 0;
  let del = 0;
  listItems.forEach((div) => {
    let content = div.querySelector("div");
    all++;
    if (content.dataset.important === "1" && content.dataset.deleted === "0")
      imp++;
    if (content.dataset.completed === "1" && content.dataset.deleted === "0")
      comp++;
    if (content.dataset.deleted === "1") {
      del++;
      all--;
    }
  });
  console.log(all, imp, comp, del);
  allTodoCount.textContent = "" + all;
  importantCount.textContent = "" + imp;
  completedCount.textContent = "" + comp;
  deletedCount.textContent = "" + del;
}
