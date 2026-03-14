---
layout: default
title: 分类
---

<h1>所有分类</h1>

<ul class="category-list">
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
  <li>
    <a href="{{ '/categories/' | append: category[0] | relative_url }}">
      {{ category[0] }}
      <span>({{ category[1].size }})</span>
    </a>
  </li>
  {% endfor %}
</ul>
