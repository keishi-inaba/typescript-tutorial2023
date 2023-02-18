import SaySomething from "./saySomething";

// htmlElement型のroot変数を取得
const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething("hello typescript")
saySomething.sayText(root)

