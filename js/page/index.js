function appendPageIndex() {
    var winH = $(window).height();
    var winW = $(window).width();
    var pageIndex = 0//当前页面（初始化用）

//para...
    var isConVelocited = false;
    var ease = 'easeInOutQuart';
    var duration = 1000;


//操作的jq对象
    var $con = $('#container');
    var $pages = $con.find('.page');
    var $header = $('#header');
    var $circles = $('#circles');


//init background 添加背景颜色
//var colorArr = ['#aaa', 'white', '#aaa', 'white', '#aaa', 'white', '#aaa', 'white', '#aaa'];
//$pages.each(function (i, e) {
//    $(this).css('backgroundColor', colorArr[i]);
//});

    $circles.find('li').each(function (i, e) {
        $(this).click(function () {
            var oldIndex = pageIndex;
            pageIndex = i;
            DoPageChange(oldIndex, pageIndex);
        })
    });


    $(window).mousewheel(function (e, delta) {
        var e = e || event;
        e.preventDefault();	//阻止页面的默认滚动。

        if (!window.ifCanWheel) {
            return;
        }

        if (!isConVelocited) {
            //console.log('可动')
            var oldIndex = pageIndex;
            if (delta == -1) {
                pageIndex++;
            }
            else if (delta == 1) {
                pageIndex--;
            }
            //验收......
            pageIndex = pageIndex > ($pages.length - 1) ? ($pages.length - 1) : pageIndex;
            pageIndex = pageIndex < 0 ? 0 : pageIndex;

            DoPageChange(oldIndex, pageIndex);
        }
    });


    function DoPageChange(oldIndex, pageIndex) {
        if (oldIndex == pageIndex) {
            return;
        }

        isConVelocited = true;
        setTimeout(function () {   //滚轮截流
            isConVelocited = false;
        }, 2000);


        //判断当前的page是上移还是下移
        var dir = (oldIndex < pageIndex) ? 'up' : 'down'; //-1 1

        //上移的代码
        if (dir == 'up') {
            $pages.eq(oldIndex).velocity({'top': '-100%'}, duration, ease);
            $pages.eq(pageIndex).velocity({top: '100%'}, 0).velocity({'top': '0%'}, duration, ease);
        } else {
            $pages.eq(oldIndex).velocity({'top': '100%'}, duration, ease);
            $pages.eq(pageIndex).velocity({top: '-100%'}, 0).velocity({'top': '0%'}, duration, ease);
        }

        $circles.find('li').eq(pageIndex).addClass('cur').siblings().removeClass('cur');

        AnimateInArr[pageIndex]();
        AnimateOutArr[oldIndex]();

    };

    window.DoPageChange=DoPageChange;

//AnimateIn/Out Arr.................................................................
    var AnimateInArr = [
        //AnimateInArr[0]
        function () {
            $pages.find('#p1p1').velocity({
                translateX: '110px',
                translateY: '-90px',
                opacity: 0,
            }, 0).delay(1000)
                .velocity({
                    translateX: '-130px',
                    translateY: '-90px',
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p1Brain').velocity({
                translateX: '-210px',
                translateY: '-250px',
                opacity: 0,
            }, 0).delay(1200)
                .velocity({
                    translateX: '-410px',
                    translateY: '-250px',
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find("#p1Type").remove();
            $pages.eq(0).append("<div id='p1Type'></div>");
            $pages.find("#p1Type").velocity({
                translateX: '10px',
                translateY: '0px',
            }, 0)
                .delay(1400)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease', function () {
                    $pages.find("#p1Type").typed({
                        strings: ["是脑海中的一个创意 ，迸发至 ^1000 99999 行代码"],
                        typeSpeed: 60,
                        contentType: 'html',
                        //loop: true,
                    });
                })
        },
        function () {
            $pages.find('#p2p1').velocity({
                translateX: '-310px',
                translateY: '-10px',
                opacity: 0,
            }, 0).delay(1000)
                //.velocity({
                //    opacity: 1,
                //}, 1000, 'ease');
                .velocity('transition.whirlIn', 2000, 'ease');
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
    ];
    window.AnimateInArr = AnimateInArr;

    var AnimateOutArr = [
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
    ];
    window.AnimateOutArr = AnimateOutArr;

}
