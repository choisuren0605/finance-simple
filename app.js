var ctrlAddItem = function () {
  console.log("Дэлгэцнээс өгөгдөл авах хэсэг");
};

document.querySelector(".add__btn").addEventListener("click", function () {
  ctrlAddItem();
});

document.addEventListener("keypress", function (event) {
  if (event.code == "Enter" || event.which == "Enter") {
    ctrlAddItem();
  }
});
