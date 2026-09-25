const feedbackForm = document.querySelector("#feedback-form");
const feedbackDialog = document.querySelector("#feedback-dialog");
const dialogMessage = document.querySelector("#dialog-message");
const dialogClose = document.querySelector("#dialog-close");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);
  const name = formData.get("name").trim();
  const rating = formData.get("rating");

  dialogMessage.textContent = `${name}, recebemos sua avaliação: "${rating}". Sua opinião é muito importante para o nosso projeto.`;
  feedbackDialog.showModal();
  feedbackForm.reset();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

dialogClose.addEventListener("click", () => {
  feedbackDialog.close();
});

feedbackDialog.addEventListener("click", (event) => {
  if (event.target === feedbackDialog) {
    feedbackDialog.close();
  }
});
