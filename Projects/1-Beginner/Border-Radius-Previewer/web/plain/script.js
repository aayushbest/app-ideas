const borderBottomLeftRadius = document.getElementsByName("border-bottom-left-radius")[0];
const borderTopLeftRadius = document.getElementsByName("border-top-left-radius")[0];
const borderTopRightRadius = document.getElementsByName("border-top-right-radius")[0];
const borderBottomRightRadius = document.getElementsByName("border-bottom-right-radius")[0];
const exampleBox = document.querySelector(".example-box");
const copyCSSButton = document.querySelector("button");
let bottomLeft = "0px",bottomRight="0px",topLeft="0px",topRight="0px";
const 😊 = 'hello';


borderBottomLeftRadius.addEventListener("input",(event)=>{
    bottomLeft = event.target.value+"px";
    exampleBox.style.borderBottomLeftRadius = bottomLeft;
});

borderTopLeftRadius.addEventListener("input",(event)=>{
   topLeft = event.target.value+"px";
    exampleBox.style.borderTopLeftRadius = topLeft;
});

borderTopRightRadius.addEventListener("input",(event)=>{
    topRight = event.target.value+'px';
    exampleBox.style.borderTopRightRadius = topRight;
});

borderBottomRightRadius.addEventListener("input",(event)=>{
    bottomRight = event.target.value+'px';
    exampleBox.style.borderBottomRightRadius = bottomRight;
});

copyCSSButton.addEventListener("click",(event)=>{
  if(navigator.userActivation.hasBeenActive){
        const clipboard = navigator.clipboard;
        console.log(clipboard);
        console.log(bottomLeft);
        console.log(topLeft);
        console.log(topRight);
        console.log(bottomRight);
        const borderRadiusProperty= `.className,#id,element{ border-radius:${topLeft} ${topRight} ${bottomRight} ${bottomLeft};}`;
        console.log(borderRadiusProperty);
        clipboard.writeText(borderRadiusProperty);
  }else{
    alert("Please Update the Values First!");
  }
});