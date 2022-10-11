// オブジェクトにアクセスする
const parentNode = document.getElementById('wallPaper-wrapper');

// 変数を生成する
function createRandomNumber(num1, num2) {
  return Math.floor(Math.random() * (num1 - num2 + 1)) + num2
}

// オプションの値を生成する関数
// **
// * @param {array} array {boolean} boolean
// * @return {string[]}
// */
function createPathLine(array, boolean) {
  for (let i = 0; i < 8; i ++) {
    let options = {
      counter: createRandomNumber(0, 50),
      startX: createRandomNumber(0, 200),
      startY: 0,
      endX: createRandomNumber(0, 200),
      endY: 200,
      sin: createRandomNumber(100, 300),
      cos: createRandomNumber(100, 300),
      pointX: createRandomNumber(0, 3),
      pointY: createRandomNumber(0, 3),
      direction: boolean // -> boolean
    }
    array.push(options);
  }
  return array;
}

// オプションを生成する関数
// **
// * @param {array} array
// * @return {string}
// */
function setAttributeValue(array) {
  let attribute = '';
  for (let i = 0; i < 8; i ++) {
    let predefinedOption = array[i],
        direction = predefinedOption.direction ? 1 : -1,
        newdefinedOption = {
          x: 500 * Math.sin(predefinedOption.counter / predefinedOption.sin) * direction,
          y: 500 * Math.cos(predefinedOption.counter / predefinedOption.cos) * direction
        };
    attribute += `\nM${(newdefinedOption.x * (predefinedOption.pointX / 150) + predefinedOption.startX).toFixed(3)},\n${predefinedOption.startY}\n\nT${(newdefinedOption.x * (predefinedOption.pointY / 150) + predefinedOption.startX).toFixed(3)},\n${predefinedOption.endY}\n`;
    predefinedOption.counter ++
  }
  return attribute
}

// WallPaper01
const wallPaper01Node = document.createElementNS('http://www.w3.org/2000/svg', 'path');

let isWallPaper01 = true,
    wallPaper01Options = [];
createPathLine(wallPaper01Options, isWallPaper01);
const changeWallPaper01Value = () => {
  wallPaper01Node.setAttribute('d', setAttributeValue(wallPaper01Options));
  requestAnimationFrame(changeWallPaper01Value);
}
changeWallPaper01Value();

// WallPaper02
const wallPaper02Node = document.createElementNS('http://www.w3.org/2000/svg', 'path');

let isWallPaper02 = true,
    wallPaper02Options = [];
createPathLine(wallPaper02Options, isWallPaper02);
const changeWallPaper02Value = () => {
  wallPaper02Node.setAttribute('d', setAttributeValue(wallPaper02Options));
  requestAnimationFrame(changeWallPaper02Value);
}
changeWallPaper02Value();

// 空のオブジェクト
let fragment = new DocumentFragment();

// DOMを追加
const wallPaper01Attributes = {
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'none',
  viewBox: '0 0 200 200',
  class: 'wallPaper01'
}

const wallPaper02Attributes = {
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'none',
  viewBox: '0 0 200 200',
  class: 'wallPaper02'
}

const wallPaper01 = document.createElementNS('http://www.w3.org/2000/svg','svg');

const wallPaper02 = document.createElementNS('http://www.w3.org/2000/svg','svg');

for(let i of Object.entries(wallPaper01Attributes)) {
  wallPaper01.setAttribute(i[0], i[1]);
}

for(let i of Object.entries(wallPaper02Attributes)) {
  wallPaper02.setAttribute(i[0], i[1]);
}

wallPaper01Node.style.cssText = 'fill: none; stroke: rgba(54, 53, 54, 0.08);stroke-width: 0.5px;vector-effect: non-scaling-stroke;'
wallPaper01.appendChild(wallPaper01Node);
wallPaper02Node.style.cssText = 'fill: none; stroke: rgba(54, 53, 54, 0.15);stroke-width: 0.5px;vector-effect: non-scaling-stroke;'
wallPaper02.appendChild(wallPaper02Node);
fragment.appendChild(wallPaper01);
fragment.appendChild(wallPaper02);

parentNode.appendChild(fragment);
