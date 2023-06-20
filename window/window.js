// Window Object: answer 4 a and b

function openWindow(url, width, height) {
  let left = (screen.width - width) / 2;
  let top = (screen.height - height) / 2;
  let options = `width= ${width}, height= ${height},top= ${top} left= ${left}`;
  window.open(url, '_blank', options);
}

openWindow('https://www.example.com', 800, 600);