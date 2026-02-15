(function () {
  var mainImage = document.getElementById('pd-main-image');
  var secondaryImage = document.getElementById('pd-secondary-image');
  var currentLabel = document.getElementById('pd-current');
  var totalLabel = document.getElementById('pd-total');
  var progress = document.getElementById('pd-progress');
  var prevBtn = document.getElementById('pd-prev');
  var nextBtn = document.getElementById('pd-next');

  if (!mainImage || !secondaryImage || !currentLabel || !totalLabel || !progress || !prevBtn || !nextBtn) {
    return;
  }

  var defaultVariants = [
    {
      top: [
        'https://picsum.photos/id/1060/1300/900',
        'https://picsum.photos/id/1033/1300/900',
        'https://picsum.photos/id/1044/1300/900'
      ],
      bottom: 'https://picsum.photos/id/1025/1200/900'
    },
    {
      top: [
        'https://picsum.photos/id/1038/1300/900',
        'https://picsum.photos/id/1043/1300/900',
        'https://picsum.photos/id/1050/1300/900'
      ],
      bottom: 'https://picsum.photos/id/1015/1200/900'
    },
    {
      top: [
        'https://picsum.photos/id/1020/1300/900',
        'https://picsum.photos/id/1031/1300/900',
        'https://picsum.photos/id/1062/1300/900'
      ],
      bottom: 'https://picsum.photos/id/1005/1200/900'
    }
  ];
  var variants = defaultVariants.slice();

  var variantIndex = 0;
  var slideIndex = 0;

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function render() {
    if (!variants.length) return;
    var slides = variants[variantIndex].top;
    mainImage.src = slides[slideIndex];
    secondaryImage.src = variants[variantIndex].bottom;

    currentLabel.textContent = pad(slideIndex + 1);
    totalLabel.textContent = pad(slides.length);
    progress.style.width = ((slideIndex + 1) / slides.length) * 100 + '%';

    prevBtn.classList.toggle('is-disabled', slideIndex === 0);
    nextBtn.classList.toggle('is-disabled', slideIndex === slides.length - 1);
  }

  prevBtn.addEventListener('click', function () {
    if (slideIndex > 0) {
      slideIndex -= 1;
      render();
    }
  });

  nextBtn.addEventListener('click', function () {
    var slides = variants[variantIndex].top;
    if (slideIndex < slides.length - 1) {
      slideIndex += 1;
      render();
    }
  });

  function bindColorRadios(selector) {
    var radios = document.querySelectorAll(selector);
    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (!radio.checked) return;
        variantIndex = Number(radio.value) || 0;
        slideIndex = 0;
        syncRadios();
        render();
      });
    });
  }

  function getVariantsFromCMS(data) {
    var detail = data && data.productDetail ? data.productDetail : window.__COLIBRI_PRODUCT_DATA__;
    if (!detail || !Array.isArray(detail.variants) || !detail.variants.length) return null;
    return detail.variants.map(function (item) {
      return {
        top: Array.isArray(item.top) ? item.top : [],
        bottom: item.bottom || ''
      };
    }).filter(function (item) {
      return item.top.length > 0;
    });
  }

  function applyCMSVariants(data) {
    var cmsVariants = getVariantsFromCMS(data);
    if (!cmsVariants || !cmsVariants.length) return;
    variants = cmsVariants;
    variantIndex = 0;
    slideIndex = 0;
    bindColorRadios('input[name="pd_color"]');
    bindColorRadios('input[name="pd_color_mobile"]');
    syncRadios();
    render();
  }

  function syncRadios() {
    var all = document.querySelectorAll('input[name="pd_color"], input[name="pd_color_mobile"]');
    all.forEach(function (radio) {
      radio.checked = Number(radio.value) === variantIndex;
    });
  }

  bindColorRadios('input[name="pd_color"]');
  bindColorRadios('input[name="pd_color_mobile"]');
  render();
  applyCMSVariants();

  document.addEventListener('colibri:content-ready', function (event) {
    applyCMSVariants(event.detail);
  });
})();
