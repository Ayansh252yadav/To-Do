let input = document.querySelector("input");
let button = document.querySelector("Button");
let ul = document.querySelector("ul");
let p=document.querySelector("p");
button.addEventListener("click", () => {
    console.log(input.value);
    if (input.value.trim() !== ""){

    let li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add( "bg-zinc-100","p-3", "rounded-xl");

    let delBtn = document.createElement("button");

   let icon2 = document.createElement("i");
    icon2.classList.add("fa-regular", "fa-circle-dot","cursor-pointer");
    

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash", "text-red-500","ml-100");
    
    delBtn.appendChild(icon);
    delBtn.addEventListener("click", () => {
        li.remove();
    });
 icon2.addEventListener("click", () => {
        li.classList.toggle("line-through");
        li.classList.toggle("text-gray-400");

        icon2.classList.toggle("fa-circle");
        icon2.classList.toggle("fa-circle-check");
    });
    li.prepend(icon2);

    li.appendChild(delBtn);
     ul.appendChild(li);
    input.value = "";
    p.innerText="";
}else{
    p.classList.add( "text-red-500");
    p.innerText="Empty item can't add in list";
}
})