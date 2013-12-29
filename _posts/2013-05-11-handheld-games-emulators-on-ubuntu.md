---
layout: post
title: "Handheld games emulators on Ubuntu"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Have you ever missed those classic PS1 titles like [Castlevania: Symphony of the Night](http://www.ign.com/games/castlevania-symphony-of-the-night/ps-336)? Or felt nostalgic for your childhood, when you trained your Pokemon to be the very best, like no one ever was, on your Gameboy Color?    

I know I have. But I run Linux, and most of the emulators found online are .exe files.

You can run [Wine](https://apps.ubuntu.com/cat/applications/wine1.4-amd64/), but I wouldn't recommend it, unless the emulator is really lightweight.

It turns out that there are certain apps available in the Ubuntu Apps Repository that would achieve the same result as their Windows's counterpart. I was bored during [dead week](https://en.wikipedia.org/wiki/Dead_week) when most people camped in the library 24/7, so I searched around for some simple ways to relax and destress myself. It all started with a simple package search

{% highlight bash %}
sudo apt-cache search psx
{% endhighlight %}

, which yield   

	pcsxr - Sony PlayStation emulator
	pcsxr-dbg - Sony PlayStation emulator (debug)

. (You know what to do next, right? :p). If you'd like to install from source, [this link](https://pcsxr.codeplex.com/documentation) provides a great start. Here's Megaman X5 played on PCSXR:

<div class="media">
    <div class="media-left"><img src="/assets/ubuntu/pcsxr.png" title="Megaman X5 played on PCSXR"></div>   
</div>

Next up is Gameboy Advance. There are many options available, most of which can be found via Ubuntu Software Center. My personal favorite is VBA-M, which happens to belong in an [external package](http://www.ubuntuupdates.org/package/getdeb_games/raring/games/getdeb/vbam) (so doing apt-cache search vbam wouldn't return anything, yet).

sudo so you do so:   

{% highlight bash %}
wget -q -O- http://archive.getdeb.net/getdeb-archive.key | sudo apt-key add -
sudo gedit /etc/apt/sources.list  
{% endhighlight %}

You need <tt>sudo</tt> in the second command because things in /etc are configuration files and are read-only by default. Go to the end and paste in this line    

	deb http://archive.getdeb.net/ubuntu/ precise-getdeb games 

At this point you're done. Do an <tt>apt-get update</tt> to let ubuntu know that you've added this external package and fetch it, then <tt>apt-get install vbam</tt> to finish everything. Weirdly enough, the command to start vbam is <tt>gvbam</tt>, which takes me a while to figure out the 'g' part. Pokemon Emerald executed perfectly on VBA-M:

<div class="media">
    <div class="media-left"><img src="/assets/ubuntu/gba.png" title="Pokemon Emerald on VBA-M"></div>   
</div>

Finally comes the DS. Installation is as simple as the first one, with just one single command

{% highlight bash %}
sudo apt-get install desmume
{% endhighlight %}

. And here's Megaman Star Force 3: Red Joker tested on Ubuntu's Desmume

<div class="media">
    <div class="media-left"><img src="/assets/ubuntu/nds.png" title="Megaman Star Force 3: Red Joker on Desmume"></div>   
</div>

. Awesome, isn't it?