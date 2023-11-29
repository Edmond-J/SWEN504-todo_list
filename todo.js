let listItems = document.querySelectorAll(".listItem");
let main = document.querySelector(".main");
let detail = document.querySelector(".detail");
let menu = document.getElementById("menu");
let back = document.getElementById("back");
let newToDo = document.getElementById("newToDo");

listItems.forEach((div) => {
  //click a to-do item will show the details
  let content = div.querySelector("div");
  content.addEventListener("click", () => {
    // task.classList.toggle('hidden');
    if (detail.style.display === "none") {
      detail.style.display = "block";
    } else {
      detail.style.display = "none";
      console.log(div.textContent); //action on clicking each list item
    }
  });
  // check button action
  let imgCheck = div.querySelector("img");
  imgCheck.addEventListener("mouseover", function () {
    if (this.src.endsWith("circle-regular.svg")) {
      imgCheck.src = "./icon/circle-check-regular.svg";
    }
  });
  imgCheck.addEventListener("mouseout", function () {
    if (this.src.endsWith("circle-check-regular.svg")) {
      imgCheck.src = "./icon/circle-regular.svg";
    }
  });
  imgCheck.addEventListener("click", function () {
    if (!this.src.endsWith("circle-check-blue.svg")) {
      imgCheck.src = "./icon/circle-check-blue.svg";
      content.style = " text-decoration: line-through; color: gray;";
    } else {
      imgCheck.src = "./icon/circle-regular.svg";
      content.style = " text-decoration: ; color: darkslategrey;";
    }
  });
  //star button action
  let imgStar = div.querySelectorAll("img")[1];
  imgStar.addEventListener("click", () => {
    console.log(imgStar.src);
    if (imgStar.src.endsWith("star-regular.svg")) {
      imgStar.src = "./icon/star-solid.svg";
    } else {
      imgStar.src = "./icon/star-regular.svg";
    }
  });
});

newToDo.addEventListener("input", () => {
  let imgs = document.querySelectorAll("#addNew img");
  // document.getElementById("addNew").firstChild;
  imgs[0].style.transform = "rotate(45deg)";
  imgs[1].style.display = "block";
  imgs[0].addEventListener("click", () => {
    newToDo.value = "";
    imgs[0].style.transform = "rotate(0)";
    imgs[1].style.display = "none";
  });
  imgs[1].addEventListener("click", () => {
    //这里添加增加一个新list的操作
  });
});

menu.addEventListener("click", () => {
  main.style = "grid-template-columns: auto 1fr auto;";
  back.style.display = "block";
  menu.style.display = "none";
});

back.addEventListener("click", () => {
  main.style = "grid-template-columns: 0 1fr auto;";
  back.style.display = "none";
  menu.style.display = "block";
});
