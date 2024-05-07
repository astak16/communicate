const button = document.getElementById("button");
const worker = new Worker("./worker.js");
button.onclick = () => {
  worker.postMessage("我是来自 main 的消息");
};
worker.onmessage = (e) => {
  console.log("main:", e);
};
