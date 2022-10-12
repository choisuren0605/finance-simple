// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  return {
    getInput: function () {
      return {
        type: document.querySelector(".add__type").value,
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value,
      };
    },
    addListItem: function (item, type) {
      console.log("amjilttai handlaa");

      var html, list;
      if (type === "inc") {
        list = ".income__list";
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">$description$</div><div class="right clearfix"><div class="item__value">$value$</div><div class="item__delete">            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        list = ".expenses__list";
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">$description$</div><div class="right clearfix"><div class="item__value">$value$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      html = html.replace("%id%", item.id);
      html = html.replace("$description$", item.description);
      html = html.replace("$value$", item.value);

      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    },
  };
})();

// санхүүтэй ажиллах контроллер

var financeController = (function () {
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
      return item;
    },

    seeData: function () {
      return data;
    },
  };
})();

// Програмын холбогч контроллер

var ctrlAddItem = function () {
  console.log("Дэлгэцнээс өгөгдөл авах хэсэг");
  var input = uiController.getInput();
  console.log(input);
  item = financeController.addItem(input.type, input.description, input.value);
  console.log(item);
  uiController.addListItem(item, input.type);
};

document.querySelector(".add__btn").addEventListener("click", function () {
  ctrlAddItem();
});

document.addEventListener("keypress", function (event) {
  if (event.code == "Enter") {
    ctrlAddItem();
  }
});
