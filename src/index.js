import { getID, create, queryAll } from "./help";
let circleTop = 0;
let circleLft = 0;

const containerStyle = {
  width: "200px",
  height: "200px",
  margin: "0 auto",
  border: "2px solid palegreen",
  position: "relative",
};

const circleStyle = {
  position: "absolute",
  width: "30px",
  height: "30px",
  borderRadius: "15px",
  backgroundColor: "palegreen",
  left: `${circleLft}px`,
  top: `${circleTop}px`,
};

const root = getID("root");
const container = create("div", { class: "container" });
const circle = create("div", { class: "circle" });

const left = create("button", { class: "left btn" });
left.innerText = "Left";
const right = create("button", { class: "right btn" });
right.innerText = "Right";
const top = create("button", { class: "top btn" });
top.innerText = "Top";
const bottom = create("button", { class: "bottom btn" });
bottom.innerText = "Bottom";
const btns = create("div", { class: "btns" });
btns.append(left, right, top, bottom);

root.append(container, btns);
container.append(circle);
Object.assign(container.style, containerStyle);
Object.assign(circle.style, circleStyle);
const btnList = queryAll("button");
const btnArr = Array.prototype.slice.call(btnList);
btnArr.map((item) => {
  item.addEventListener("click", function (event) {
    let circleName = event.target.innerText;
    switch (circleName) {
      case "Left":
        circleLft = circleLft - 10;
        circleLft >= 0
          ? Object.assign(circle.style, { left: `${circleLft}px` })
          : alert("No");
        break;
      case "Right":
        circleLft = circleLft + 10;
        circleLft <= 170
          ? Object.assign(circle.style, { left: `${circleLft}px` })
          : alert("No");
        break;
      case "Top":
        circleTop = circleTop - 10;
        circleTop >= 0
          ? Object.assign(circle.style, { top: `${circleTop}px` })
          : alert("No");
        break;
      case "Bottom":
        circleTop = circleTop + 10;
        circleTop <= 170
          ? Object.assign(circle.style, { top: `${circleTop}px` })
          : alert("No");
        break;

      default:
        alert("default");
    }
  });
});
