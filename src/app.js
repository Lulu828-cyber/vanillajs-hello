/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randonNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Generador de excusas!");
};

let generateExcuse = () => {
  let subject = ["Big Foot", "A little bird", "My dragon", "your turtle"];
  let action = ["ate", "stole", "took", "cooked"];
  let possession = ["the homework", "my toe", "your lunch", "his shoe"];
  let where = ["in the street", "on the sidewalk", "at the park"];

  let subjectIndex = 0;
  let actionIndex = 0;
  let possessionIndex = 0;
  let whereIndex = 0;

  return (
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
