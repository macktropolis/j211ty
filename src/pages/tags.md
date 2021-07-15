---
title: 'Tag Archive'
layout: 'articles-feed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: 
    - all
    - nav
    - blog
    - work
    - featuredWork
    - people
    - rss
  addAllPagesToCollections: true
eleventyComputed:
  title: Tagged '{{ tag }}'
permalink: '/tag/{{ tag | slug }}/'
---

<h1>Tagged “{{ tag }}”</h1>

{% set postslist = collections[ tag ] %}
{% include 'articles-feed.njk' %}

<p>See <a href="{{ '/tags/' | url }}">all tags</a>.</p>