(function ($) {
	"use strict";

    jQuery(document).ready(function($){  
        $(".description-comment").niceScroll({
        cursorcolor:"rgba(34, 10, 81, 0.37)", 
        background:"#fff",
        cursorborder:"1px solid #fff",
        cursorborderradius:0
      });
      

      // save
      $('a.save-btn').click(function(){
        $('.save-blk').toggleClass('save-content')
      });
      $('a.save-btn').click(function(){
        $('.overlay').toggleClass('overlay-active')
      })

    }); 

}(jQuery));	