const URL = 'https://jsonplaceholder.typicode.com/posts/1'

$(function readAjax() {
    $.getJSON(URL, function (data) {
        let items = [];
        $.each(data, function (key, value) {
            items.push("<li id ='" + key + "'>" + value + "</li>");
        });
        $("<ul/>", {
            "class": "newList",
            html: items.join("")
        }).appendTo(".pane");
    });
    $('<img src="img/btn-delete.gif" alt="delete" class="delete">').appendTo(".pane");
})

const URL1 = 'https://jsonplaceholder.typicode.com/posts';
$(function () {
    $.getJSON(URL1, function (data) {
        let html = '';
        $.each(data, function (key, value) {
            html += '<ol class="post_list">'
            html += '<li class="post_id">'+ value.id +'</li>'
            html += '<p class="post_head"></p>'
            html += '<div class="post_body">'+ value.body +'</div>'
            html += '</ol>'
        });
        $('#json_list').html(html);
    });
})

$(document).ready(function(){

    $(".pane .delete").click(function(){
        $(this).parents(".pane").animate({ opacity: "hide" }, "slow");
    });

});

