;
(function (w, d, $, undefined) {
    function Header(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.index = this.data.index;
        this.config = {};
        this.init();
    }

    Header.prototype = {
        init: function () {
            this.initConfig();
            this.createDom();
            this.initCSS();
            this.bindEvent();
        },
        initConfig: function () {
        },
        createDom: function () {
            var that = this;
            $(this.C).html(
                "<div class='hInnerC'>" +
                '<img src="img/header/logo_01.png" id="headerLogo"/>' +
                '<ul><li>事务所介绍</li><li>技术合伙人</li><li>APP制作指南</li></ul>' +
                '</div>'
            );

            $(this.C).find('li').eq(that.index).addClass('cur');
        },
        initCSS: function () {
            var that = this;
            //在header.css
        },
        bindEvent: function () {
            var that = this;
            $(this.C).find('li').eq(0).click(function () {
                location.href = 'index.html';
            })

            $(this.C).find('li').eq(1).click(function () {
               console.log(1111111)
            })

            $(this.C).find('li').eq(2).click(function () {
                location.href = 'guide.html';
            })
        }
    }
    w.Header = Header;
})(window, document, jQuery)


