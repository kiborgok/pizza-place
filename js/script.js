$(document).ready(function () {
    $(".label-size").click(function () {
        $("input[name='size']").removeProp("selected");
        $(this).find("input[name='size']").prop("selected", true);
        console.log($("input[name='size']:selected").val());
    })
})