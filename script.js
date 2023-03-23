const uploadBox = document.querySelector(".upload-box");
const fileInput = uploadBox.querySelector("input");
const preViewImg = uploadBox.querySelector("img");
const widthInput = document.querySelector(".width input");
const heightInput = document.querySelector(".height input");

const loadFile = (e) => {
  const file = e.target.files[0]; //getting first user selected file
  if (!file) return;
  preViewImg.src = URL.createObjectURL(file);
  preViewImg.addEventListener("load", () => {
    widthInput.value = preViewImg.naturalWidth;
    heightInput.value = preViewImg.naturalHeight;

    document.querySelector(".wrapper").classList.add("active");
  });
};

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => {
  fileInput.click();
});
