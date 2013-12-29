---
layout: page
title: Alex's CodeSpace
tagline: 
---
{% include JB/setup %}

Hello world!

### Recent Posts 
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
