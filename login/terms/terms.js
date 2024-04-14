$(document).ready(function() {
    $("#all-agree").on("click", function(e) {
        $(".term1, .term2, .term3").prop("checked", $(this).prop("checked"));
    });

    $(".term1, .term2, .term3").on("click", function() {
        $("#all-agree").prop("checked", $(".term1, .term2, .term3").length === $(".term1:checked, .term2:checked, .term3:checked").length);
    });

    $("#terms-button").on("click", function() {
        if ($("#all-agree").prop("checked")) {
            window.location.href = "../regist/regist.html";
        } else {
            alert("전체 약관에 동의해주세요.");
        }
    });
});