// Дэлгэцтэй ажиллах контроллер
var uiController = function () {
  input = {
    type: document.querySelector(".add__type").value,
    description: document.querySelector(".add__description").value,
    value: document.querySelector(".add__value").value,
  };
  return input;
};

// санхүүтэй ажиллах контроллер

var financeController = (function () {
  input = uiController();

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;

      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);
    },

    seeData: function () {
      return data;
    },
  };
})();

// Програмын холбогч контроллер

var ctrlAddItem = function () {
  console.log("Дэлгэцнээс өгөгдөл авах хэсэг");
  var input = uiController();
  console.log(input);
  financeController.addItem(input.type, input.description, input.value);
};

document.querySelector(".add__btn").addEventListener("click", function () {
  ctrlAddItem();
  console.log(input.value);
});

document.addEventListener("keypress", function (event) {
  if (event.code == "Enter") {
    ctrlAddItem();
  }
});
