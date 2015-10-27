var exec = require('child_process').exec;

module.exports = function () {

  var REPO = '';

  // Setup repo name so we can access outside of the folder
  var setup = function ( repo_name ) {
    REPO = repo_name;
  };

  // Returns the git path with the command
  // Allows us to access the git repo outside of the given directory
  var get_git_path = function () {
    return 'git --git-dir='+ REPO +'/.git --work-tree='+ REPO;
  };

  // Outputs result to log
  var log_result = function(error, stdout, stderr) {
    console.log(stdout);
  };

  // Excutes given command and outputs result
  var execute = function ( command ) {
      exec( command, log_result);
  };

  // Clone the directory via http url
  var clone = function ( url ) {
    var command = 'git clone ' + url;
    execute( command );
  };

  // Checkout branch
  var checkout = function ( branch_name ) {
    var git_path = get_git_path(),
        command = git_path + ' checkout ' + branch_name;

    execute( command );
  };

  // Show git status
  var status = function () {
    var git_path = get_git_path(),
        command = git_path + ' status';

    execute( command );
  };

  return {
    setup,
    clone,
    checkout,
    status
  };

};
