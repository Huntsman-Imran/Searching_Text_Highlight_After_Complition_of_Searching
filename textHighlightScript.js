
/*
$('#search-click').keyup(function () {
    if($('#search-click').val().length !== 0) {
        // store search key on local storage
        localStorage.setItem("search_key", $("#search-click").val());
    }else {
        alert('Please enter a keyword to search.');
        $('#search-click').focus();
    }
})
*/

function highlightSearch() {
    if($('#search-click').val().length !== 0) {
        // store search key on local storage
        localStorage.setItem("search_key", $("#search-click").val());
    }else {
        alert('Please enter a keyword to search.');
        $('#search-click').focus();
    }
}
$(function () {
    // get search key from local storage
    var search_key = localStorage.getItem("search_key");

    // search each word on content and highlight matching text.
    $('.searchable').each(function(){
        // var search_value = $("#search").val();
        var search_value = localStorage.getItem("search_key");
        var search_regexp = new RegExp(search_value, "g");
        $(this).html($(this).html().replace(search_regexp,"<span class = 'highlight'>"+search_value+"</span>"));
    });
})
