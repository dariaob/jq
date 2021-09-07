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
            html += '<ul class="post_list">'
            html += '<li class="post_id">'+ value.body +'</li>'
            html += '</ul>'
        });
        $('#json_list').html(html);
    });
})

$(document).ready(function(){

    $(".pane .delete").click(function(){
        $(this).parents(".pane").animate({ opacity: "hide" }, "slow");
    });

});

//creating sweet pages plugin
(function($){

// Creating the sweetPages jQuery plugin:
    $.fn.sweetPages = function(opts) {

        // If no options were passed, create an empty opts object
        if (!opts) opts = {};

        let resultsPerPage = opts.perPage || 3;

        // The plugin works best for unordered lists, althugh ols would do just as well:
        let ul = this;
        let li = ul.find('li');

        li.each(function () {
            // Calculating the height of each li element, and storing it with the data method:
            let el = $(this);
            el.data('height', el.outerHeight(true));
        });

        // Calculating the total number of pages:
        let pagesNumber = Math.ceil(li.length / resultsPerPage);

        // If the pages are less than two, do nothing:
        if (pagesNumber < 2) return this;

        // Creating the controls div:
        let swControls = $('<div class="swControls"/>');

        for (let i = 0; i < pagesNumber; i++) {
            // Slice a portion of the lis, and wrap it in a swPage div:
            li.slice(i * resultsPerPage, (i + 1) * resultsPerPage).wrapAll('<div class="swPage" />');

            // Adding a link to the swControls div:
            swControls.append('<a href="" class="swShowPage">' + (i + 1) + '</a>');
        }

        ul.append(swControls);

       let maxHeight = 0;
       let totalWidth = 0;

       let swPage = ul.find('.swPage');
       swPage.each(function () {
       let elem = $(this);
       let tmpHeight = 0;
       elem.find('li').each(function (){tmpHeight+=$(this).data('height');});

       if (tmpHeight > maxHeight) {maxHeight = tmpHeight}
       totalWidth += elem.outerWidth();
       elem.css('float', 'left').width(ul.width());
       })
        swPage.wrapAll('<div class="swSlider"  />');
       ul.height(maxHeight);

       let swSlider = ul.find('.swSlider');
        swSlider.append('<div class="clear"/>').width(totalWidth);

        let hyperLinks = ul.find('a.showPage');

        hyperLinks.click(function (e) {
            $(this).addClass('active').siblings().removeClass('active');

            swSlider.stop().animate({'margin-left': -(parseInt($(this).text()) - 1)* ul.width()}, 'slow');
            e.preventDefault();
        });
        hyperLinks.eq(0).addClass('active');

        swControls.css({
            'left':'50%',
            'margin-left':-swControls.width() /2
        });

        return this;
    }

})(jQuery);


$(document).ready(function () {
    $('.post_list').sweetPages({perPage : 3});
    let controls = $('.swControls').detach();
    controls.appendTo('#json_list');
});