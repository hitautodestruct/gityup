# Gityup

Simple nodejs git library.
This library just wraps around common git cli commands and allows you to manipulate git through nodejs.

# Installation

*Must have [Git cli](https://git-scm.com/downloads) installed.

# Very basic initial usage

```
const gity = require('gityup');

// Clone repo
gity.clone('https://github.com/hitautodestruct/youtube-player.git');

// Setup repo name for use with the rest of our functions
gity.setup('youtube-player');

// Checkout existing branch
gity.checkout('gh-pages');

// See current git status
gity.status();

```
