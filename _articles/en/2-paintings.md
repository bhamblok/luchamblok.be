---
layout: gallery
title: Paintings
ref: paintings-page
permalink: /en/paintings
lang: en
---

<div class="grid">
{% for image in site.static_files %}
  {% if image.path contains 'images/paintings' %}
  {% assign title = image.path | split: '/' %}
  {% assign title = title.last | split: '.' %}
  <div class="grid-item">
    <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ title.first }}" title="{{ title.first }}" />
    <div class="title">{{ title.first }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>