---
layout: gallery
title: Gallery
ref: gallery-page
permalink: /en/gallery
lang: en
---

<div class="grid">
{% for image in site.static_files %}
  {% if image.path contains 'images/' %}
  {% assign title = image.path | split: '/' %}
  {% assign title = title.last | split: '.' %}
  <img class="grid-item" src="{{ site.baseurl }}{{ image.path }}" alt="{{ title.first }}"  title="{{ title.first }}" />
  {% endif %}
{% endfor %}
</div>