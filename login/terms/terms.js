//체크박스 전체 동의
$("#all-agree").on("click", function(e) {
    $(".term1, .term2, .term3").prop("checked", $(this).prop("checked"));
});

$(".term1, .term2, .term3, .term4, .term5, .term6").on("click", function() {
    $("#all-agree").prop("checked", $(".term1, .term2, .term3").length === $(".term1:checked, .term2:checked, .term3:checked").length);
});