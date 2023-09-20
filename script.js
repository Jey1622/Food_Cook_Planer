const inputfood=document.getElementById("input");
const inputbtn=document.getElementById("input-btn");
const fooditem=document.getElementById("food-item");
const noListEl=document.getElementById("no-list");
const foodcountEl=document.getElementById("foodcount")
const fregment=document.createDocumentFragment();

const handleInputFood = ()=>{
   var li=document.createElement("li");
   const divItem=document.createElement("div");
   const divRemoveBtn=document.createElement("div");
   li.append(divItem,divRemoveBtn)
   divRemoveBtn.parentElement.setAttribute("onclick","removeItem(event)");
   divRemoveBtn.innerHTML='<button class="libtn">X</button>';

  
   var item=document.createTextNode(input.value);
    divItem.append(item);
    li.append(divItem);
    li.append( divRemoveBtn);
    fregment.append(li);
    fooditem.append(fregment);
    refreshUI()

}
inputbtn.addEventListener("click",handleInputFood);
inputfood.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        handleInputFood();
    }else if(event.key==="Keyz" && (event.ctrlKey || event.metaKey)){
        inputfood.value="";
    }
})
function upload(message){
    const main=document.getElementsByClassName("main");
    const div=document.createElement("div");
    const alert=document.createTextNode(message);
    div.className="alart";
    div.append(alert);
    main[0].prepend(div);
}
upload(`✅Food is Uploaded`);

function removeItem(event){
    var exitli=event.target.parentNode.parentNode;
    exitli.remove()
    refreshUI()

}

function refreshUI(){
    if(fooditem.children.length > 0){
        noListEl.hidden=true;
    }else{
        noListEl.hidden=false;
    }
}

