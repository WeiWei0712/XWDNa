function login(event) {
  event.preventDefault(); // 防止表單自動送出

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const validUsername = "KevinSun";
  const validPassword = "Tyuio56789_";

  if (username === validUsername && password === validPassword) {
    message.style.color = "#27ae60";
    message.textContent = "登入成功！歡迎回來，" + username + "。";
    // 若要導向其他頁面，可啟用下面這行：
    window.location.href = "app.html";
  } else {
    message.style.color = "#e74c3c";
    message.textContent = "帳號或密碼錯誤，請再試一次。";
  }

  return false;
}
