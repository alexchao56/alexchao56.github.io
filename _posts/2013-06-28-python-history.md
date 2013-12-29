---
layout: post
title: "Commands History in Python Prompt"
description: ""
category: Python
tags: [Python, Bash, Data Analysis]
---
{% include JB/setup %}

During the first month of my internship, I learned and worked exclusively with Scala, Simple Build Tool (SBT), and Play 2 pretty much everyday. Last weekend, I decided to crack open [Python for Data Analysis](http://www.amazon.com/Python-Data-Analysis-Wes-McKinney/dp/1449319793/ref=sr_1_1?ie=UTF8&qid=1372893011&sr=8-1&keywords=python+for+data+analysis) to learn a few new tricks with Python and data analysis using its awesome libraries. One small thing I noticed about the difference between the Scala's REPL and Python's is that the former remembers commands history from previous sessions, much like a BASH shell. Python by default clears all the history after you <tt>exit()</tt> or <tt>Ctrl+C</tt> out of the REPL, and doesn't have this simple nice feature (or at least this was the case on my machine...)

So after digging into Google and SOF, I found a nice and simple solution [in the documentation](http://docs.python.org/2/tutorial/interactive.html?highlight=atexit) itself... cd back to your main directory and create a file called .pystartup (don't forget the dot '.') with the following content:

{% highlight python %}
# Add auto-completion and a stored history file of commands to your Python
# interactive interpreter. Requires Python 2.0+, readline. Autocomplete is
# bound to the Esc key by default (you can change it - see readline docs).
#
# Store the file in ~/.pystartup, and set an environment variable to point
# to it:  "export PYTHONSTARTUP=~/.pystartup" in bash.

import atexit
import os
import readline
import rlcompleter

historyPath = os.path.expanduser("~/.pyhistory")

# Tab completion
readline.parse_and_bind('tab: complete')

def save_history(historyPath=historyPath):
    import readline
    readline.write_history_file(historyPath)

if os.path.exists(historyPath):
    readline.read_history_file(historyPath)

atexit.register(save_history)
del os, atexit, readline, rlcompleter, save_history, historyPath 
{% endhighlight %}

Then go to your .bashrc file, and put down this line (or just type it in your shell prompt)

{% highlight bash %}
export PYTHONSTARTUP=/home/your_user_name/.pystartup
{% endhighlight %}

Now you can cycle between commands using the up/down keys, and pressing Tab will give you auto-completion, much like a Bash shell. Pretty cool, huh?

If you like interactive shell, [IPython](http://ipython.org/install.html) does a wonderful job. It's certainly a great asset if you're into data visualization and scientific computing with Python, which by the way, is... on my TODO list with the aforementioned book... :D 
