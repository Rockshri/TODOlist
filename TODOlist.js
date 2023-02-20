let container = document.getElementsByClassName("container");
let input = document.querySelectorAll("#input")[0];
let add = document.getElementById("button");

add.onclick = list;
function list() {
  if (input.value.trim() == "") {
    return;
  }
  let div = document.createElement("div");
  div.style.height = "20px";
  div.style.width = "300px";
  div.style.marginTop = "5px";
  div.style.paddingLeft = "4px";
  div.style.display = "flex";
  div.style.justifyContent = "start";

  div.innerHTML = `<li>${input.value}</li>&nbsp&nbsp&nbsp&nbsp<button style= "background-color:lightblue; outline:1px white solid; border-radius:4px;margin-left:50px;" onclick= "clickHandler(this)">DELETE</button>`;
  container[0].append(div);
  input.value = "";

  console.log(div);
  console.log(input);
}
function clickHandler(element) {
  element.previousElementSibling.parentElement.remove();
}