// 文字列「カラーコードを検索」を取得
const text= document.querySelector('#colorText');

// カラーピッカーのコード番号を取得する
const color = document.querySelector('#colorPicker');


const colorBg = () => {
  text.textContent = `カラーコード：${color.value}`;
}

// カラーピッカーが変更されたら　colorBgを発動させる
color.addEventListener('input', colorBg);
