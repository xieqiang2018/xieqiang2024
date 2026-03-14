---
layout: default
title: 标签
---

<h1>所有标签</h1>

<div class="tag-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
  <a href="{{ '/tags/' | append: tag[0] | relative_url }}">
    {{ tag[0] }} <span>({{ tag[1].size }})</span>
  </a>
  {% endfor %}
</div>
