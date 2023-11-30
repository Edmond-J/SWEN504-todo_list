let listItems = document.querySelectorAll(".list .listItem");
let mainFrame = document.querySelector(".main");
let naviArea = document.querySelector(".navi");
let detailArea = document.querySelector(".detail");
let menuButton = document.getElementById("menu");
let backButton = document.getElementById("back");
let closeDetailButton = document.getElementById("closeDetail");
let deleteButton = document.getElementById("deleteATodo");
let newToDoInput = document.getElementById("newToDo");
let todoContentInput = document.getElementById("todoContentInput");
let dueDateButton = document.getElementById("dueDateImg");

listItems.forEach((div) => {
  //click a to-do item will show the details
  let content = div.querySelector("div");
  content.addEventListener("click", () => {
    // task.classList.toggle('hidden');
    todoContentInput.value = content.textContent;
    if (detailArea.style.display === "none") {
      detailArea.style.display = "flex";
    } else {
      detailArea.style.display = "none";
    }
  });

  // check button action
  let imgCheck = div.querySelector("img");
  imgCheck.addEventListener("mouseover", function () {
    if (this.src.endsWith("circle.svg")) {
      imgCheck.src = "./icon/circle-check.svg";
    }
  });
  imgCheck.addEventListener("mouseout", function () {
    if (this.src.endsWith("circle-check.svg")) {
      imgCheck.src = "./icon/circle.svg";
    }
  });
  imgCheck.addEventListener("click", function () {
    if (!this.src.endsWith("circle-check-blue.svg")) {
      imgCheck.src = "./icon/circle-check-blue.svg";
      content.style = " text-decoration: line-through; color: gray;";
    } else {
      imgCheck.src = "./icon/circle.svg";
      content.style = " text-decoration: ; color: darkslategrey;";
    }
  });
  //star button action
  let imgStar = div.querySelectorAll("img")[1];
  imgStar.addEventListener("click", () => {
    console.log(imgStar.src);
    if (imgStar.src.endsWith("star.svg")) {
      imgStar.src = "./icon/star-solid.svg";
    } else {
      imgStar.src = "./icon/star.svg";
    }
  });
});

closeDetailButton.addEventListener("click", () => {
  console.log(closeDetailButton.src);
  // detailArea.style.display = "none";
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
  detailArea.style.display = "none"
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
