let box = document.querySelector(".box");
let tiles = document.getElementsByClassName("tile");
let downloadBox = document.querySelector(".download_box");
let icon_image = document.querySelector("#icon_image");
let resultBox = document.querySelector(".result_box");
let width = 9;
let bgc="gold";//background color
let tc="cyan";//tile color
let root = document.querySelector(":root");
const generateIcon = () =>{
    box.innerHTML="";
    root.style.setProperty("--bgc",bgc);
    box.style.gridTemplateColumns=box.style.gridTemplateRows=`repeat(${width.toString()},auto)`;
    box.style.width=box.style.height= `${width*10}px`;
    // box.style.transform=`scale(${200/(width*10)})`;
    for(let i = 1;i<=width;i++){
      for(let j = 1;j<=width;j++){
        box.innerHTML += "<div class='tile'></div>";
      }
    }
      let forwardMoving = width-1;
    for(let x = 0;x<width;x++){
      for(let y = 0;y<width/2;y++){
        let randNum = Math.floor(Math.random()*2);
        let position = (x*width)+y;
        let symmetricPosition = position + forwardMoving;
      
      if(randNum){
        tiles[position].style.backgroundColor=tiles[symmetricPosition].style.backgroundColor=tc;
        tiles[position].style.borderColor=tiles[symmetricPosition].style.borderColor=tc;
      }
      forwardMoving -= 2;
  }
    forwardMoving = width-1;
  }
}
generateIcon();
const changeIconSize = (input) => {
    width = input.value;
    generateIcon();
}
const changeIconColor = (input,mode) => {
    mode === 'bgc' ? bgc = input.value : tc=input.value;
    generateIcon();
}
const download = () => {
  html2canvas(box).then(canvas => {
    resultBox.innerHTML="";
    resultBox.appendChild(canvas)
});
}