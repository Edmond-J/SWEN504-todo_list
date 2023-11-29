let listItems = document.querySelectorAll(".listItem");
let main = document.querySelector(".main");
let task = document.querySelector(".task");
let menu = document.getElementById("menu");
let back = document.getElementById("back");
let newToDo = document.getElementById("newToDo");

listItems.forEach((div) => {
  // check button action
  let imgCheck = div.querySelector("img");
  imgCheck.addEventListener("mouseover", function () {
    imgCheck.src = "./icon/circle-check-regular.svg";
  });
  imgCheck.addEventListener("mouseout", function () {
    imgCheck.src = "./icon/circle-regular.svg";
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
  let content = div.querySelector("span");
  content.addEventListener("click", () => {
    // task.classList.toggle('hidden');
    if (task.style.display === "none") {
      task.style.display = "block";
    } else {
      task.style.display = "none";
      console.log(div.textContent); //action on clicking each list item
    }
  });
  // div.addEventListener("mouseover", () => {
  //   div.style.backgroundColor = "antiquewhite";
  // });
  // div.addEventListener("mouseout", () => {
  //   div.style.backgroundColor = "white";
  // });
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
  imgs[1].addEventListener("click",()=>{
    //这里添加增加一个新list的操作
  })
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
