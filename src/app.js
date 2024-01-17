/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

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

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

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
