$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const flavor1Input = $("input#flavor1").val();
    const flavor2Input = $("input#flavor2").val();
    const flavor3Input= $("input#flavor3").val();
    const flavor4Input = $("input#flavor4").val();
    const flavor5Input = $("input#flavor5").val();

    $(".flavor1").text(flavor1Input);
    $(".flavor2").text(flavor2Input);
    $(".flavor3").text(flavor3Input);
    $(".flavor4").text(flavor4Input);
    $(".flavor5").text(flavor5Input);

    $("#story").show();
  });
});