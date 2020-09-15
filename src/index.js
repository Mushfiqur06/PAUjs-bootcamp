import { getID, getClass, create } from "./help";
import { generateLi } from "./li";
import data from "./../data";

const root = getID("root");

const ul = create("ul", { class: "list" });
const list = data.map((item) => ul.append(generateLi(item)));
ul.append(list);
root.append(ul);
ul.onclick = eventHandler;

function eventHandler(event) {
  console.dir(event);
  if (event.target.parentNode.tagName === "LI") {
    alert(event.target.innerText);
  }
}

// const heading = getID("heading");
// const headingArr = [heading.innerText, "This is new heading Text"];
// let terms = false;

// const container = getClass("container");
// setInterval(() => {
//   if (terms) {
//     heading.innerText = headingArr[0];
//     terms = false;
//   } else {
//     heading.innerText = headingArr[1];
//     terms = true;
//   }
// }, 3000);
