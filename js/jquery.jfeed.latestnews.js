jQuery(function() {

    jQuery.getFeed({
        url: './rss/vemotion-news.xml',
        success: function(feed) {
            
            var html = '';
            
            for(var i = 0; i < feed.items.length && i < 3; i++) {
            
                var item = feed.items[i];
                html += '<div class=block>'
				+ '<h3>' + '<a href="' + item.link + '">' + item.title + '</a>' + '</h3>';
                
                html += '<div class="grey">'
                + item.updated
                + '</div>'               
                + item.description
				+ '</div>';
            }
            jQuery('#latestnews').append(html);
			$('#news').flips( { autorun_delay:1000, direction: 'right'});
        }    
    });
});