---
layout: gallery
title: Gallerij
ref: gallery-page
permalink: /
lang: nl
---

<div class="grid">
{% for image in site.static_files %}
  {% if image.path contains 'images/' %}
  <img class="grid-item" src="{{ site.baseurl }}{{ image.path }}" alt="image" />
  {% endif %}
{% endfor %}
</div>