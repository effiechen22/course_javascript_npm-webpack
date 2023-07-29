//載入第三方插件 axios
import axios from 'axios';
axios.get("https://hexschool.github.io/ajaxHomework/data.json").then(function(response){
   console.log(response);
});

//預設匯入
import data1 from "./export.js";
console.log(data1);
console.log(data1.a);
console.log(data1.b);
console.log(data1.c);


//具名匯入
import {d,add} from "./export.js";
console.log(d);
console.log(add(3,5));

//透過*as可以匯入全部 所以也能寫成下面這樣
//但匯入全部以後會比較難debug
// import * as data2 from "./export.js";
// console.log(data2.add(3,5));

// 混合使用-預設匯入&具名匯入
// import total,{d,add} from "./export.js";
// console.log(total);
// console.log(total.a);
// console.log(total.b);
// console.log(total.c);
// console.log(d);
// console.log(add(3,5));


//載入CSS
// import css from "./style.css";

//載入SCSS
import css from "./style.scss";
