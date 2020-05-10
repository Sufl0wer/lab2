function openForm() {
  document.getElementById("myForm").style.display = "flex";
  document.getElementById("popUp").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$('.submitButton').click(function () {
    let fn = $("#nameText").val();
    let ln = $("#passwordText").val();
    $.ajax({
        url: "https://httpbin.org/status/200", type: "POST",
        success: function () {
            $('.buying-popup .message.success').toggle()
        },
        error: function () {
            $('.buying-popup .message.failure').toggle()
        }
    })
    document.getElementById("myForm").style.display = "none";
});