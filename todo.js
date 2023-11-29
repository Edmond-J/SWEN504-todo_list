let listItems=document.querySelectorAll('.listItem')
listItems.forEach(div=>{
  let imgElement=div.querySelector('img')
  imgElement.addEventListener('mouseover',function (){
    imgElement.src='./icon/circle-check-regular.svg'
  })
  imgElement.addEventListener('mouseout',function (){
    imgElement.src='./icon/circle-regular.svg'
  })
  div.addEventListener('click',()=>{
    console.log(div.textContent)
  })
  div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor='antiquewhite'
  })
  div.addEventListener('mouseout',()=>{
    div.style.backgroundColor='white'
  })
})
