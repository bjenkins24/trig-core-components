/* eslint-disable */
(function() {
  const { error, warn } = console;

  console.error = function() {
    // if (!arguments[0].includes('If you want to write it to the DOM,')) {
    //   error.apply(console, arguments);
    // }
  };
})();
