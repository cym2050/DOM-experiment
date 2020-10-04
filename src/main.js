const content = document.querySelector("#content");
const push = document.querySelector("#push");
const dom = document.querySelector("#dom");
const bro = document.querySelector("#bro");

const test = document.createElement("div");
content.appendChild(test);

const n = 100000

function add() {
  const test1 = document.createElement("div");
  test1.textContent = 'adddddddddd'
  content.appendChild(test1);
}

function run() {
  
  const t0 = performance.now()
  const arr = []
  for(let i =0; i < n; i++) {
    arr.push(i)
  }

  const t1 = performance.now();
  for (let i = 0; i < n; i++) {
    const div = document.createTextNode("div");
    div.textContent =  i;
    test.appendChild(div)
  }
  const t2 = performance.now();
  dom.textContent = 'JS DOM 操作用时：' + (t2 - t1) + "ms";
  push.textContent = 'JS push 操作用时：' + (t1 - t0) + "ms";
  setTimeout(() => {
    const t3 = performance.now();
    bro.textContent = '浏览器渲染完用时：' + (t3 - t1) + "ms";
  });
}
