// var val1 = 'var変数';
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "変数の再宣言";
// console.log(val1);


// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "再宣言";
// console.log(val2);

// const val3  = "val3定数";
// console.log(val3);

// val3 = "update";

// const val3 = "再宣言";

// const val4 = {
//     name: "aaa",
//     age: 100,
// };

// val4.name = "suzuki";
// val4.address = "fukuoka"
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird"
// val5.push("monkey")
// console.log(val5);



/**
 * テンプレート文字列
 */

// const name = "suzuki";
// const age = 20;

// // 「私の名前はsuzukiです。年齢は28歳です。」と表示したい

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"; 
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);


/**
 * アロー関数
 */

// 従来の関数の書き方
// function func1(str) {
//     return str;
// }

// const func1 = function(str) {
//     return str;
// }
// console.log(func1("aaaa"));


// // アロー関数の書き方
// const func2 = str => str;

// console.log(func2("bbbb"));


// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 28));


/**
 * 分割代入
 */

// const myProfile = {
//     name: "suzuki",
//     age: 20,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name, age} = myProfile;

// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ["tanaka", 28];
// const message1 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message1);

// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);


/**
 * デフォルト値、引数等
 */

// const sayHello = (name = "default") => console.log(`こんにちは${name}さん`);

// sayHello("aaa");


/**
 * スプレッド構文
 */


// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);


// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);

// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; 
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;

// console.log(arr8);
// console.log(arr4);



/**
 * map,filterを使った配列の処理
 */

const nameArray = ["tanaka", "yamada", "saitou"];

// for (let index = 0;index < nameArray.length;index++) {
//     console.log(nameArray[index]);
// }

// const nameArr2 = nameArray.map((name) => {
//     return name;
// });


// console.log(nameArr2);

// nameArray.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArray = numArr.filter((num) => {
//     return num % 2 == 1;
// });

// console.log(newNumArray);


// const newNameArray = nameArray.map((name) => {
//     if (name === "saitou") {
//         return name; 
//     } else {
//         return `${name}さん`;
//     }
// });

// console.log(newNameArray);


/** 
 *三項演算子
 */

 // ある条件 ? 条件がtrueの時 : 条件がfalseの時

//  const val1 = 1 > 0 ? "true!!" : "false!!";
//  console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);


// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }

// console.log(checkSum(50, 40));


/** 
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//     console.log("1か2がtrueになります");
// }

// if (flag1 && flag2) {
//     console.log("1も2もtrueになります");
// }


// ||は左側がfalseになるとき右側を返す
// const num = 100;
// const fee = num || "金額未設定です"

// console.log(fee);


// // &&は左側がtrueなら右側を返す
// const num2 = null;

// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
