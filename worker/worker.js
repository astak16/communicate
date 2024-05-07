console.log("hello worker", this === self);

postMessage("我是来自 worker 的消息");

onmessage = (e) => {
  console.log("接收来自 main 的消息:", e.data);
};
