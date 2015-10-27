var exec = require('child_process').exec;

var gity = (function () {

  var repo = '';

  var setup = function ( repo_name ) {
    repo = repo_name;
  };

  var log_result = function(error, stdout, stderr) {
    console.log(stdout);
  };

  var execute = function ( command ) {
      exec( command, log_result);
  };

  var clone = function ( url ) {
    var command = 'git clone ' + url;
    execute( command );
  };

  var checkout = function ( branch_name ) {
    var command = 'git --git-dir='+ repo +'/.git --work-tree='+ repo +' checkout ' + branch_name;
    execute( command );
  };

  var status = function () {
    var command = 'git --git-dir='+ repo +'/.git --work-tree='+ repo +' status';
    execute( command );
  };

  return {
    setup,
    clone,
    checkout,
    status
  };

})();
