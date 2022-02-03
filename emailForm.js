const btn = document.getElementById("btn-submit");

btn.addEventListener("click", function handleClick(event) {
  // if you are submitting a form (prevents page reload)
  event.preventDefault();

  alert("Thank you! Your message was sent!");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Send value to server
  // console.log(firstNameInput.value);

  // clear input field
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
