const uploadBox = document.querySelector(".upload-box");
const fileInput = uploadBox.querySelector("input");
const preViewImg = uploadBox.querySelector("img");
const widthInput = document.querySelector(".width input");
const heightInput = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");
const downloadBtn = document.querySelector(".download-btn");
const quality = document.querySelector(".quality input");

let ogImageRatio;

const loadFile = (e) => {
  const file = e.target.files[0]; //getting first user selected file
  if (!file) return;
  preViewImg.src = URL.createObjectURL(file);
  preViewImg.addEventListener("load", () => {
    widthInput.value = preViewImg.naturalWidth;
    heightInput.value = preViewImg.naturalHeight;
    ogImageRatio = preViewImg.naturalWidth / preViewImg.naturalHeight;

    document.querySelector(".wrapper").classList.add("active");
  });
};

widthInput.addEventListener("keyup", () => {
  const height = ratioInput.checked
    ? widthInput.value / ogImageRatio
    : heightInput.value;

  heightInput.value = Math.floor(height);
});
heightInput.addEventListener("keyup", () => {
  const width = ratioInput.checked
    ? heightInput.value * ogImageRatio
    : widthInput.value;

  widthInput.value = Math.floor(width);
});

const resizeAndDownload = () => {
  const canvas = document.createElement("canvas");
  const a = document.createElement("a");
  const ctx = canvas.getContext("2d");

  const imgQuality = quality.checked ? 0.7 : 1.0;

  canvas.height = heightInput.value;
  ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  a.href = canvas.toDataURL("image/jpg", imgQuality);
  a.download = new Date().getTime();
  a.click();
};
downloadBtn.addEventListener("click", resizeAndDownload);
fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => {
  fileInput.click();
});
