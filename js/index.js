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

function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}
