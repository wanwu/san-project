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
    {{#if_eq enableMatrix "false"}}
    {%block name="__head_asset"%}{%/block%}
    {{/if_eq}}

    {{#if_eq enableMatrix "true"}}
    {%$ua=$smarty.server.HTTP_USER_AGENT|lower%}
    {%if strpos($ua, 'lite baiduboxapp')%}
        {%*lite版本*%}
        {%block name="__lite_head_asset"%}{%/block%}
    {%elseif strpos($ua, 'mission baiduboxapp')%}
        {%*看多多*%}
        {%block name="__kdd_head_asset"%}{%/block%}
    {%elseif strpos($ua, 'baiduboxapp')%}
        {%*主版*%}
        {%block name="__head_asset"%}{%/block%}
    {%else%}
        {%*其他浏览器下*%}
        {%block name="__other_head_asset"%}{%/block%}
    {%/if%}
    {{/if_eq}}
</head>
<body ontouchstart="">
    {%block name="body"%}<div id="app"></div>{%/block%}

    {%* js 编译产物标记 *%}
    {{#if_eq enableMatrix "false"}}
    {%block name="__body_asset"%}{%/block%}
    {{/if_eq}}

    {{#if_eq enableMatrix "true"}}
    {%if strpos($ua, 'lite baiduboxapp')%}
        {%*lite版本*%}
        {%block name="__lite_body_asset"%}{%/block%}
    {%elseif strpos($ua, 'mission baiduboxapp')%}
        {%*看多多*%}
        {%block name="__kdd_body_asset"%}{%/block%}
    {%elseif strpos($ua, 'baiduboxapp')%}
        {%*主版*%}
        {%block name="__body_asset"%}{%/block%}
    {%else%}
        {%*其他浏览器下*%}
        {%block name="__other_body_asset"%}{%/block%}
    {%/if%}
    {{/if_eq}}
</body>
</html>
