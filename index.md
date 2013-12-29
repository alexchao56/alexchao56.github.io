---
layout: page
title: khoa's internet hideout
tagline: 
---
{% include JB/setup %}

Hey there! 
    
I'm Khoa, a senior at [`Cal`](http://berkeley.edu/) majoring in [`Computer Science`](http://www.cs.berkeley.edu). I also like Math, Stats, Economics, and Industrial Engineering, and have taken some classes in these fields as my electives. I love to `build stuff`, `learn something new`, and [`git push`](http://github.com/kqdtran/) on a regular basis.    

I'm most interested in `Natural Language Processing`, `Data Mining`, `Machine Learning`, and `their applications in the real world`. I got my feet wet in NLP from my internship at [`Ocean Tomo, LLC`](http://www.oceantomo.com/) in Summer 2013, and is dabbling in ML through various [`MOOCs`](https://www.coursera.org/) from Stanford and Caltech in my free time.    

I also have a strong passion for `teaching` and `sharing` what I know with others. Before I graduate :(, I plan to `TA` for a class at Berkeley and share my passion for Computer Science with other students. I recently built [`BearRec`](https://bearrec.herokuapp.com/) at [`HackJam Fall 2013`](http://www.hacksy.com/hackjam_fall2013/), an app that allows students to search for classes related to their interests using the official [Berkeley API](https://developer.berkeley.edu/). Check it out!    

_Shoot me an email at `khoatran (at) berkeley (dot) edu`, and let's chat!_ :D    

I do exist outside of the computer world - I play tennis, racquetball, lift (or at least try to), and throw frisbee. During this winter break, some of my free time will also be occupied by [this](http://www.amazon.com/God-War-Saga-Collection-Playstation-3/dp/B008CP6MA2) &gt;.&gt;    

I haven't blogged in a while, but I do plan to get back this Winter break... Hopefully!

### Recent Posts 
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
