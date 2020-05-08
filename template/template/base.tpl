<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1.0 user-scalable=no">
    <title>{%block name="title"%}百度{%/block%}</title>
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="dns-prefetch" href="//b.bdstatic.com">
    <link rel="dns-prefetch" href="//s.bdstatic.com">
    <script>
        (function (doc, win) {
            var dummy = doc.createElement('_').style;
            dummy.width = '1vw';
            if (dummy.width) {
               return;
            }
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) {
                        return;
                    }
                    docEl.style.fontSize = (clientWidth / 10) + 'px';
                };
            recalc();
            win.addEventListener(resizeEvt, recalc, false);
        })(document, window);
    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html {
            font-size: 10vw;
        }
    </style>
    {%block name="head"%}{%/block%}
    {%* css 编译产物标记 *%}
    {%block name="__head_asset"%}{%/block%}
</head>
<body ontouchstart="">
    {%block name="body"%}<div id="app"></div>{%/block%}

    {%* js 编译产物标记 *%}
    {%block name="__body_asset"%}{%/block%}

</body>
</html>
