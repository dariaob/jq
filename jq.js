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

$(document).ready(function(){

    //hide message_body after the first one
    $(".post_list .post_body:gt(0)").hide();

    //hide message li after the 5th
    $(".post_list li:gt(4)").hide();

    //toggle message_body
    $(".post_head").click(function(){
        $(this).next(".post_body").slideToggle(500)
        return false;
    });

    //collapse all messages
    $(".collapse_all_message").click(function(){
        $(".post_body").slideUp(500)
        return false;
    });

    //show all messages
    $(".show_all_message").click(function(){
        $(this).hide()
        $(".show_recent_only").show()
        $(".post_list li:gt(4)").slideDown()
        return false;
    });

    //show recent messages only
    $(".show_recent_only").click(function(){
        $(this).hide()
        $(".show_all_message").show()
        $(".post_list li:gt(4)").slideUp()
        return false;
    });

});