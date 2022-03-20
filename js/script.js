$(document).ready(function () {
  let pizzaSize = 0;
  let pizzaCrust = 0;
  let pizzaTopping1 = 0;
  let pizzaTopping2 = 0;
  let pizzaTopping3 = 0;
  let totalCost = 0;
  let orderNumber = 0;
  //Function to get size values
  $(".label-size").click(function () {
    $("input[name='size']").removeProp("selected");
    $(this).find("input[name='size']").prop("selected", true);
    pizzaSize = parseInt($("input[name='size']:selected").val());
  });
  //Function to get crust values
  $(".crust").click(function () {
    $("input[name='crust']").removeProp("selected");
    $(this).find("input[name='crust']").prop("selected", true);
    pizzaCrust = parseInt($("input[name='crust']:selected").val());
  });
  //Function to get toppings values

  $("#btncheck1").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      return (pizzaTopping1 = parseInt($(this).val()));
    }
    return (pizzaTopping1 = 0);
  });
  $("#btncheck2").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      return (pizzaTopping2 = parseInt($(this).val()));
    }
    return (pizzaTopping2 = 0);
  });
  $("#btncheck3").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      return (pizzaTopping3 = parseInt($(this).val()));
    }
    return (pizzaTopping3 = 0);
  });
  //Create a constructor to return each order
  function Order(pizzaSize, pizzaCrust) {
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.pizzaTopping = {};
  }
  Order.prototype.addToppings = function () {
    this.pizzaTopping["mushroom"] = pizzaTopping1;
    this.pizzaTopping["cheese"] = pizzaTopping2;
    this.pizzaTopping["pepperoni"] = pizzaTopping3;
    return this.pizzaTopping;
  };

  $(".add").click(function () {
    let newOrder = new Order(pizzaSize, pizzaCrust);
    newOrder.addToppings();
    let cost =
      newOrder.pizzaSize +
      newOrder.pizzaCrust +
      newOrder.pizzaTopping.mushroom +
      newOrder.pizzaTopping.cheese +
      newOrder.pizzaTopping.pepperoni;
    totalCost = totalCost + cost;
    if (cost == 0 || totalCost == 0 || newOrder.pizzaSize == 0) {
      alert("Please pick at least a pizza size");
      return;
    }
    orderNumber += 1;
    console.log("Total cost ", totalCost);
    let appendSize;
    let appendCrust;
    if (newOrder.pizzaSize == 1000) {
      appendSize = "Large => ksh. " + newOrder.pizzaSize;
    } else if (newOrder.pizzaSize == 700) {
      appendSize = "Medium => ksh. " + newOrder.pizzaSize;
    } else if (newOrder.pizzaSize == 500) {
      appendSize = "Small => ksh. " + newOrder.pizzaSize;
    } else {
      appendSize = newOrder.pizzaSize;
    }
    if (newOrder.pizzaCrust == 150) {
      appendCrust = "Crispy => ksh. " + newOrder.pizzaCrust;
    } else if (newOrder.pizzaCrust == 100) {
      appendCrust = "Gluten-Free => ksh. " + newOrder.pizzaCrust;
    } else if (newOrder.pizzaCrust == 70) {
      appendCrust = "Stuffed => ksh. " + newOrder.pizzaCrust;
    } else {
      appendCrust = newOrder.pizzaCrust;
    }

    console.log(appendSize);

    $("tbody").append(
      `<tr><th scope='row'>${orderNumber}</th><td>${appendSize} </td><td>${appendCrust}</td>
      <td>
      Mushroom => ksh. ${newOrder.pizzaTopping.mushroom}<br>Cheese => ksh. ${newOrder.pizzaTopping.cheese}<br>Pepperoni => ksh. ${newOrder.pizzaTopping.pepperoni}
      </td>
      <td>${cost}</td></tr>`
    );
    $(".check-out").show();
    $(".check-out").click(function () {
      $(".check-out").hide();
      $(".checkout-msg .msg").text("Your total is ksh. " + totalCost);
      $(".checkout-msg .deliver").text(
        "Delivery fee is ksh. 200, total pay will be ksh. " +
          parseInt(totalCost + 200)
      );
      $(".checkout-msg .accept-decline").show();
    });
    $(".bg-danger").click(function () {
      $(".checkout-msg .accept-decline").hide();
      $(".final-msg").text(
        "Your order is ready, please come pick it. " + parseInt(totalCost)
      );
    });
  });
      $(".bg-success").click(function () {
        let loc = prompt("Enter your location ");
        $(".checkout-msg .accept-decline").hide();
        $(".final-msg").text(
          "Your order will be delivered to " +
            loc +
            ". Total charged amount ksh. " +
            parseInt(totalCost + 200)
        );
      });
});
