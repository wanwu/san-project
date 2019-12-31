{%extends file="../base.tpl"%}
{%block name="__head_asset"%}<head></head>{%/block%}
{%block name="__body_asset"%}<body></body>{%/block%}

{%block name="title"%}Todo{%/block%}

{%block name="body"%}
<div id="app"></div>
{%/block%}

{{#if_eq enableMatrix "true"}}
{%*看多多*%}
{%block name="__kdd_head_asset"%}<head></head>{%/block%}
{%block name="__kdd_body_asset"%}<body></body>{%/block%}

{%*lite版本*%}
{%block name="__lite_head_asset"%}<head></head>{%/block%}
{%block name="__lite_body_asset"%}<body></body>{%/block%}

{%*其他浏览器下*%}
{%block name="__other_head_asset"%}<head></head>{%/block%}
{%block name="__other_body_asset"%}<body></body>{%/block%}
{{/if_eq}}