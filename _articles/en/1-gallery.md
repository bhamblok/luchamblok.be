---
layout: gallery
title: Sculptures
ref: gallery-page
permalink: /en/gallery
lang: en
---

<div class="grid">
{% for image in site.static_files %}
  {% if image.path contains 'images/sculptures' %}
  {% assign title = image.path | split: '/' %}
  {% assign title = title.last | split: '.' %}
  {% assign title = title.first | split: ' - ' %}
  <a href="JavaScript:void(0);" class="grid-item">
    <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ title.last }}" title="{{ title.last }}" />
    <div class="title">{{ title.last }}</div>
  </a>
  {% endif %}
{% endfor %}
</div>