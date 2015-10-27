# gityup
Simple nodejs git library.

# Very basic initial usage

```
const gity = require(./gityup);

// Clone repo
gity.clone('https://github.com/hitautodestruct/youtube-player.git');

// Setup repo name for use with the rest of our functions
gity.setup('youtube-player');

// Checkout existing branch
gity.checkout('gh-pages');

// See status
gity.status();

```
