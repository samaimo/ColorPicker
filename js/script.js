// 文字列「カラーコードを検索」を取得
const text= document.querySelector('#colorText');

// カラーピッカーのコード番号を取得する
const color = document.querySelector('#colorPicker');

// 「カラーコードを検索」→[カラーコード：#000000]と表示する
text.textContent = `カラーコード：${color.value}`;

