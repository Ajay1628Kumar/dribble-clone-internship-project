function previewImage(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", reader.result);
      imgElement.setAttribute("style", "max-width: 300px"); // Limit image width for preview
      document.getElementById("imagePreview").innerHTML = "";
      document.getElementById("imagePreview").appendChild(imgElement);
    };

    reader.readAsDataURL(file);
  }
}
