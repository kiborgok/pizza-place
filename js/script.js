$(document).ready(function () {
  //Function to get size values
  $(".label-size").click(function () {
    $("input[name='size']").removeProp("selected");
    $(this).find("input[name='size']").prop("selected", true);
    console.log($("input[name='size']:selected").val());
  });
  //Function to get crust values
  $(".crust").click(function () {
    $("input[name='crust']").removeProp("selected");
    $(this).find("input[name='crust']").prop("selected", true);
    console.log($("input[name='crust']:selected").val());
  });
  //Function to get toppings values

  $("#btncheck1").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      console.log($(this).val());
    }
  });
  $("#btncheck2").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      console.log($(this).val());
    }
  });
  $("#btncheck3").click(function () {
    $(this).prop("checked", $(!this).prop("checked"));
    if ($(this).is(":checked")) {
      console.log($(this).val());
    }
  });
});
