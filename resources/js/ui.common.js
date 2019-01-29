;(function($, win, doc, undefined) {

    'use strict';
    
    $plugins.common = {
 
        init: function(){
            $plugins.uiAjax({ id:'baseHeader', url:'../html/inc/header.html', page:true, callback:$plugins.common.header });
            $plugins.uiAjax({ id:'baseFooter', url:'../html/inc/footer.html', page:true, callback:$plugins.common.footer });
            
            console.log('------------------------------------------------------')
            
            $(win).on('scroll', function(){
               headerChange($(win).scrollTop())
            });
            function headerChange(v){
                v > 0 ? $('body').addClass('type-mini'): $('body').removeClass('type-mini');
            }


            imgChange();
            $(win).resize(imgChange());

            function imgChange(){
                if ($(win).outerWidth() > 1399) {
                    $('img').each(function(){
                        var $this = $(this);
                        console.log($this.attr('dsrc'))
                        $this.attr('src', $this.attr('dsrc'));
                    });
                } else {
                    $('img').each(function(){
                        var $this = $(this);
                        $this.attr('src', $this.attr('msrc'));
                    });
                }

            }

        },
        
        header: function(){
            
        },
  
        footer: function(){
            console.log('footer load');
        }
    };

    //modal
    

    //page 
    $plugins.page = {}

    //callback
    $plugins.callback = {
        modal: function(modalId){
            switch(modalId) {
                case 'modalID':
                    break;  

                    
            }
        }
    }
   
    $(doc).ready(function() {
        $plugins.common.init();
	});
})(jQuery, window, document);
