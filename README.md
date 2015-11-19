# Gityup

A simple NodeJS git library.

This library just wraps around common git cli commands and allows you to call git commands through NodeJS.

## Installation

**You Must have [Git cli](https://git-scm.com/downloads) installed for gityup to work**.

## Very basic usage

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

## How it works

Gityup wraps basic git cli commands in functions and exceutes them using nodes [child_process](https://nodejs.org/api/child_process.html) module.

Example command function
```
// Checkout branch
var checkout = function ( branch_name ) {
  var git_path = get_git_path(),
      command = git_path + ' checkout ' + branch_name;

  execute( command );
};
```

The command is executed synchronously and blocks the main thread.

## Todo

- Add flag options to commands
- Enable asynchronous promise based execution
- Add more git commands: `fetch`, `commit`, `stash`, `merge` etc.
- Add getters/setters to commands

## commands

### `gityup.setup( [directory_name] )`

`setup()` Must be called before any other method is used. This is how gityup knows where to find your repository.

- `directory_name` *required* Is the path to the git directory relative to the script calling gityup. No need for a closing backslash.

```
gityup.setup('../my/git/project');
```

### `gityup.clone( [http_url] )`

`clone()` Is just like it's git counterpart and clones the file into the working scripts directory.

- `http_url` *required* The http/s url for the git repository.

```
gityup.clone('https://github.com/hitautodestruct/gityup.git');
```

### `gityup.checkout( [branch_name] )`

`checkout()` Is used for switching between branches.

- `branch_name` *required* The branch name to switch to.

```
gityup.checkout('gh-pages');

// Switched to branch 'gh-pages'
```

### `gityup.status()`

`status()` Gets the current repository git status and console.logs it to the terminal.

```
gityup.status();

// Prints out
// On branch master
// Your branch is up-to-date with 'origin/master'.
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git checkout -- <file>..." to discard changes in working directory)
//
// 	modified:   README.md
//
// no changes added to commit (use "git add" and/or "git commit -a")
```

### `gityup.pull()`

`pull()` Fetches and merges the current branch's head with the working tree.

```
gityup.pull();

// Already up-to-date.
```
