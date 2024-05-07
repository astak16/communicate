const global = this;
// 监听来自 main 的消息
addEventListener("message", (e) => {
  console.log("worker 收到 main 的消息：", e.data);
  // 调用更新函数进行状态更新
  page[e.data]();
});

const page = {
  data: {
    text: "我是来自 worker 的数据",
  },

  updateData() {
    this.data.text += "!!!";
    // 状态更新完成后，向 main 发送消息
    global.postMessage(page.data.text);
  },
};

const initPage = () => {
  // 初始化页面，向 main 发送消息
  global.postMessage(page.data.text);
};
setTimeout(() => {
  initPage();
}, 1000);
