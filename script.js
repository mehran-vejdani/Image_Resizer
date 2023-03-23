const uploadBox = document.querySelector(".upload-box");
const fileInput = uploadBox.querySelector("input");
const preViewImg = uploadBox.querySelector("img");

const loadFile = (e) => {
  const file = e.target.files[0]; //getting first user selected file
  if (!file) return;
  preViewImg.src = URL.createObjectURL(file);
  preViewImg.addEventListener("load", () => {
    document.querySelector(".wrapper").classList.add("active");
  });
};

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => {
  fileInput.click();
});
