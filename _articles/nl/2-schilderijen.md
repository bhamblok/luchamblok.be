---
layout: gallery
title: Schilderijen
ref: paintings-page
permalink: /nl/schilderijen
lang: nl
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