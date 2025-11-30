// Set current year in footer
(function () {
  var span = document.getElementById('year');
  if (span) {
    span.textContent = new Date().getFullYear();
  }
})();
