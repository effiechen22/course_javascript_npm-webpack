//預設匯出--一個模組只能有一個
// export default "hello";
let a = 1;
let b = 66;
let c = a + b;
export default {
   a: a,
   b: b,
   c: c
};

//具名匯出
export const d = 99;
export function add(x, y) {
   return x + y;
};
