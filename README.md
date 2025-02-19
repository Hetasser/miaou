# Miaou

A chat server with authentication, persistent and searchable history, markdown formatting, video, private rooms, stars and votes, and many other features.

**[Introduction/Gallery](http://dystroy.org/miaou/static/intro.html)**

You can see it in action or use it on http://dystroy.org/miaou.

To discuss the code and feature of Miaou, please come to [the dedicated room](http://dystroy.org/miaou/1?Miaou).

# Features

* Public and Private rooms
* Video Chat
* Persisted
* Searchable
* graphical view of chat's history
* Markdown formatting, with keyboard shortcuts
* Message preview
* Image boxing
* Pings, optional desktop notification and loud pings
* Cross-rooms pings, ping autocompletion
* pluggable architecture
* Votes
* Pin and star
* Message replying
* Message edition
* Permanent message links
* In place links (no new window, no passive extracts)
* Authorization levels and administration
* OAuth2 authentication (Google, StackExchange, GitHub, Reddit)
* Global unique user names to prevent impersonation
* Initially reduced long messages
* Mobile touch devices optimized interface
* Plugins enabling the verification the chat user is linked to external profiles
* A plugin enabling embedded real time multi-player games (today featuring the Tribo game)
* private messaging
* image upload (using imgur API)
* client side bot API (see example as userscript)
* server side bot API, pluggable commands framework

# Contributing

As described in [the help](http://dystroy.org/miaou/help#Technical_Stack), Miaou is mostly coded in JavaScript. Stuff includes node.js, PostgreSQL, OAuth2, socket.io, WebRTC, express, Bluebird, Redis, Jade, Passport.js, hu.js, jQuery, sass/scss, Uglify-js and nginx.

A [vagrant](http://www.vagrantup.com/) configuration is available to help you set up a development environment quickly. See more information at its [documentation](vagrant/vagrant.md).

If you have the ability and will to contribute, come and discuss with us. The best landing place is usually the Miaou room where you can ping @dystroy or @Florian.

Here are the currently identified topics on which help would be welcome : http://dystroy.org/miaou/helpus 

But there are also many other tasks in the TODO list, just ask !

## License

Most of Miaou follows the [MIT License](http://opensource.org/licenses/MIT). Exceptions are specified [here](license.md).

Copyright (c) 2014 Denys Séguret <[http://dystroy.org/](http://dystroy.org/)>
