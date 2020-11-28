/* eslint-disable */
(function() {
  const { error } = console;

  console.error = function() {
    if (typeof arguments[0] !== 'string') {
      return error.apply(console, arguments);
    }
    if (
      typeof arguments[0] === 'undefined' ||
      (!arguments[0].includes('If you want to write it to the DOM,') &&
        !arguments[0].includes(
          'If you intentionally want it to appear in the DOM'
        ) &&
        !arguments[0].includes(
          'is unrecognized in this browser. If you meant'
        ) &&
        !arguments[0].includes('The following props are not supported:'))
    ) {
      error.apply(console, arguments);
    }
  };
})();
