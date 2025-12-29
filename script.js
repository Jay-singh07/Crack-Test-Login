document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  console.log("Username:", user);
  console.log("Password:", pass);

  alert("Login simulation complete (Lab Purpose Only)");
});
