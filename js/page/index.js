function appendPageIndex() {
    var winH = $(window).height();
    var winW = $(window).width();
    var pageIndex = window.pageIndex || 0;//当前页面（初始化用）

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


        //if(Object.prototype.toString.call(AnimateInArr[pageIndex])=='[object Function]'){
        //    AnimateInArr[pageIndex]();
        //}else{
        //}
        AnimateInArr[pageIndex]();
        AnimateOutArr[oldIndex]();
    };

    window.DoPageChange = DoPageChange;

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
                translateX: '-130px',
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
                });
        },
        //AnimateInArr[1]
        function () {
            $pages.find('#p2p1').velocity({
                translateX: '-310px',
                translateY: '-10px',
                opacity: 0,
            }, 0).delay(1000)
                //.velocity({
                //    opacity: 1,
                //}, 1000, 'ease');
                .velocity('transition.whirlIn', 2000, ease);
        },
        //AnimateInArr[2]
        function () {
            $pages.find('#p3p1').velocity({
                translateX: '-310px',
                translateY: '-190px',
                opacity: 0,
            }, 0).delay(1000)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p3p2').velocity({
                translateX: '-200px',
                translateY: '-70px',
                opacity: 0,
            }, 0).delay(1200)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p3p3').velocity({
                translateX: '-220px',
                translateY: '0px',
                opacity: 0,
            }, 0).delay(1400)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p3Lis').velocity({
                translateX: '-610px',
                translateY: '60px',
                opacity: 0,
            }, 0).delay(1600)
                .velocity({
                    translateX: '-410px',
                    translateY: '60px',
                    opacity: 1,
                }, 1000, ease);
        },
        //AnimateInArr[3]
        function () {
            var delay = 1000;


            $pages.find('#p4left,#p4line,#p4full').velocity({opacity: 0}, 0);

            $pages.find('#p4p1').velocity({
                translateX: '-330px',
                translateY: '-170px',
                opacity: 0,
            }, 0).delay(delay)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');


            //猴子在出现后 延迟一秒钟 文字和猴子全部消失...
            $pages.find('#p4monkey').velocity({
                translateX: '-300px',
                translateY: '10px',
                opacity: 0,
            }, 0).delay(delay + 200)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease', function () {
                    $pages.find('#p4p1,#p4monkey')
                        .delay(1000)
                        .velocity({opacity: 0,}, 1000, 'ease', function () {
                            //#p4p1,#p4monkey 文字和猴子全部消失以后APP显示
                            $pages.find('#p4left').velocity({
                                translateX: '-690px',
                                translateY: '-50px',
                                opacity: 0,
                            }, 0).velocity({
                                translateX: '-490px',
                                translateY: '-50px',
                                opacity: 1,
                            }, 1000, 'ease');


                            $pages.find('#p4line').velocity({
                                translateX: '100px',
                                translateY: '-230px',
                                opacity: 0,
                            }, 0).velocity({
                                opacity: 1,
                            }, 2000, 'ease')
                                .velocity({
                                    opacity: 0,
                                }, 2000, 'ease');

                            $pages.find('#p4full').velocity({
                                translateX: '76px',
                                translateY: '-259px',
                                opacity: 0,
                            }, 0).delay(2500)
                                .velocity({
                                    opacity: 1,
                                }, 1000, 'ease');

                        });
                });

            //
        },
        //AnimateInArr[4]
        function () {
            var delay = 1000;
            $pages.find('#p5p1').velocity({
                translateX: '220px',
                translateY: '-20px',
                opacity: 0,
            }, 0).delay(delay)
                .velocity({
                    translateX: '20px',
                    translateY: '-20px',
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p5cemetery').velocity({
                translateX: '-580px',
                translateY: '-170px',
                opacity: 0,
            }, 0).delay(delay + 400)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p5app').velocity({
                translateX: '-380px',
                translateY: '0px',
                opacity: 0,
            }, 0).delay(delay + 800)
                .velocity({
                    translateX: '-380px',
                    translateY: '-50px',
                    opacity: 1,
                }, 1000, 'ease');

        },
        //AnimateInArr[5]
        function () {
            var delay = 1000;
            $pages.find('#p6p1').velocity({
                translateX: '-220px',
                translateY: '-90px',
                opacity: 0,
            }, 0).delay(delay)
                .velocity('transition.shrinkIn', 2000, ease);

            $pages.find('#p6p2').velocity({
                translateX: '-300px',
                translateY: '-10px',
                opacity: 0,
            }, 0).delay(delay + 400)
                .velocity('transition.shrinkIn', 2000, ease);
        },
        //AnimateInArr[6]
        function () {
            var delay = 1000;
            $pages.find('#p7p1').velocity({
                translateX: '-70px',
                translateY: '-130px',
                opacity: 0,
            }, 0).delay(delay)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p7p2').velocity({
                translateX: '80px',
                translateY: '30px',
                opacity: 0,
            }, 0).delay(delay + 400)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p7Shield').velocity({
                translateX: '-550px',
                translateY: '-180px',
                opacity: 0,
            }, 0).delay(delay + 800)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');
        },
        //AnimateInArr[7]
        function () {
            var delay = 1000;
            $pages.find('#p8border').velocity({
                translateX: '-310px',
                translateY: '-370px',
                opacity: 1,
            }, 0).delay(delay)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p8p1').velocity({
                translateX: '-140px',
                translateY: '-150px',
                opacity: 0,
            }, 0).delay(delay + 400)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p8btns').velocity({
                translateX: '-228px',
                translateY: '70px',
                opacity: 1,
            }, 0).delay(delay + 800)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p8circle').velocity({
                translateX: '8px',
                translateY: '57px',
                opacity: 0,
            }, 0).delay(delay + 1200)
                .velocity({
                    opacity: 1,
                }, 4000, 'ease');

        },
        //AnimateInArr[8]
        function () {
            var delay = 1000;
            var step = 400;
            $pages.find('#p9p1').velocity({
                translateX: '-520px',
                translateY: '-100px',
                opacity: 0,
            }, 0).delay(delay)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p9p2').velocity({
                translateX: '-520px',
                translateY: '30px',
                opacity: 0,
            }, 0).delay(delay + step)
                .velocity({
                    opacity: 1,
                }, 1000, 'ease');

            $pages.find('#p9cirBig').velocity({
                translateX: '-90px',
                translateY: '-260px',
                opacity: 1,
                rotateZ: '0deg',
            }, 0).delay(0)
                .velocity({
                    opacity: 1,
                    rotateZ: '360deg',
                }, 1000, 'ease');

            $pages.find('#p9cirSmall').velocity({
                translateX: '-70px',
                translateY: '-200px',
                opacity: 1,
                rotateZ: '30deg',
            }, 0).delay(step)
                .velocity({
                    opacity: 1,
                    rotateZ: '0deg',
                }, 1000, 'ease');

        },
        //AnimateInArr[9]
        function () {
        },
        //AnimateInArr[10]
        function () {
        },
    ];
    window.AnimateInArr = AnimateInArr;

    var AnimateOutArr = [
        //AnimateInArr[1]
        function () {
        },
        //AnimateInArr[2]
        function () {
        },
        //AnimateInArr[3]
        function () {
        },
        //AnimateInArr[4]
        function () {
        },
        //AnimateInArr[5]
        function () {
        },
        //AnimateInArr[6]
        function () {
        },
        //AnimateInArr[7]
        function () {
        },
        //AnimateInArr[8]
        function () {
        },
        //AnimateInArr[9]
        function () {
        },
        //AnimateInArr[10]
        function () {
        },
    ];
    window.AnimateOutArr = AnimateOutArr;

}
