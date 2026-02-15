(function () {
  function initHeaderSearch() {
    var controls = document.querySelectorAll('.search-control');
    if (!controls.length) return;

    controls.forEach(function (control) {
      var toggle = control.querySelector('.search-toggle');
      var input = control.querySelector('input[type="search"]');
      if (!toggle || !input) return;

      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var isOpen = control.classList.contains('open');
        controls.forEach(function (item) {
          item.classList.remove('open');
        });

        if (!isOpen) {
          control.classList.add('open');
          setTimeout(function () {
            input.focus();
          }, 50);
        }
      });

      control.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    });

    document.addEventListener('click', function () {
      controls.forEach(function (control) {
        control.classList.remove('open');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        controls.forEach(function (control) {
          control.classList.remove('open');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderSearch);
  } else {
    initHeaderSearch();
  }
})();
