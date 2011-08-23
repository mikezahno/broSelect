(function($){

    $.fn.extend({ 

        broSelect: function() {
         
            return this.each(function() {
                
                var t = $(this),
                    opt = $(this).children(),
                    arg = [];
                    
                for(i=0;opt.length>i;i++) {
                    arg.push({
                        'value': opt.eq(i).val(),
                        'name': opt.eq(i).text()
                    });
                }
                
                t.css({display:'none'}).wrap('<div class="selectWrap" />');
                var selectWrap = t.parent();
                
                selectWrap.append('<div class="selectTab"><span class="val"></span><div class="arrows"><span class="up">▲</span><span class="down">▼</span></div></div><div class="selectOptions" />');
                
                var selectTab = $('.selectTab',selectWrap),
                    selectOptions = $('.selectOptions',selectWrap),
                    selected = 0;
                    
                opt.each(function() {
                    if($(this).attr('selected')) {
                        selected = $(this).index();
                    }
                });
                
                $('.val',selectTab).text(arg[selected]['name']).attr('alt',arg[selected]['value']);
                    
                for(i=0;arg.length>i;i++) {
                    selectOptions.append('<div alt="'+arg[i]['value']+'">'+arg[i]['name']+'</div>');
                }
                
                function tog() {
                    selectOptions.slideToggle();
                    selectTab.toggleClass('active');
                }
                
                selectTab.click(function() {
                    tog();
                });
                
                selectOptions.children().click(function() {
                    var i = $(this).index();
                    $('.val',selectTab).text(arg[i]['name']).attr('alt',arg[i]['value']);
                    t.val($('.val',selectTab).attr('alt'));
                    tog();
                });
                
            });
        }
    });
    
})(jQuery);