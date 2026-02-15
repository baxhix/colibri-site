(function () {
  var panels = document.querySelectorAll('.panel');
  var navItems = document.querySelectorAll('.nav-item');
  var navSubItems = document.querySelectorAll('.nav-subitem');
  var navSections = document.querySelectorAll('.nav-section');
  var toast = document.getElementById('toast');
  var toggleSidebar = document.getElementById('toggleSidebar');
  var shell = document.querySelector('.admin-shell');
  var productTabs = document.querySelectorAll('.product-tab');
  var productPanels = document.querySelectorAll('.product-tab-panel');
  var binaryToggles = document.querySelectorAll('.binary-toggle');
  var dropzones = document.querySelectorAll('[data-dropzone]');

  var openNewProductFormBtn = document.getElementById('openNewProductForm');
  var closeProductFormBtn = document.getElementById('closeProductForm');
  var listView = document.getElementById('productsListView');
  var formView = document.getElementById('productFormView');
  var productForm = document.getElementById('productForm');
  var productsTableBody = document.getElementById('productsTableBody');
  var openFormRowButtons = document.querySelectorAll('[data-open-form]');
  var productCategorySelect = document.getElementById('productCategorySelect');
  var productCodeInput = document.getElementById('productCodeInput');
  var productNameInput = document.getElementById('productNameInput');
  var productSlugInput = document.getElementById('productSlugInput');
  var productLineInput = document.getElementById('productLineInput');
  var productDescriptionInput = document.getElementById('productDescriptionInput');
  var productImageInput = document.getElementById('productImageInput');
  var productVolumeInput = document.getElementById('productVolumeInput');
  var productFeaturesInput = document.getElementById('productFeaturesInput');
  var productTvInput = document.getElementById('productTvInput');
  var productOrderInput = document.getElementById('productOrderInput');
  var productVideoTitleInput = document.getElementById('productVideoTitleInput');
  var productYoutubeInput = document.getElementById('productYoutubeInput');
  var productVariantNameInput = document.getElementById('productVariantNameInput');
  var productWidthInput = document.getElementById('productWidthInput');
  var productHeightInput = document.getElementById('productHeightInput');
  var productDepthInput = document.getElementById('productDepthInput');
  var productWeightInput = document.getElementById('productWeightInput');
  var productSpecTvInput = document.getElementById('productSpecTvInput');
  var productAssemblyPdfInput = document.getElementById('productAssemblyPdfInput');
  var productExtraFileInput = document.getElementById('productExtraFileInput');
  var productFilesList = document.getElementById('productFilesList');
  var productReleaseToggle = document.getElementById('productReleaseToggle');
  var productShowVideoToggle = document.getElementById('productShowVideoToggle');
  var productStatusToggle = document.getElementById('productStatusToggle');
  var productFeaturedToggle = document.getElementById('productFeaturedToggle');

  var openHomeContentEditorBtn = document.getElementById('openHomeContentEditor');
  var closeHomeContentEditorBtn = document.getElementById('closeHomeContentEditor');
  var contentListView = document.getElementById('contentListView');
  var contentHomeView = document.getElementById('contentHomeView');
  var homeContentForm = document.getElementById('homeContentForm');
  var aboutContentForm = document.getElementById('aboutContentForm');
  var contactContentForm = document.getElementById('contactContentForm');
  var openHomeEditorRowButtons = document.querySelectorAll('[data-open-home-editor]');
  var contentTabs = document.querySelectorAll('.content-tab');
  var contentPanels = document.querySelectorAll('.content-tab-panel');
  var homeHeroTitleInput = document.getElementById('homeHeroTitleInput');
  var homeHeroSubtitleInput = document.getElementById('homeHeroSubtitleInput');
  var homeHeroCtaTextInput = document.getElementById('homeHeroCtaTextInput');
  var homeHeroCtaLinkInput = document.getElementById('homeHeroCtaLinkInput');
  var homeInspirationTitleInput = document.getElementById('homeInspirationTitleInput');
  var homeInspirationDescriptionInput = document.getElementById('homeInspirationDescriptionInput');
  var homeInspirationButtonTextInput = document.getElementById('homeInspirationButtonTextInput');
  var homeInspirationButtonLinkInput = document.getElementById('homeInspirationButtonLinkInput');
  var homePopularTitleInput = document.getElementById('homePopularTitleInput');
  var homePopularDescriptionInput = document.getElementById('homePopularDescriptionInput');
  var homePopularButtonTextInput = document.getElementById('homePopularButtonTextInput');
  var homePopularButtonLinkInput = document.getElementById('homePopularButtonLinkInput');
  var homeBlogTitleInput = document.getElementById('homeBlogTitleInput');
  var homeBlogDescriptionInput = document.getElementById('homeBlogDescriptionInput');
  var homeBlogButtonTextInput = document.getElementById('homeBlogButtonTextInput');
  var homeBlogButtonLinkInput = document.getElementById('homeBlogButtonLinkInput');
  var homeNewsletterTitleInput = document.getElementById('homeNewsletterTitleInput');
  var homeNewsletterDescriptionInput = document.getElementById('homeNewsletterDescriptionInput');
  var homeNewsletterButtonTextInput = document.getElementById('homeNewsletterButtonTextInput');
  var homeNewsletterPlaceholderInput = document.getElementById('homeNewsletterPlaceholderInput');
  var homeFooterCopyrightInput = document.getElementById('homeFooterCopyrightInput');
  var homeFooterAddressInput = document.getElementById('homeFooterAddressInput');
  var homeFooterEmailInput = document.getElementById('homeFooterEmailInput');
  var aboutHeroTitleInput = document.getElementById('aboutHeroTitleInput');
  var aboutHeroDescriptionInput = document.getElementById('aboutHeroDescriptionInput');
  var aboutHeroImageInput = document.getElementById('aboutHeroImageInput');
  var aboutFeaturedTitleInput = document.getElementById('aboutFeaturedTitleInput');
  var aboutFeaturedParagraph1Input = document.getElementById('aboutFeaturedParagraph1Input');
  var aboutFeaturedParagraph2Input = document.getElementById('aboutFeaturedParagraph2Input');
  var contactHeroTitleInput = document.getElementById('contactHeroTitleInput');
  var contactHeroDescriptionInput = document.getElementById('contactHeroDescriptionInput');
  var contactHeroImageInput = document.getElementById('contactHeroImageInput');
  var contactQuestionTitleInput = document.getElementById('contactQuestionTitleInput');
  var contactCommercialTitleInput = document.getElementById('contactCommercialTitleInput');
  var contactCommercialDescriptionInput = document.getElementById('contactCommercialDescriptionInput');
  var contactCommercialEmailInput = document.getElementById('contactCommercialEmailInput');
  var contactCommercialPhoneInput = document.getElementById('contactCommercialPhoneInput');
  var contactCareersTitleInput = document.getElementById('contactCareersTitleInput');
  var contactCareersDescriptionInput = document.getElementById('contactCareersDescriptionInput');
  var contactCareersEmailInput = document.getElementById('contactCareersEmailInput');
  var contactMapEmbedUrlInput = document.getElementById('contactMapEmbedUrlInput');

  var openNewBlogFormBtn = document.getElementById('openNewBlogForm');
  var closeBlogFormBtn = document.getElementById('closeBlogForm');
  var blogListView = document.getElementById('blogListView');
  var blogFormView = document.getElementById('blogFormView');
  var blogPostsTableBody = document.getElementById('blogPostsTableBody');
  var blogForm = document.getElementById('blogForm');
  var blogTitleInput = document.getElementById('blogTitleInput');
  var blogSlugInput = document.getElementById('blogSlugInput');
  var blogPublishedToggle = document.getElementById('blogPublishedToggle');
  var blogFeaturedToggle = document.getElementById('blogFeaturedToggle');
  var blogPublishDateInput = document.getElementById('blogPublishDateInput');
  var blogMetaDescription = document.getElementById('blogMetaDescription');
  var blogMetaDescriptionCount = document.getElementById('blogMetaDescriptionCount');
  var blogMetaTagsInput = document.getElementById('blogMetaTagsInput');
  var blogReadingMinutesInput = document.getElementById('blogReadingMinutesInput');
  var blogReadingSecondsInput = document.getElementById('blogReadingSecondsInput');
  var blogUpdateDateInput = document.getElementById('blogUpdateDateInput');
  var blogImageUrlInput = document.getElementById('blogImageUrlInput');
  var blogContentInput = document.getElementById('blogContentInput');
  var blogCategorySelect = document.getElementById('blogCategorySelect');

  var imageLightbox = document.getElementById('imageLightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var closeLightboxBtn = document.getElementById('closeLightbox');
  var breadcrumbHome = document.getElementById('breadcrumbHome');
  var breadcrumbSection = document.getElementById('breadcrumbSection');
  var breadcrumbSubsection = document.getElementById('breadcrumbSubsection');
  var breadcrumbSubSep = document.getElementById('breadcrumbSubSep');
  var currentPanelId = 'dashboard';

  var openNewProductCategoryFormBtn = document.getElementById('openNewProductCategoryForm');
  var closeProductCategoryFormBtn = document.getElementById('closeProductCategoryForm');
  var productCategoriesListView = document.getElementById('productCategoriesListView');
  var productCategoryFormView = document.getElementById('productCategoryFormView');
  var productCategoriesTableBody = document.getElementById('productCategoriesTableBody');
  var productCategoryNameInput = document.getElementById('productCategoryNameInput');
  var productCategorySlugInput = document.getElementById('productCategorySlugInput');
  var productCategoryDescriptionInput = document.getElementById('productCategoryDescriptionInput');
  var productCategoryStatusToggle = document.getElementById('productCategoryStatusToggle');

  var openNewBlogCategoryFormBtn = document.getElementById('openNewBlogCategoryForm');
  var closeBlogCategoryFormBtn = document.getElementById('closeBlogCategoryForm');
  var blogCategoriesListView = document.getElementById('blogCategoriesListView');
  var blogCategoryFormView = document.getElementById('blogCategoryFormView');
  var blogCategoriesTableBody = document.getElementById('blogCategoriesTableBody');
  var blogCategoryNameInput = document.getElementById('blogCategoryNameInput');
  var blogCategorySlugInput = document.getElementById('blogCategorySlugInput');
  var blogCategoryDescriptionInput = document.getElementById('blogCategoryDescriptionInput');
  var blogCategoryStatusToggle = document.getElementById('blogCategoryStatusToggle');
  var seoTagsForm = document.getElementById('seoTagsForm');
  var seoSiteTitleInput = document.getElementById('seoSiteTitleInput');
  var seoDefaultDescriptionInput = document.getElementById('seoDefaultDescriptionInput');
  var seoCanonicalBaseInput = document.getElementById('seoCanonicalBaseInput');
  var seoIndexToggle = document.getElementById('seoIndexToggle');
  var analyticsGaIdInput = document.getElementById('analyticsGaIdInput');
  var analyticsGtmIdInput = document.getElementById('analyticsGtmIdInput');
  var analyticsPixelIdInput = document.getElementById('analyticsPixelIdInput');
  var seoMetaVerificationInput = document.getElementById('seoMetaVerificationInput');
  var analyticsCustomHeadInput = document.getElementById('analyticsCustomHeadInput');
  var analyticsCustomBodyInput = document.getElementById('analyticsCustomBodyInput');

  var editingProductCategoryId = null;
  var editingBlogCategoryId = null;
  var editingBlogPostId = null;
  var editingProductId = null;

  var productCategories = [
    { id: 1, name: 'Sala de Estar', slug: 'sala-de-estar', description: '', status: true, linked: 186 },
    { id: 2, name: 'Complementos', slug: 'complementos', description: '', status: true, linked: 42 },
    { id: 3, name: 'Bancadas e Painéis', slug: 'bancadas-e-paineis', description: '', status: true, linked: 64 },
  ];

  var blogCategories = [
    { id: 1, name: 'Institucional', slug: 'institucional', description: '', status: true, linked: 9 },
    { id: 2, name: 'Mercado', slug: 'mercado', description: '', status: true, linked: 14 },
    { id: 3, name: 'Tendências', slug: 'tendencias', description: '', status: false, linked: 4 },
  ];

  var products = [
    {
      id: 106,
      code: '106',
      name: 'Home Theater Jurerê 1.8',
      slug: 'home-theater-jurere-1-8',
      category: 'sala-de-estar',
      line: 'Home Theater',
      release: true,
      description:
        'Com design contemporâneo e acabamento premium, o Home Theater Jurerê 1.8 combina funcionalidade e elegância para transformar a sala em um ambiente sofisticado e acolhedor.',
      image: 'https://picsum.photos/id/1043/1200/900',
      volume: '1',
      features: 'Portas deslizantes, nichos para eletrônicos',
      tv: 'até 75"',
      order: 1,
      videoTitle: '',
      youtube: '',
      showVideo: false,
      status: true,
      featured: true,
      dimensionVariantName: 'Freijó Off White',
      width: '1800',
      height: '1850',
      depth: '355',
      weight: '42,40',
      specTv: '75',
      assemblyPdf: '',
      extraFile: '',
    },
    {
      id: 107,
      code: '107',
      name: 'Bancada Fortaleza',
      slug: 'bancada-fortaleza',
      category: 'sala-de-estar',
      line: 'Bancada',
      release: false,
      description: 'Bancada de design clean para ambientes contemporâneos.',
      image: 'https://picsum.photos/id/1033/1200/900',
      volume: '1',
      features: 'Nicho central, pés de madeira',
      tv: 'até 65"',
      order: 2,
      videoTitle: '',
      youtube: '',
      showVideo: false,
      status: true,
      featured: true,
      dimensionVariantName: 'Freijó',
      width: '1800',
      height: '620',
      depth: '360',
      weight: '34,50',
      specTv: '65',
      assemblyPdf: '',
      extraFile: '',
    },
    {
      id: 108,
      code: '108',
      name: 'Home Suspenso Loa',
      slug: 'home-suspenso-loa',
      category: 'sala-de-estar',
      line: 'Home Suspenso',
      release: false,
      description: 'Home suspenso com acabamento sofisticado.',
      image: 'https://picsum.photos/id/1060/1200/900',
      volume: '1',
      features: 'Painel ripado, prateleira superior',
      tv: 'até 70"',
      order: 3,
      videoTitle: '',
      youtube: '',
      showVideo: false,
      status: false,
      featured: false,
      dimensionVariantName: 'Natura Off White',
      width: '1800',
      height: '1800',
      depth: '340',
      weight: '39,80',
      specTv: '70',
      assemblyPdf: '',
      extraFile: '',
    },
  ];

  var CMS_PRODUCT_CATEGORIES_KEY = 'colibri.cms.productCategories';
  var CMS_BLOG_CATEGORIES_KEY = 'colibri.cms.blogCategories';
  var CMS_BLOG_POSTS_KEY = 'colibri.cms.blogPosts';
  var CMS_BLOG_SITE_KEY = 'colibri.cms.blogSiteData';
  var CMS_RUNTIME_SITE_KEY = 'colibri.cms.siteRuntime';
  var CMS_PRODUCTS_KEY = 'colibri.cms.products';

  var blogPosts = [
    {
      id: 1001,
      title: 'Relatório de Transparência e Igualdade Salarial - 2º Semestre 2025',
      slug: 'relatorio-transparencia-2-semestre-2025',
      published: true,
      featured: true,
      category: 'institucional',
      publishDate: '2026-02-13',
      updateDate: '2026-02-13',
      metaTags: 'transparência, igualdade salarial, relatório',
      metaDescription: 'Relatório institucional com indicadores de transparência e igualdade salarial.',
      readingMinutes: 18,
      readingSeconds: 56,
      image: 'https://picsum.photos/id/1027/1200/900',
      content: 'Conteúdo do post institucional.',
    },
    {
      id: 1002,
      title: 'Calendário Moveleiro: feiras para lojistas em 2026',
      slug: 'calendario-moveleiro-feiras-2026',
      published: false,
      featured: false,
      category: 'mercado',
      publishDate: '2026-01-10',
      updateDate: '2026-01-10',
      metaTags: 'calendário, feiras, mercado moveleiro',
      metaDescription: 'Datas e eventos relevantes para lojistas de móveis em 2026.',
      readingMinutes: 10,
      readingSeconds: 20,
      image: 'https://picsum.photos/id/103/1200/900',
      content: 'Conteúdo do calendário do setor.',
    },
  ];

  var panelLabels = {
    dashboard: 'Dashboard',
    content: 'Conteúdo do site',
    'content-about': 'Conteúdo do site',
    'content-contact': 'Conteúdo do site',
    products: 'Produtos',
    'products-categories': 'Produtos',
    blog: 'Blog',
    'blog-categories': 'Blog',
    'seo-tags': 'SEO e Tags',
    users: 'Usuários',
  };

  function getDefaultSubsection(panelId) {
    if (panelId === 'content') {
      if (contentHomeView && contentHomeView.classList.contains('active')) {
        return 'Página inicial - ' + getActiveContentTabLabel();
      }
      return 'Página inicial';
    }
    if (panelId === 'content-about') {
      return 'Sobre';
    }
    if (panelId === 'content-contact') {
      return 'Fale Conosco';
    }

    if (panelId === 'products') {
      if (formView && formView.classList.contains('active')) {
        return 'Cadastro de produto';
      }
      return 'Lista de produtos';
    }

    if (panelId === 'products-categories') {
      if (productCategoryFormView && productCategoryFormView.classList.contains('active')) {
        return 'Categorias de produtos - Cadastro';
      }
      return 'Categorias de produtos';
    }

    if (panelId === 'blog') {
      if (blogFormView && blogFormView.classList.contains('active')) {
        return 'Cadastro de post';
      }
      return 'Lista de posts';
    }

    if (panelId === 'blog-categories') {
      if (blogCategoryFormView && blogCategoryFormView.classList.contains('active')) {
        return 'Categorias do blog - Cadastro';
      }
      return 'Categorias do blog';
    }
    if (panelId === 'seo-tags') {
      return 'Configurações de indexação e tags';
    }

    return 'Visão geral';
  }

  function updateBreadcrumb(panelId, subsectionLabel) {
    if (!breadcrumbSection || !breadcrumbSubsection || !breadcrumbSubSep) return;
    var sectionText = panelLabels[panelId] || 'Dashboard';
    var subText = subsectionLabel || getDefaultSubsection(panelId);

    breadcrumbSection.textContent = sectionText;
    breadcrumbSubsection.textContent = subText;

    var hasSubsection = Boolean(subText);
    breadcrumbSubSep.style.display = hasSubsection ? '' : 'none';
    breadcrumbSubsection.style.display = hasSubsection ? '' : 'none';
  }

  function showToast(message) {
    if (!toast) return;
    if (message) {
      toast.textContent = message;
    }
    toast.classList.add('show');
    window.setTimeout(function () {
      toast.classList.remove('show');
    }, 1800);
  }

  function matchesGroup(panelId, groupName) {
    return panelId === groupName || panelId.indexOf(groupName + '-') === 0;
  }

  function syncSidebarActive(panelId) {
    navItems.forEach(function (item) {
      var group = item.dataset.group;
      var isActive = group ? matchesGroup(panelId, group) : item.dataset.panel === panelId;
      item.classList.toggle('active', isActive);
    });

    navSubItems.forEach(function (item) {
      item.classList.toggle('active', item.dataset.panel === panelId);
    });

    navSections.forEach(function (section) {
      if (section.id === 'contentNavSection') {
        section.classList.toggle('open', matchesGroup(panelId, 'content'));
      }
      if (section.id === 'productsNavSection') {
        section.classList.toggle('open', matchesGroup(panelId, 'products'));
      }
      if (section.id === 'blogNavSection') {
        section.classList.toggle('open', matchesGroup(panelId, 'blog'));
      }
    });
  }

  function getActiveContentTabLabel() {
    var activeTab = document.querySelector('.content-tab.active');
    return activeTab ? activeTab.textContent.trim() : 'Hero';
  }

  function setActiveContentTab(targetPanel) {
    if (!targetPanel) return;

    contentTabs.forEach(function (tab) {
      tab.classList.toggle('active', tab.dataset.target === targetPanel);
    });

    contentPanels.forEach(function (panel) {
      panel.classList.toggle('active', panel.dataset.panel === targetPanel);
    });

    if (matchesGroup(currentPanelId, 'content') && contentHomeView && contentHomeView.classList.contains('active')) {
      updateBreadcrumb('content', 'Página inicial - ' + getActiveContentTabLabel());
    }
  }

  function showPanel(panelId) {
    currentPanelId = panelId;
    panels.forEach(function (panel) {
      panel.classList.toggle('active', panel.id === 'panel-' + panelId);
    });

    syncSidebarActive(panelId);
    updateBreadcrumb(panelId);
  }

  function setToggleState(toggle, isOn, onLabel, offLabel) {
    if (!toggle) return;
    toggle.dataset.state = isOn ? 'true' : 'false';
    toggle.classList.toggle('is-on', isOn);

    var textNode = toggle.querySelector('span');
    if (!textNode) return;
    textNode.textContent = isOn ? onLabel : offLabel;
  }

  function slugify(text) {
    return String(text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function parseJSONSafe(raw, fallback) {
    try {
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function mergeDeep(base, patch) {
    if (!patch || typeof patch !== 'object') return base;
    if (!base || typeof base !== 'object') return patch;

    var output = Array.isArray(base) ? base.slice() : Object.assign({}, base);

    Object.keys(patch).forEach(function (key) {
      var patchValue = patch[key];
      var baseValue = output[key];

      if (
        patchValue &&
        typeof patchValue === 'object' &&
        !Array.isArray(patchValue) &&
        baseValue &&
        typeof baseValue === 'object' &&
        !Array.isArray(baseValue)
      ) {
        output[key] = mergeDeep(baseValue, patchValue);
      } else {
        output[key] = patchValue;
      }
    });

    return output;
  }

  function readFileAsDataURL(file, onDone) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      onDone(reader.result || '');
    };
    reader.readAsDataURL(file);
  }

  function refreshImagePreview(input) {
    if (!input || typeof input.__updateImagePreview !== 'function') return;
    input.__updateImagePreview();
  }

  function refreshFilePreview(input) {
    if (!input || typeof input.__updateFileInfo !== 'function') return;
    input.__updateFileInfo();
    if (input === productAssemblyPdfInput || input === productExtraFileInput) {
      renderProductFilesList();
    }
  }

  function bindImageUploaders() {
    var imageInputs = document.querySelectorAll('input[data-image-upload="true"]');

    imageInputs.forEach(function (input) {
      if (input.dataset.uploaderReady === 'true') return;
      input.dataset.uploaderReady = 'true';

      var tools = document.createElement('div');
      tools.className = 'image-upload-tools';

      var pickBtn = document.createElement('button');
      pickBtn.type = 'button';
      pickBtn.className = 'row-btn';
      pickBtn.textContent = 'Selecionar imagem';

      var clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'row-btn';
      clearBtn.textContent = 'Limpar';

      var fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.className = 'image-upload-hidden';

      var preview = document.createElement('img');
      preview.className = 'image-upload-preview';
      preview.alt = 'Preview da imagem';
      preview.loading = 'lazy';

      tools.appendChild(pickBtn);
      tools.appendChild(clearBtn);
      tools.appendChild(fileInput);
      tools.appendChild(preview);

      input.insertAdjacentElement('afterend', tools);

      function applyDataURL(value) {
        input.value = value || '';
        refreshImagePreview(input);
      }

      input.__updateImagePreview = function () {
        var value = String(input.value || '').trim();
        var isImage = /^data:image\//.test(value) || /^https?:\/\//.test(value);
        if (!isImage || !value) {
          preview.style.display = 'none';
          preview.removeAttribute('src');
          return;
        }
        preview.src = value;
        preview.style.display = 'block';
      };

      pickBtn.addEventListener('click', function () {
        fileInput.click();
      });

      clearBtn.addEventListener('click', function () {
        input.value = '';
        fileInput.value = '';
        refreshImagePreview(input);
      });

      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        if (String(file.type || '').indexOf('image/') !== 0) return;
        readFileAsDataURL(file, applyDataURL);
      });

      input.addEventListener('input', function () {
        refreshImagePreview(input);
      });

      var targetId = input.id || '';
      if (targetId) {
        var dropzone = document.querySelector('.dropzone[data-upload-target="' + targetId + '"]');
        if (dropzone) {
          var selectButton = dropzone.querySelector('.dropzone-actions button');
          if (selectButton) {
            selectButton.addEventListener('click', function () {
              fileInput.click();
            });
          }

          ['dragenter', 'dragover'].forEach(function (eventName) {
            dropzone.addEventListener(eventName, function (event) {
              event.preventDefault();
              dropzone.classList.add('drag-over');
            });
          });

          ['dragleave', 'drop'].forEach(function (eventName) {
            dropzone.addEventListener(eventName, function (event) {
              event.preventDefault();
              dropzone.classList.remove('drag-over');
            });
          });

          dropzone.addEventListener('drop', function (event) {
            var files = event.dataTransfer ? event.dataTransfer.files : null;
            var file = files && files[0] ? files[0] : null;
            if (!file) return;
            if (String(file.type || '').indexOf('image/') !== 0) return;
            readFileAsDataURL(file, applyDataURL);
          });
        }
      }

      refreshImagePreview(input);
    });
  }

  function bindFileUploaders() {
    var fileInputs = document.querySelectorAll('input[data-file-upload="true"]');

    fileInputs.forEach(function (input) {
      if (input.dataset.fileUploaderReady === 'true') return;
      input.dataset.fileUploaderReady = 'true';

      var tools = document.createElement('div');
      tools.className = 'file-upload-tools';

      var pickBtn = document.createElement('button');
      pickBtn.type = 'button';
      pickBtn.className = 'row-btn';
      pickBtn.textContent = 'Selecionar arquivo';

      var clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'row-btn';
      clearBtn.textContent = 'Limpar';

      var info = document.createElement('span');
      info.className = 'file-upload-info';
      info.textContent = 'Nenhum arquivo selecionado';

      var browserInput = document.createElement('input');
      browserInput.type = 'file';
      browserInput.accept = input.dataset.fileAccept || '';
      browserInput.className = 'file-upload-hidden';

      tools.appendChild(pickBtn);
      tools.appendChild(clearBtn);
      tools.appendChild(info);
      tools.appendChild(browserInput);
      input.insertAdjacentElement('afterend', tools);

      input.__updateFileInfo = function () {
        var value = String(input.value || '').trim();
        if (!value) {
          info.textContent = 'Nenhum arquivo selecionado';
          return;
        }
        if (/^data:/.test(value)) {
          info.textContent = input.dataset.lastFileName || 'Arquivo carregado';
          return;
        }
        var chunks = value.split('/');
        info.textContent = chunks[chunks.length - 1] || value;
      };

      pickBtn.addEventListener('click', function () {
        browserInput.click();
      });

      clearBtn.addEventListener('click', function () {
        input.value = '';
        input.dataset.lastFileName = '';
        browserInput.value = '';
        refreshFilePreview(input);
      });

      browserInput.addEventListener('change', function () {
        var file = browserInput.files && browserInput.files[0];
        if (!file) return;
        input.dataset.lastFileName = file.name || '';
        readFileAsDataURL(file, function (value) {
          input.value = value || '';
          refreshFilePreview(input);
        });
      });

      input.addEventListener('input', function () {
        refreshFilePreview(input);
      });

      refreshFilePreview(input);
    });
  }

  function loadPersistedData() {
    if (!window.localStorage) return;

    var persistedProductCategories = parseJSONSafe(window.localStorage.getItem(CMS_PRODUCT_CATEGORIES_KEY), null);
    if (Array.isArray(persistedProductCategories) && persistedProductCategories.length) {
      productCategories = persistedProductCategories;
    }

    var persistedBlogCategories = parseJSONSafe(window.localStorage.getItem(CMS_BLOG_CATEGORIES_KEY), null);
    if (Array.isArray(persistedBlogCategories) && persistedBlogCategories.length) {
      blogCategories = persistedBlogCategories;
    }

    var persistedBlogPosts = parseJSONSafe(window.localStorage.getItem(CMS_BLOG_POSTS_KEY), null);
    if (Array.isArray(persistedBlogPosts) && persistedBlogPosts.length) {
      blogPosts = persistedBlogPosts;
    }

    var persistedProducts = parseJSONSafe(window.localStorage.getItem(CMS_PRODUCTS_KEY), null);
    if (Array.isArray(persistedProducts) && persistedProducts.length) {
      products = persistedProducts;
    }
  }

  function persistData() {
    if (!window.localStorage) return;
    window.localStorage.setItem(CMS_PRODUCT_CATEGORIES_KEY, JSON.stringify(productCategories));
    window.localStorage.setItem(CMS_BLOG_CATEGORIES_KEY, JSON.stringify(blogCategories));
    window.localStorage.setItem(CMS_BLOG_POSTS_KEY, JSON.stringify(blogPosts));
    window.localStorage.setItem(CMS_PRODUCTS_KEY, JSON.stringify(products));
  }

  function loadRuntimeSite() {
    if (!window.localStorage) return {};
    return parseJSONSafe(window.localStorage.getItem(CMS_RUNTIME_SITE_KEY), {}) || {};
  }

  function persistRuntimeSite(runtimeSite) {
    if (!window.localStorage) return;
    window.localStorage.setItem(CMS_RUNTIME_SITE_KEY, JSON.stringify(runtimeSite || {}));
  }

  function collectHomeRuntimeContent() {
    var current = loadRuntimeSite();
    var home = current.home || {};
    var footer = current.footer || {};

    home.heroTitle = homeHeroTitleInput ? homeHeroTitleInput.value : home.heroTitle;
    home.heroSubtitle = homeHeroSubtitleInput ? homeHeroSubtitleInput.value : home.heroSubtitle;
    home.heroCtaText = homeHeroCtaTextInput ? homeHeroCtaTextInput.value : home.heroCtaText;
    home.heroCtaLink = homeHeroCtaLinkInput ? homeHeroCtaLinkInput.value : home.heroCtaLink;

    home.inspirationTitle = homeInspirationTitleInput ? homeInspirationTitleInput.value : home.inspirationTitle;
    home.inspirationDescription = homeInspirationDescriptionInput ? homeInspirationDescriptionInput.value : home.inspirationDescription;
    home.inspirationButtonText = homeInspirationButtonTextInput ? homeInspirationButtonTextInput.value : home.inspirationButtonText;
    home.inspirationButtonLink = homeInspirationButtonLinkInput ? homeInspirationButtonLinkInput.value : home.inspirationButtonLink;

    home.popularTitle = homePopularTitleInput ? homePopularTitleInput.value : home.popularTitle;
    home.popularDescription = homePopularDescriptionInput ? homePopularDescriptionInput.value : home.popularDescription;
    home.popularButtonText = homePopularButtonTextInput ? homePopularButtonTextInput.value : home.popularButtonText;
    home.popularButtonLink = homePopularButtonLinkInput ? homePopularButtonLinkInput.value : home.popularButtonLink;

    home.blogTitle = homeBlogTitleInput ? homeBlogTitleInput.value : home.blogTitle;
    home.blogDescription = homeBlogDescriptionInput ? homeBlogDescriptionInput.value : home.blogDescription;
    home.blogButtonText = homeBlogButtonTextInput ? homeBlogButtonTextInput.value : home.blogButtonText;
    home.blogButtonLink = homeBlogButtonLinkInput ? homeBlogButtonLinkInput.value : home.blogButtonLink;

    home.newsletterTitle = homeNewsletterTitleInput ? homeNewsletterTitleInput.value : home.newsletterTitle;
    home.newsletterDescription = homeNewsletterDescriptionInput ? homeNewsletterDescriptionInput.value : home.newsletterDescription;
    home.newsletterButtonText = homeNewsletterButtonTextInput ? homeNewsletterButtonTextInput.value : home.newsletterButtonText;
    home.newsletterPlaceholder = homeNewsletterPlaceholderInput ? homeNewsletterPlaceholderInput.value : home.newsletterPlaceholder;

    var footerAddress = homeFooterAddressInput ? homeFooterAddressInput.value : '';
    var footerEmail = homeFooterEmailInput ? homeFooterEmailInput.value : '';
    var addressLines = [];
    if (footerAddress) {
      footerAddress
        .split('\n')
        .map(function (line) {
          return line.trim();
        })
        .filter(Boolean)
        .forEach(function (line) {
          addressLines.push(line);
        });
    }
    if (footerEmail) {
      addressLines.push(footerEmail.trim());
    }

    footer.copyright = homeFooterCopyrightInput ? homeFooterCopyrightInput.value : footer.copyright;
    if (addressLines.length) {
      footer.addressLines = addressLines;
    }

    return {
      home: home,
      footer: footer,
    };
  }

  function hydrateHomeRuntimeForm() {
    var runtime = loadRuntimeSite();
    var home = runtime.home || {};
    var footer = runtime.footer || {};

    if (homeHeroTitleInput && home.heroTitle) homeHeroTitleInput.value = home.heroTitle;
    if (homeHeroSubtitleInput && home.heroSubtitle) homeHeroSubtitleInput.value = home.heroSubtitle;
    if (homeHeroCtaTextInput && home.heroCtaText) homeHeroCtaTextInput.value = home.heroCtaText;
    if (homeHeroCtaLinkInput && home.heroCtaLink) homeHeroCtaLinkInput.value = home.heroCtaLink;

    if (homeInspirationTitleInput && home.inspirationTitle) homeInspirationTitleInput.value = home.inspirationTitle;
    if (homeInspirationDescriptionInput && home.inspirationDescription) homeInspirationDescriptionInput.value = home.inspirationDescription;
    if (homeInspirationButtonTextInput && home.inspirationButtonText) homeInspirationButtonTextInput.value = home.inspirationButtonText;
    if (homeInspirationButtonLinkInput && home.inspirationButtonLink) homeInspirationButtonLinkInput.value = home.inspirationButtonLink;

    if (homePopularTitleInput && home.popularTitle) homePopularTitleInput.value = home.popularTitle;
    if (homePopularDescriptionInput && home.popularDescription) homePopularDescriptionInput.value = home.popularDescription;
    if (homePopularButtonTextInput && home.popularButtonText) homePopularButtonTextInput.value = home.popularButtonText;
    if (homePopularButtonLinkInput && home.popularButtonLink) homePopularButtonLinkInput.value = home.popularButtonLink;

    if (homeBlogTitleInput && home.blogTitle) homeBlogTitleInput.value = home.blogTitle;
    if (homeBlogDescriptionInput && home.blogDescription) homeBlogDescriptionInput.value = home.blogDescription;
    if (homeBlogButtonTextInput && home.blogButtonText) homeBlogButtonTextInput.value = home.blogButtonText;
    if (homeBlogButtonLinkInput && home.blogButtonLink) homeBlogButtonLinkInput.value = home.blogButtonLink;

    if (homeNewsletterTitleInput && home.newsletterTitle) homeNewsletterTitleInput.value = home.newsletterTitle;
    if (homeNewsletterDescriptionInput && home.newsletterDescription) homeNewsletterDescriptionInput.value = home.newsletterDescription;
    if (homeNewsletterButtonTextInput && home.newsletterButtonText) homeNewsletterButtonTextInput.value = home.newsletterButtonText;
    if (homeNewsletterPlaceholderInput && home.newsletterPlaceholder) homeNewsletterPlaceholderInput.value = home.newsletterPlaceholder;

    if (homeFooterCopyrightInput && footer.copyright) homeFooterCopyrightInput.value = footer.copyright;
    if (homeFooterAddressInput && Array.isArray(footer.addressLines)) {
      var withoutEmail = footer.addressLines.filter(function (line) {
        return String(line).indexOf('@') === -1;
      });
      homeFooterAddressInput.value = withoutEmail.join('\n');
    }
    if (homeFooterEmailInput && Array.isArray(footer.addressLines)) {
      var maybeEmail = footer.addressLines.find(function (line) {
        return String(line).indexOf('@') !== -1;
      });
      if (maybeEmail) homeFooterEmailInput.value = maybeEmail;
    }
  }

  function collectAboutRuntimeContent() {
    var about = {};
    about.heroTitle = aboutHeroTitleInput ? aboutHeroTitleInput.value : '';
    about.heroDescription = aboutHeroDescriptionInput ? aboutHeroDescriptionInput.value : '';
    about.heroImage = aboutHeroImageInput ? aboutHeroImageInput.value : '';
    about.featuredTitle = aboutFeaturedTitleInput ? aboutFeaturedTitleInput.value : '';
    about.featuredParagraph1 = aboutFeaturedParagraph1Input ? aboutFeaturedParagraph1Input.value : '';
    about.featuredParagraph2 = aboutFeaturedParagraph2Input ? aboutFeaturedParagraph2Input.value : '';
    return { about: about };
  }

  function hydrateAboutRuntimeForm() {
    var runtime = loadRuntimeSite();
    var about = runtime.about || {};
    if (aboutHeroTitleInput && about.heroTitle) aboutHeroTitleInput.value = about.heroTitle;
    if (aboutHeroDescriptionInput && about.heroDescription) aboutHeroDescriptionInput.value = about.heroDescription;
    if (aboutHeroImageInput && about.heroImage) aboutHeroImageInput.value = about.heroImage;
    if (aboutFeaturedTitleInput && about.featuredTitle) aboutFeaturedTitleInput.value = about.featuredTitle;
    if (aboutFeaturedParagraph1Input && about.featuredParagraph1) aboutFeaturedParagraph1Input.value = about.featuredParagraph1;
    if (aboutFeaturedParagraph2Input && about.featuredParagraph2) aboutFeaturedParagraph2Input.value = about.featuredParagraph2;
    refreshImagePreview(aboutHeroImageInput);
  }

  function collectContactRuntimeContent() {
    var contact = {};
    contact.heroTitle = contactHeroTitleInput ? contactHeroTitleInput.value : '';
    contact.heroDescription = contactHeroDescriptionInput ? contactHeroDescriptionInput.value : '';
    contact.heroImage = contactHeroImageInput ? contactHeroImageInput.value : '';
    contact.questionTitle = contactQuestionTitleInput ? contactQuestionTitleInput.value : '';
    contact.commercialTitle = contactCommercialTitleInput ? contactCommercialTitleInput.value : '';
    contact.commercialDescription = contactCommercialDescriptionInput ? contactCommercialDescriptionInput.value : '';
    contact.commercialEmail = contactCommercialEmailInput ? contactCommercialEmailInput.value : '';
    contact.commercialPhone = contactCommercialPhoneInput ? contactCommercialPhoneInput.value : '';
    contact.careersTitle = contactCareersTitleInput ? contactCareersTitleInput.value : '';
    contact.careersDescription = contactCareersDescriptionInput ? contactCareersDescriptionInput.value : '';
    contact.careersEmail = contactCareersEmailInput ? contactCareersEmailInput.value : '';
    contact.mapEmbedUrl = contactMapEmbedUrlInput ? contactMapEmbedUrlInput.value : '';
    return { contact: contact };
  }

  function collectSeoRuntimeContent() {
    return {
      seo: {
        siteTitle: seoSiteTitleInput ? seoSiteTitleInput.value.trim() : '',
        defaultDescription: seoDefaultDescriptionInput ? seoDefaultDescriptionInput.value.trim() : '',
        canonicalBase: seoCanonicalBaseInput ? seoCanonicalBaseInput.value.trim() : '',
        indexable: seoIndexToggle ? seoIndexToggle.dataset.state === 'true' : true,
        metaVerification: seoMetaVerificationInput ? seoMetaVerificationInput.value.trim() : '',
      },
      analytics: {
        gaMeasurementId: analyticsGaIdInput ? analyticsGaIdInput.value.trim() : '',
        gtmId: analyticsGtmIdInput ? analyticsGtmIdInput.value.trim() : '',
        facebookPixelId: analyticsPixelIdInput ? analyticsPixelIdInput.value.trim() : '',
        customHeadScript: analyticsCustomHeadInput ? analyticsCustomHeadInput.value : '',
        customBodyScript: analyticsCustomBodyInput ? analyticsCustomBodyInput.value : '',
      },
    };
  }

  function hydrateSeoRuntimeForm() {
    var runtime = loadRuntimeSite();
    var seo = runtime.seo || {};
    var analytics = runtime.analytics || {};

    if (seoSiteTitleInput && seo.siteTitle) seoSiteTitleInput.value = seo.siteTitle;
    if (seoDefaultDescriptionInput && seo.defaultDescription) seoDefaultDescriptionInput.value = seo.defaultDescription;
    if (seoCanonicalBaseInput && seo.canonicalBase) seoCanonicalBaseInput.value = seo.canonicalBase;
    if (seoMetaVerificationInput && seo.metaVerification) seoMetaVerificationInput.value = seo.metaVerification;

    setToggleState(seoIndexToggle, seo.indexable !== false, 'Sim', 'Não');

    if (analyticsGaIdInput && analytics.gaMeasurementId) analyticsGaIdInput.value = analytics.gaMeasurementId;
    if (analyticsGtmIdInput && analytics.gtmId) analyticsGtmIdInput.value = analytics.gtmId;
    if (analyticsPixelIdInput && analytics.facebookPixelId) analyticsPixelIdInput.value = analytics.facebookPixelId;
    if (analyticsCustomHeadInput && analytics.customHeadScript) analyticsCustomHeadInput.value = analytics.customHeadScript;
    if (analyticsCustomBodyInput && analytics.customBodyScript) analyticsCustomBodyInput.value = analytics.customBodyScript;
  }

  function hydrateContactRuntimeForm() {
    var runtime = loadRuntimeSite();
    var contact = runtime.contact || {};
    if (contactHeroTitleInput && contact.heroTitle) contactHeroTitleInput.value = contact.heroTitle;
    if (contactHeroDescriptionInput && contact.heroDescription) contactHeroDescriptionInput.value = contact.heroDescription;
    if (contactHeroImageInput && contact.heroImage) contactHeroImageInput.value = contact.heroImage;
    if (contactQuestionTitleInput && contact.questionTitle) contactQuestionTitleInput.value = contact.questionTitle;
    if (contactCommercialTitleInput && contact.commercialTitle) contactCommercialTitleInput.value = contact.commercialTitle;
    if (contactCommercialDescriptionInput && contact.commercialDescription) contactCommercialDescriptionInput.value = contact.commercialDescription;
    if (contactCommercialEmailInput && contact.commercialEmail) contactCommercialEmailInput.value = contact.commercialEmail;
    if (contactCommercialPhoneInput && contact.commercialPhone) contactCommercialPhoneInput.value = contact.commercialPhone;
    if (contactCareersTitleInput && contact.careersTitle) contactCareersTitleInput.value = contact.careersTitle;
    if (contactCareersDescriptionInput && contact.careersDescription) contactCareersDescriptionInput.value = contact.careersDescription;
    if (contactCareersEmailInput && contact.careersEmail) contactCareersEmailInput.value = contact.careersEmail;
    if (contactMapEmbedUrlInput && contact.mapEmbedUrl) contactMapEmbedUrlInput.value = contact.mapEmbedUrl;
    refreshImagePreview(contactHeroImageInput);
  }

  function formatDateBR(isoDate) {
    if (!isoDate) return '--';
    var parts = String(isoDate).split('-');
    if (parts.length !== 3) return isoDate;
    return parts[2] + '/' + parts[1] + '/' + parts[0];
  }

  function getCategoryNameBySlug(categories, slug) {
    var category = categories.find(function (item) {
      return item.slug === slug;
    });
    return category ? category.name : '--';
  }

  function getFileLabelFromInput(input) {
    if (!input) return '';
    var value = String(input.value || '').trim();
    if (!value) return '';
    if (/^data:/.test(value)) {
      return input.dataset.lastFileName || 'arquivo-carregado';
    }
    var parts = value.split('/');
    return parts[parts.length - 1] || value;
  }

  function renderProductFilesList() {
    if (!productFilesList) return;

    var items = [
      {
        key: 'assembly',
        title: 'Esquema de montagem',
        input: productAssemblyPdfInput,
      },
      {
        key: 'extra',
        title: 'Outros arquivos',
        input: productExtraFileInput,
      },
    ]
      .map(function (item) {
        return {
          key: item.key,
          title: item.title,
          name: getFileLabelFromInput(item.input),
        };
      })
      .filter(function (item) {
        return Boolean(item.name);
      });

    if (!items.length) {
      productFilesList.innerHTML = '<li><div><strong>Nenhum arquivo anexado.</strong><span>Adicione arquivos na aba acima.</span></div></li>';
      return;
    }

    productFilesList.innerHTML = items
      .map(function (item) {
        return (
          '<li>' +
          '<div><strong>' + item.name + '</strong><span>' + item.title + '</span></div>' +
          '<button class="row-btn" type="button" data-product-file-remove="' + item.key + '">Remover</button>' +
          '</li>'
        );
      })
      .join('');
  }

  function createDefaultProduct() {
    return {
      id: null,
      code: '',
      name: '',
      slug: '',
      category: '',
      line: '',
      release: false,
      description: '',
      image: '',
      volume: '',
      features: '',
      tv: '',
      order: products.length + 1,
      videoTitle: '',
      youtube: '',
      showVideo: false,
      status: true,
      featured: false,
      dimensionVariantName: 'Padrão',
      width: '',
      height: '',
      depth: '',
      weight: '',
      specTv: '',
      assemblyPdf: '',
      extraFile: '',
    };
  }

  function fillProductForm(product) {
    if (!product) return;

    if (productCodeInput) productCodeInput.value = product.code || '';
    if (productNameInput) productNameInput.value = product.name || '';
    if (productSlugInput) {
      productSlugInput.value = product.slug || '';
      productSlugInput.dataset.dirty = product.slug ? 'true' : '';
    }
    if (productCategorySelect) productCategorySelect.value = product.category || '';
    if (productLineInput) productLineInput.value = product.line || '';
    if (productDescriptionInput) productDescriptionInput.value = product.description || '';
    if (productImageInput) productImageInput.value = product.image || '';
    if (productVolumeInput) productVolumeInput.value = product.volume || '';
    if (productFeaturesInput) productFeaturesInput.value = product.features || '';
    if (productTvInput) productTvInput.value = product.tv || '';
    if (productOrderInput) productOrderInput.value = product.order != null ? product.order : '';
    if (productVideoTitleInput) productVideoTitleInput.value = product.videoTitle || '';
    if (productYoutubeInput) productYoutubeInput.value = product.youtube || '';
    if (productVariantNameInput) productVariantNameInput.value = product.dimensionVariantName || '';
    if (productWidthInput) productWidthInput.value = product.width || '';
    if (productHeightInput) productHeightInput.value = product.height || '';
    if (productDepthInput) productDepthInput.value = product.depth || '';
    if (productWeightInput) productWeightInput.value = product.weight || '';
    if (productSpecTvInput) productSpecTvInput.value = product.specTv || '';
    if (productAssemblyPdfInput) productAssemblyPdfInput.value = product.assemblyPdf || '';
    if (productExtraFileInput) productExtraFileInput.value = product.extraFile || '';

    setToggleState(productReleaseToggle, !!product.release, 'Sim', 'Não');
    setToggleState(productShowVideoToggle, !!product.showVideo, 'Sim', 'Não');
    setToggleState(productStatusToggle, !!product.status, 'Ativo', 'Inativo');
    setToggleState(productFeaturedToggle, !!product.featured, 'Sim', 'Não');
    refreshImagePreview(productImageInput);
    refreshFilePreview(productAssemblyPdfInput);
    refreshFilePreview(productExtraFileInput);
    renderProductFilesList();
  }

  function collectProductFormData() {
    return {
      id: editingProductId || Date.now(),
      code: productCodeInput ? productCodeInput.value.trim() : '',
      name: productNameInput ? productNameInput.value.trim() : '',
      slug: productSlugInput ? slugify(productSlugInput.value.trim()) : '',
      category: productCategorySelect ? productCategorySelect.value : '',
      line: productLineInput ? productLineInput.value.trim() : '',
      release: productReleaseToggle ? productReleaseToggle.dataset.state === 'true' : false,
      description: productDescriptionInput ? productDescriptionInput.value.trim() : '',
      image: productImageInput ? productImageInput.value.trim() : '',
      volume: productVolumeInput ? productVolumeInput.value.trim() : '',
      features: productFeaturesInput ? productFeaturesInput.value.trim() : '',
      tv: productTvInput ? productTvInput.value.trim() : '',
      order: productOrderInput ? Number(productOrderInput.value || 0) : 0,
      videoTitle: productVideoTitleInput ? productVideoTitleInput.value.trim() : '',
      youtube: productYoutubeInput ? productYoutubeInput.value.trim() : '',
      showVideo: productShowVideoToggle ? productShowVideoToggle.dataset.state === 'true' : false,
      status: productStatusToggle ? productStatusToggle.dataset.state === 'true' : false,
      featured: productFeaturedToggle ? productFeaturedToggle.dataset.state === 'true' : false,
      dimensionVariantName: productVariantNameInput ? productVariantNameInput.value.trim() : '',
      width: productWidthInput ? productWidthInput.value.trim() : '',
      height: productHeightInput ? productHeightInput.value.trim() : '',
      depth: productDepthInput ? productDepthInput.value.trim() : '',
      weight: productWeightInput ? productWeightInput.value.trim() : '',
      specTv: productSpecTvInput ? productSpecTvInput.value.trim() : '',
      assemblyPdf: productAssemblyPdfInput ? productAssemblyPdfInput.value.trim() : '',
      extraFile: productExtraFileInput ? productExtraFileInput.value.trim() : '',
    };
  }

  function openProductFormById(productId) {
    var product = createDefaultProduct();
    if (productId != null) {
      var found = products.find(function (item) {
        return item.id === productId;
      });
      if (found) product = found;
    }
    editingProductId = product && product.id ? product.id : null;
    fillProductForm(product);
    productTabs.forEach(function (tab) {
      tab.classList.toggle('active', tab.dataset.target === 'dados');
    });
    productPanels.forEach(function (panel) {
      panel.classList.toggle('active', panel.dataset.panel === 'dados');
    });
    openProductForm();
  }

  function buildProductsRuntimePayload() {
    var categoryBySlug = {};
    productCategories.forEach(function (item) {
      categoryBySlug[item.slug] = item.name;
    });

    var activeProducts = products
      .filter(function (item) {
        return item.status !== false;
      })
      .slice()
      .sort(function (a, b) {
        return Number(a.order || 0) - Number(b.order || 0);
      });

    return {
      catalog: {
        products: activeProducts.map(function (item) {
          return {
            title: item.name || '',
            image: item.image || '',
            href: 'produto.html?slug=' + encodeURIComponent(item.slug || ''),
          };
        }),
      },
      products: {
        items: activeProducts.map(function (item) {
          return {
            id: item.id,
            slug: item.slug,
            code: item.code,
            name: item.name,
            category: categoryBySlug[item.category] || '--',
            categorySlug: item.category || '',
            description: item.description || '',
            image: item.image || '',
            tv: item.tv || '',
            release: !!item.release,
            videoTitle: item.videoTitle || '',
            youtube: item.youtube || '',
            showVideo: !!item.showVideo,
            assemblyPdf: item.assemblyPdf || '',
            extraFile: item.extraFile || '',
            specs: [
              { label: 'largura', value: item.width || '', unit: 'mm' },
              { label: 'altura', value: item.height || '', unit: 'mm' },
              { label: 'profundidade', value: item.depth || '', unit: 'mm' },
              { label: 'peso', value: item.weight || '', unit: 'kg' },
              { label: 'TV', value: item.specTv ? 'até ' + item.specTv : item.tv || '', unit: '"' },
            ],
            variants: [
              {
                name: item.dimensionVariantName || 'Padrão',
                color: '#caa17d',
                top: [item.image || 'https://picsum.photos/id/1043/1300/900'],
                bottom: item.image || 'https://picsum.photos/id/1043/1300/900',
              },
            ],
          };
        }),
      },
    };
  }

  function persistSiteProductsData() {
    var runtime = loadRuntimeSite();
    var payload = buildProductsRuntimePayload();
    persistRuntimeSite(mergeDeep(runtime, payload));
  }

  function renderProductsTable() {
    if (!productsTableBody) return;

    if (!products.length) {
      productsTableBody.innerHTML = '<tr><td colspan="5">Nenhum produto cadastrado.</td></tr>';
      return;
    }

    productsTableBody.innerHTML = products
      .slice()
      .sort(function (a, b) {
        return Number(a.order || 0) - Number(b.order || 0);
      })
      .map(function (item) {
        var statusClass = item.status ? 'published' : 'draft';
        var statusLabel = item.status ? 'Ativo' : 'Inativo';
        var fullImage = item.image || 'https://picsum.photos/id/1043/1400/1000';
        var thumbImage = item.image || 'https://picsum.photos/id/1043/120/90';
        return (
          '<tr>' +
          '<td><img class="thumb" src="' + thumbImage + '" data-full-image="' + fullImage + '" alt="' + (item.name || 'Produto') + '" /></td>' +
          '<td>' + (item.name || '--') + '</td>' +
          '<td>' + getCategoryNameBySlug(productCategories, item.category) + '</td>' +
          '<td><span class="tag ' + statusClass + '">' + statusLabel + '</span></td>' +
          '<td class="actions-cell">' +
          '<a class="icon-action" href="produto.html?slug=' + encodeURIComponent(item.slug || '') + '" target="_blank" rel="noopener noreferrer" title="Ver produto" aria-label="Ver produto em nova aba">↗</a>' +
          '<button class="icon-action" type="button" data-product-action="edit" data-id="' + item.id + '" title="Editar" aria-label="Editar">✎</button>' +
          '<button class="icon-action" type="button" data-product-action="duplicate" data-id="' + item.id + '" title="Duplicar" aria-label="Duplicar">⧉</button>' +
          '<button class="icon-action" type="button" data-product-action="delete" data-id="' + item.id + '" title="Excluir" aria-label="Excluir">X</button>' +
          '</td>' +
          '</tr>'
        );
      })
      .join('');
  }

  function renderCategorySelect(selectEl, categories, placeholder) {
    if (!selectEl) return;
    var html = '<option value="">' + placeholder + '</option>';
    categories.forEach(function (category) {
      if (!category.status) return;
      html += '<option value="' + category.slug + '">' + category.name + '</option>';
    });
    selectEl.innerHTML = html;
  }

  function renderProductCategoriesTable() {
    if (!productCategoriesTableBody) return;
    productCategoriesTableBody.innerHTML = productCategories
      .map(function (item) {
        return (
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.slug + '</td>' +
          '<td>' + item.linked + '</td>' +
          '<td><span class="tag ' + (item.status ? 'published">Ativa' : 'draft">Inativa') + '</span></td>' +
          '<td class="actions-cell">' +
          '<button class="icon-action" type="button" data-action="edit" data-id="' + item.id + '" title="Editar" aria-label="Editar">✎</button>' +
          '<button class="icon-action" type="button" data-action="delete" data-id="' + item.id + '" title="Excluir" aria-label="Excluir">X</button>' +
          '</td>' +
          '</tr>'
        );
      })
      .join('');
  }

  function renderBlogCategoriesTable() {
    if (!blogCategoriesTableBody) return;
    blogCategoriesTableBody.innerHTML = blogCategories
      .map(function (item) {
        return (
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.slug + '</td>' +
          '<td>' + item.linked + '</td>' +
          '<td><span class="tag ' + (item.status ? 'published">Ativa' : 'draft">Inativa') + '</span></td>' +
          '<td class="actions-cell">' +
          '<button class="icon-action" type="button" data-action="edit" data-id="' + item.id + '" title="Editar" aria-label="Editar">✎</button>' +
          '<button class="icon-action" type="button" data-action="delete" data-id="' + item.id + '" title="Excluir" aria-label="Excluir">X</button>' +
          '</td>' +
          '</tr>'
        );
      })
      .join('');
  }

  function syncCategoryLinks() {
    var blogCountMap = {};
    var productCountMap = {};

    blogPosts.forEach(function (post) {
      if (!post.category) return;
      blogCountMap[post.category] = (blogCountMap[post.category] || 0) + 1;
    });

    products.forEach(function (product) {
      if (!product.category) return;
      productCountMap[product.category] = (productCountMap[product.category] || 0) + 1;
    });

    productCategories = productCategories.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        description: item.description || '',
        status: item.status !== false,
        linked: productCountMap[item.slug] || 0,
      };
    });

    blogCategories = blogCategories.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        description: item.description || '',
        status: item.status !== false,
        linked: blogCountMap[item.slug] || 0,
      };
    });
  }

  function renderBlogPostsTable() {
    if (!blogPostsTableBody) return;

    if (!blogPosts.length) {
      blogPostsTableBody.innerHTML = '<tr><td colspan="7">Nenhum post cadastrado.</td></tr>';
      return;
    }

    blogPostsTableBody.innerHTML = blogPosts
      .slice()
      .sort(function (a, b) {
        return (b.publishDate || '').localeCompare(a.publishDate || '');
      })
      .map(function (post) {
        var statusClass = post.published ? 'published' : 'draft';
        var statusLabel = post.published ? 'Publicado' : 'Rascunho';
        var featureClass = post.featured ? 'review' : 'draft';
        var featureLabel = post.featured ? 'Sim' : 'Não';

        return (
          '<tr>' +
          '<td><img class="thumb" src="' + (post.image || 'https://picsum.photos/id/1025/120/90') + '" alt="' + (post.title || 'Post') + '" /></td>' +
          '<td>' + (post.title || '--') + '</td>' +
          '<td>' + getCategoryNameBySlug(blogCategories, post.category) + '</td>' +
          '<td>' + formatDateBR(post.publishDate) + '</td>' +
          '<td><span class="tag ' + statusClass + '">' + statusLabel + '</span></td>' +
          '<td><span class="tag ' + featureClass + '">' + featureLabel + '</span></td>' +
          '<td class="actions-cell">' +
          '<a class="icon-action" href="post.html?slug=' + (post.slug || '') + '" target="_blank" rel="noopener noreferrer" title="Visualizar" aria-label="Visualizar post em nova aba">↗</a>' +
          '<button class="icon-action" type="button" data-blog-action="edit" data-id="' + post.id + '" title="Editar" aria-label="Editar">✎</button>' +
          '<button class="icon-action" type="button" data-blog-action="duplicate" data-id="' + post.id + '" title="Duplicar" aria-label="Duplicar">⧉</button>' +
          '<button class="icon-action" type="button" data-blog-action="delete" data-id="' + post.id + '" title="Excluir" aria-label="Excluir">X</button>' +
          '</td>' +
          '</tr>'
        );
      })
      .join('');
  }

  function buildSiteBlogPayload() {
    var categoriesBySlug = {};
    blogCategories.forEach(function (category) {
      categoriesBySlug[category.slug] = category;
    });

    var publishedPosts = blogPosts
      .filter(function (post) {
        return post.published;
      })
      .sort(function (a, b) {
        return (b.publishDate || '').localeCompare(a.publishDate || '');
      });

    return {
      categories: blogCategories,
      posts: publishedPosts.map(function (post) {
        var category = categoriesBySlug[post.category];
        return {
          id: post.id,
          title: post.title,
          slug: post.slug,
          category: category ? category.name : '--',
          categorySlug: post.category || '',
          publishDate: post.publishDate,
          updateDate: post.updateDate,
          metaTags: post.metaTags || '',
          metaDescription: post.metaDescription || '',
          readingMinutes: post.readingMinutes || 0,
          readingSeconds: post.readingSeconds || 0,
          image: post.image || '',
          content: post.content || '',
          featured: !!post.featured,
          href: 'post.html?slug=' + encodeURIComponent(post.slug || ''),
        };
      }),
    };
  }

  function persistSiteBlogData() {
    if (!window.localStorage) return;
    window.localStorage.setItem(CMS_BLOG_SITE_KEY, JSON.stringify(buildSiteBlogPayload()));
  }

  function refreshCategoryBindings() {
    syncCategoryLinks();
    renderProductsTable();
    renderProductCategoriesTable();
    renderBlogCategoriesTable();
    renderBlogPostsTable();
    renderCategorySelect(productCategorySelect, productCategories, 'Selecione uma categoria');
    renderCategorySelect(blogCategorySelect, blogCategories, 'Selecione uma categoria');
    persistData();
    persistSiteProductsData();
    persistSiteBlogData();
  }

  function openProductForm() {
    if (listView) listView.classList.remove('active');
    if (formView) formView.classList.add('active');
    updateBreadcrumb('products', 'Cadastro de produto');
  }

  function closeProductForm() {
    if (formView) formView.classList.remove('active');
    if (listView) listView.classList.add('active');
    editingProductId = null;
    updateBreadcrumb('products', 'Lista de produtos');
  }

  function openHomeContentEditor(targetPanel) {
    if (contentListView) contentListView.classList.remove('active');
    if (contentHomeView) contentHomeView.classList.add('active');
    if (targetPanel) setActiveContentTab(targetPanel);
    updateBreadcrumb('content', 'Página inicial - ' + getActiveContentTabLabel());
  }

  function closeHomeContentEditor() {
    if (contentHomeView) contentHomeView.classList.remove('active');
    if (contentListView) contentListView.classList.add('active');
    updateBreadcrumb('content', 'Página inicial');
  }

  function createDefaultBlogPost() {
    return {
      id: null,
      title: '',
      slug: '',
      published: false,
      featured: false,
      category: '',
      publishDate: new Date().toISOString().slice(0, 10),
      updateDate: new Date().toISOString().slice(0, 10),
      metaTags: '',
      metaDescription: '',
      readingMinutes: 5,
      readingSeconds: 0,
      image: '',
      content: '',
    };
  }

  function fillBlogForm(post) {
    if (!post) return;

    if (blogTitleInput) blogTitleInput.value = post.title || '';
    if (blogSlugInput) {
      blogSlugInput.value = post.slug || '';
      blogSlugInput.dataset.dirty = post.slug ? 'true' : '';
    }
    if (blogPublishDateInput) blogPublishDateInput.value = post.publishDate || '';
    if (blogUpdateDateInput) blogUpdateDateInput.value = post.updateDate || '';
    if (blogMetaTagsInput) blogMetaTagsInput.value = post.metaTags || '';
    if (blogMetaDescription) blogMetaDescription.value = post.metaDescription || '';
    if (blogReadingMinutesInput) blogReadingMinutesInput.value = post.readingMinutes != null ? post.readingMinutes : 0;
    if (blogReadingSecondsInput) blogReadingSecondsInput.value = post.readingSeconds != null ? post.readingSeconds : 0;
    if (blogImageUrlInput) blogImageUrlInput.value = post.image || '';
    if (blogContentInput) blogContentInput.value = post.content || '';
    if (blogCategorySelect) blogCategorySelect.value = post.category || '';

    setToggleState(blogPublishedToggle, !!post.published, 'Sim', 'Não');
    setToggleState(blogFeaturedToggle, !!post.featured, 'Sim', 'Não');
    updateBlogMetaDescriptionCounter();
    refreshImagePreview(blogImageUrlInput);
  }

  function openBlogForm(postId) {
    var post = createDefaultBlogPost();
    if (postId != null) {
      var found = blogPosts.find(function (item) {
        return item.id === postId;
      });
      if (found) {
        post = found;
      }
    }

    editingBlogPostId = post && post.id ? post.id : null;
    fillBlogForm(post);

    if (blogListView) blogListView.classList.remove('active');
    if (blogFormView) blogFormView.classList.add('active');
    updateBreadcrumb('blog', 'Cadastro de post');
  }

  function closeBlogForm() {
    if (blogFormView) blogFormView.classList.remove('active');
    if (blogListView) blogListView.classList.add('active');
    editingBlogPostId = null;
    updateBreadcrumb('blog', 'Lista de posts');
  }

  function openProductCategoryForm(categoryId) {
    var category = null;
    if (categoryId != null) {
      category = productCategories.find(function (item) {
        return item.id === categoryId;
      });
    }

    editingProductCategoryId = category ? category.id : null;
    if (productCategoriesListView) productCategoriesListView.classList.remove('active');
    if (productCategoryFormView) productCategoryFormView.classList.add('active');

    if (productCategoryNameInput) productCategoryNameInput.value = category ? category.name : '';
    if (productCategorySlugInput) {
      productCategorySlugInput.value = category ? category.slug : '';
      productCategorySlugInput.dataset.dirty = category ? 'true' : '';
    }
    if (productCategoryDescriptionInput) productCategoryDescriptionInput.value = category ? category.description : '';
    setToggleState(productCategoryStatusToggle, category ? category.status : true, 'Ativo', 'Inativo');

    updateBreadcrumb('products-categories', 'Categorias de produtos - Cadastro');
  }

  function closeProductCategoryForm() {
    if (productCategoryFormView) productCategoryFormView.classList.remove('active');
    if (productCategoriesListView) productCategoriesListView.classList.add('active');
    editingProductCategoryId = null;
    updateBreadcrumb('products-categories', 'Categorias de produtos');
  }

  function openBlogCategoryForm(categoryId) {
    var category = null;
    if (categoryId != null) {
      category = blogCategories.find(function (item) {
        return item.id === categoryId;
      });
    }

    editingBlogCategoryId = category ? category.id : null;
    if (blogCategoriesListView) blogCategoriesListView.classList.remove('active');
    if (blogCategoryFormView) blogCategoryFormView.classList.add('active');

    if (blogCategoryNameInput) blogCategoryNameInput.value = category ? category.name : '';
    if (blogCategorySlugInput) {
      blogCategorySlugInput.value = category ? category.slug : '';
      blogCategorySlugInput.dataset.dirty = category ? 'true' : '';
    }
    if (blogCategoryDescriptionInput) blogCategoryDescriptionInput.value = category ? category.description : '';
    setToggleState(blogCategoryStatusToggle, category ? category.status : true, 'Ativo', 'Inativo');

    updateBreadcrumb('blog-categories', 'Categorias do blog - Cadastro');
  }

  function closeBlogCategoryForm() {
    if (blogCategoryFormView) blogCategoryFormView.classList.remove('active');
    if (blogCategoriesListView) blogCategoriesListView.classList.add('active');
    editingBlogCategoryId = null;
    updateBreadcrumb('blog-categories', 'Categorias do blog');
  }

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var panelId = item.dataset.panel;
      if (!panelId) return;
      showPanel(panelId);
    });
  });

  navSubItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var panelId = item.dataset.panel;
      if (!panelId) return;
      showPanel(panelId);
    });
  });

  if (toggleSidebar && shell) {
    toggleSidebar.addEventListener('click', function () {
      shell.classList.toggle('sidebar-collapsed');
    });
  }

  if (openNewProductFormBtn) {
    openNewProductFormBtn.addEventListener('click', function () {
      openProductFormById(null);
    });
  }
  if (closeProductFormBtn) closeProductFormBtn.addEventListener('click', closeProductForm);
  if (productForm) {
    productForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var payload = collectProductFormData();
      if (!payload.name) return;
      if (!payload.slug) payload.slug = slugify(payload.name);

      if (editingProductId) {
        products = products.map(function (item) {
          return item.id === editingProductId ? payload : item;
        });
      } else {
        products.push(payload);
      }

      refreshCategoryBindings();
      showToast('Produto publicado com sucesso.');
      closeProductForm();
    });
  }

  if (openHomeContentEditorBtn) {
    openHomeContentEditorBtn.addEventListener('click', function () {
      openHomeContentEditor();
    });
  }
  if (closeHomeContentEditorBtn) closeHomeContentEditorBtn.addEventListener('click', closeHomeContentEditor);
  if (homeContentForm) {
    homeContentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      persistRuntimeSite(mergeDeep(loadRuntimeSite(), collectHomeRuntimeContent()));
      showToast('Conteúdo da Home publicado com sucesso.');
      closeHomeContentEditor();
    });
  }

  if (aboutContentForm) {
    aboutContentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      persistRuntimeSite(mergeDeep(loadRuntimeSite(), collectAboutRuntimeContent()));
      showToast('Conteúdo da página Sobre publicado com sucesso.');
    });
  }

  if (contactContentForm) {
    contactContentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      persistRuntimeSite(mergeDeep(loadRuntimeSite(), collectContactRuntimeContent()));
      showToast('Conteúdo da página Fale Conosco publicado com sucesso.');
    });
  }

  if (seoTagsForm) {
    seoTagsForm.addEventListener('submit', function (event) {
      event.preventDefault();
      persistRuntimeSite(mergeDeep(loadRuntimeSite(), collectSeoRuntimeContent()));
      showToast('SEO e tags publicados com sucesso.');
    });
  }

  if (openNewBlogFormBtn) {
    openNewBlogFormBtn.addEventListener('click', function () {
      openBlogForm(null);
    });
  }
  if (closeBlogFormBtn) closeBlogFormBtn.addEventListener('click', closeBlogForm);

  if (openNewProductCategoryFormBtn) {
    openNewProductCategoryFormBtn.addEventListener('click', function () {
      openProductCategoryForm(null);
    });
  }
  if (closeProductCategoryFormBtn) closeProductCategoryFormBtn.addEventListener('click', closeProductCategoryForm);

  if (openNewBlogCategoryFormBtn) {
    openNewBlogCategoryFormBtn.addEventListener('click', function () {
      openBlogCategoryForm(null);
    });
  }
  if (closeBlogCategoryFormBtn) closeBlogCategoryFormBtn.addEventListener('click', closeBlogCategoryForm);

  if (breadcrumbHome) {
    breadcrumbHome.addEventListener('click', function () {
      showPanel('dashboard');
    });
  }

  openFormRowButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openProductFormById(null);
    });
  });

  openHomeEditorRowButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openHomeContentEditor(btn.dataset.tabTarget || 'hero');
    });
  });

  productTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.dataset.target;
      productTabs.forEach(function (item) {
        item.classList.toggle('active', item === tab);
      });
      productPanels.forEach(function (panel) {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });

  contentTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setActiveContentTab(tab.dataset.target);
    });
  });

  binaryToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var isOn = toggle.dataset.state === 'true';
      toggle.dataset.state = isOn ? 'false' : 'true';
      toggle.classList.toggle('is-on', !isOn);

      var textNode = toggle.querySelector('span');
      if (!textNode) return;

      var label = textNode.textContent.trim();
      if (label === 'Ativo' || label === 'Inativo') {
        textNode.textContent = isOn ? 'Inativo' : 'Ativo';
      } else {
        textNode.textContent = isOn ? 'Não' : 'Sim';
      }
    });
  });

  dropzones.forEach(function (zone) {
    ['dragenter', 'dragover'].forEach(function (eventName) {
      zone.addEventListener(eventName, function (event) {
        event.preventDefault();
        zone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(function (eventName) {
      zone.addEventListener(eventName, function (event) {
        event.preventDefault();
        zone.classList.remove('drag-over');
      });
    });
  });

  if (productCategoryNameInput) {
    productCategoryNameInput.addEventListener('input', function () {
      if (productCategorySlugInput && !productCategorySlugInput.dataset.dirty) {
        productCategorySlugInput.value = slugify(productCategoryNameInput.value);
      }
    });
  }

  if (productNameInput) {
    productNameInput.addEventListener('input', function () {
      if (productSlugInput && !productSlugInput.dataset.dirty) {
        productSlugInput.value = slugify(productNameInput.value);
      }
    });
  }

  if (productSlugInput) {
    productSlugInput.addEventListener('input', function () {
      productSlugInput.dataset.dirty = productSlugInput.value ? 'true' : '';
    });
  }

  if (productCategorySlugInput) {
    productCategorySlugInput.addEventListener('input', function () {
      productCategorySlugInput.dataset.dirty = productCategorySlugInput.value ? 'true' : '';
    });
  }

  if (blogCategoryNameInput) {
    blogCategoryNameInput.addEventListener('input', function () {
      if (blogCategorySlugInput && !blogCategorySlugInput.dataset.dirty) {
        blogCategorySlugInput.value = slugify(blogCategoryNameInput.value);
      }
    });
  }

  if (blogCategorySlugInput) {
    blogCategorySlugInput.addEventListener('input', function () {
      blogCategorySlugInput.dataset.dirty = blogCategorySlugInput.value ? 'true' : '';
    });
  }

  if (blogTitleInput) {
    blogTitleInput.addEventListener('input', function () {
      if (blogSlugInput && !blogSlugInput.dataset.dirty) {
        blogSlugInput.value = slugify(blogTitleInput.value);
      }
    });
  }

  if (blogSlugInput) {
    blogSlugInput.addEventListener('input', function () {
      blogSlugInput.dataset.dirty = blogSlugInput.value ? 'true' : '';
    });
  }

  if (productCategoryFormView) {
    var productCategoryForm = productCategoryFormView.querySelector('form');
    if (productCategoryForm) {
      productCategoryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = productCategoryNameInput ? productCategoryNameInput.value.trim() : '';
        if (!name) return;
        var slugRaw = productCategorySlugInput && productCategorySlugInput.value ? productCategorySlugInput.value.trim() : name;
        var slug = slugify(slugRaw);
        var description = productCategoryDescriptionInput ? productCategoryDescriptionInput.value.trim() : '';
        var status = productCategoryStatusToggle ? productCategoryStatusToggle.dataset.state === 'true' : true;

        if (editingProductCategoryId) {
          productCategories = productCategories.map(function (item) {
            if (item.id !== editingProductCategoryId) return item;
            return {
              id: item.id,
              name: name,
              slug: slug,
              description: description,
              status: status,
              linked: item.linked,
            };
          });
        } else {
          productCategories.push({
            id: Date.now(),
            name: name,
            slug: slug,
            description: description,
            status: status,
            linked: 0,
          });
        }

        refreshCategoryBindings();
        closeProductCategoryForm();
        showToast('Categoria de produto publicada com sucesso.');
      });
    }
  }

  if (blogCategoryFormView) {
    var blogCategoryForm = blogCategoryFormView.querySelector('form');
    if (blogCategoryForm) {
      blogCategoryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = blogCategoryNameInput ? blogCategoryNameInput.value.trim() : '';
        if (!name) return;
        var slugRaw = blogCategorySlugInput && blogCategorySlugInput.value ? blogCategorySlugInput.value.trim() : name;
        var slug = slugify(slugRaw);
        var description = blogCategoryDescriptionInput ? blogCategoryDescriptionInput.value.trim() : '';
        var status = blogCategoryStatusToggle ? blogCategoryStatusToggle.dataset.state === 'true' : true;

        if (editingBlogCategoryId) {
          blogCategories = blogCategories.map(function (item) {
            if (item.id !== editingBlogCategoryId) return item;
            return {
              id: item.id,
              name: name,
              slug: slug,
              description: description,
              status: status,
              linked: item.linked,
            };
          });
        } else {
          blogCategories.push({
            id: Date.now(),
            name: name,
            slug: slug,
            description: description,
            status: status,
            linked: 0,
          });
        }

        refreshCategoryBindings();
        closeBlogCategoryForm();
        showToast('Categoria do blog publicada com sucesso.');
      });
    }
  }

  if (blogForm) {
    blogForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var title = blogTitleInput ? blogTitleInput.value.trim() : '';
      if (!title) return;

      var slugRaw = blogSlugInput && blogSlugInput.value ? blogSlugInput.value.trim() : title;
      var slug = slugify(slugRaw);
      var published = true;
      var featured = blogFeaturedToggle ? blogFeaturedToggle.dataset.state === 'true' : false;
      var category = blogCategorySelect ? blogCategorySelect.value : '';
      var publishDate = blogPublishDateInput ? blogPublishDateInput.value : '';
      var updateDate = blogUpdateDateInput ? blogUpdateDateInput.value : '';
      var metaTags = blogMetaTagsInput ? blogMetaTagsInput.value.trim() : '';
      var metaDescription = blogMetaDescription ? blogMetaDescription.value.trim() : '';
      var readingMinutes = blogReadingMinutesInput ? Number(blogReadingMinutesInput.value || 0) : 0;
      var readingSeconds = blogReadingSecondsInput ? Number(blogReadingSecondsInput.value || 0) : 0;
      var image = blogImageUrlInput ? blogImageUrlInput.value.trim() : '';
      var content = blogContentInput ? blogContentInput.value.trim() : '';

      var payload = {
        id: editingBlogPostId || Date.now(),
        title: title,
        slug: slug,
        published: published,
        featured: featured,
        category: category,
        publishDate: publishDate,
        updateDate: updateDate,
        metaTags: metaTags,
        metaDescription: metaDescription,
        readingMinutes: readingMinutes,
        readingSeconds: readingSeconds,
        image: image,
        content: content,
      };

      if (editingBlogPostId) {
        blogPosts = blogPosts.map(function (item) {
          return item.id === editingBlogPostId ? payload : item;
        });
      } else {
        blogPosts.push(payload);
      }

        refreshCategoryBindings();
        closeBlogForm();
        showToast('Post publicado com sucesso.');
      });
  }

  if (productCategoriesTableBody) {
    productCategoriesTableBody.addEventListener('click', function (event) {
      var target = event.target;
      var button = target.closest('button[data-action]');
      if (!button) return;
      var categoryId = Number(button.dataset.id);
      if (!categoryId) return;

      if (button.dataset.action === 'edit') {
        openProductCategoryForm(categoryId);
        return;
      }

      if (button.dataset.action === 'delete') {
        var removed = productCategories.find(function (item) {
          return item.id === categoryId;
        });
        productCategories = productCategories.filter(function (item) {
          return item.id !== categoryId;
        });
        if (removed) {
          products = products.map(function (item) {
            if (item.category !== removed.slug) return item;
            var cloned = Object.assign({}, item);
            cloned.category = '';
            return cloned;
          });
        }
        refreshCategoryBindings();
        showToast('Categoria de produto removida.');
      }
    });
  }

  if (productsTableBody) {
    productsTableBody.addEventListener('click', function (event) {
      var target = event.target;

      var thumb = target.closest('img.thumb');
      if (thumb) {
        openLightbox(thumb.dataset.fullImage || thumb.src, thumb.alt);
        return;
      }

      var button = target.closest('button[data-product-action]');
      if (!button) return;

      var productId = Number(button.dataset.id);
      if (!productId) return;

      if (button.dataset.productAction === 'edit') {
        openProductFormById(productId);
        return;
      }

      if (button.dataset.productAction === 'duplicate') {
        var source = products.find(function (item) {
          return item.id === productId;
        });
        if (!source) return;

        var duplicated = Object.assign({}, source);
        duplicated.id = Date.now();
        duplicated.name = source.name + ' (cópia)';
        duplicated.slug = slugify(source.slug + '-copia-' + Date.now());
        duplicated.code = source.code ? source.code + '-C' : '';
        duplicated.status = true;
        products.push(duplicated);
        refreshCategoryBindings();
        showToast('Produto duplicado e publicado.');
        return;
      }

      if (button.dataset.productAction === 'delete') {
        products = products.filter(function (item) {
          return item.id !== productId;
        });
        refreshCategoryBindings();
        showToast('Produto removido.');
      }
    });
  }

  if (productFilesList) {
    productFilesList.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-product-file-remove]');
      if (!button) return;
      var key = button.dataset.productFileRemove;
      if (key === 'assembly' && productAssemblyPdfInput) {
        productAssemblyPdfInput.value = '';
        productAssemblyPdfInput.dataset.lastFileName = '';
        refreshFilePreview(productAssemblyPdfInput);
      }
      if (key === 'extra' && productExtraFileInput) {
        productExtraFileInput.value = '';
        productExtraFileInput.dataset.lastFileName = '';
        refreshFilePreview(productExtraFileInput);
      }
    });
  }

  if (blogCategoriesTableBody) {
    blogCategoriesTableBody.addEventListener('click', function (event) {
      var target = event.target;
      var button = target.closest('button[data-action]');
      if (!button) return;
      var categoryId = Number(button.dataset.id);
      if (!categoryId) return;

      if (button.dataset.action === 'edit') {
        openBlogCategoryForm(categoryId);
        return;
      }

      if (button.dataset.action === 'delete') {
        var removedCategory = blogCategories.find(function (item) {
          return item.id === categoryId;
        });
        blogCategories = blogCategories.filter(function (item) {
          return item.id !== categoryId;
        });
        if (removedCategory) {
          blogPosts = blogPosts.map(function (post) {
            if (post.category !== removedCategory.slug) return post;
            return {
              id: post.id,
              title: post.title,
              slug: post.slug,
              published: post.published,
              featured: post.featured,
              category: '',
              publishDate: post.publishDate,
              updateDate: post.updateDate,
              metaTags: post.metaTags,
              metaDescription: post.metaDescription,
              readingMinutes: post.readingMinutes,
              readingSeconds: post.readingSeconds,
              image: post.image,
              content: post.content,
            };
          });
        }
        refreshCategoryBindings();
        showToast('Categoria do blog removida.');
      }
    });
  }

  if (blogPostsTableBody) {
    blogPostsTableBody.addEventListener('click', function (event) {
      var target = event.target;
      var button = target.closest('button[data-blog-action]');
      if (!button) return;

      var postId = Number(button.dataset.id);
      if (!postId) return;

      if (button.dataset.blogAction === 'edit') {
        openBlogForm(postId);
        return;
      }

      if (button.dataset.blogAction === 'duplicate') {
        var source = blogPosts.find(function (item) {
          return item.id === postId;
        });
        if (!source) return;

        var duplicated = {
          id: Date.now(),
          title: source.title + ' (cópia)',
          slug: slugify(source.slug + '-copia-' + Date.now()),
          published: true,
          featured: false,
          category: source.category,
          publishDate: source.publishDate,
          updateDate: source.updateDate,
          metaTags: source.metaTags,
          metaDescription: source.metaDescription,
          readingMinutes: source.readingMinutes,
          readingSeconds: source.readingSeconds,
          image: source.image,
          content: source.content,
        };

        blogPosts.push(duplicated);
        refreshCategoryBindings();
        showToast('Post duplicado e publicado.');
        return;
      }

      if (button.dataset.blogAction === 'delete') {
        blogPosts = blogPosts.filter(function (item) {
          return item.id !== postId;
        });
        refreshCategoryBindings();
        showToast('Post removido.');
      }
    });
  }

  function updateBlogMetaDescriptionCounter() {
    if (!blogMetaDescription || !blogMetaDescriptionCount) return;
    blogMetaDescriptionCount.textContent = String(blogMetaDescription.value.length);
  }

  if (blogMetaDescription) {
    blogMetaDescription.addEventListener('input', updateBlogMetaDescriptionCounter);
    updateBlogMetaDescriptionCounter();
  }

  function openLightbox(src, alt) {
    if (!imageLightbox || !lightboxImage || !src) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    imageLightbox.classList.add('is-open');
    imageLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!imageLightbox || !lightboxImage) return;
    imageLightbox.classList.remove('is-open');
    imageLightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (imageLightbox) {
    imageLightbox.addEventListener('click', function (event) {
      if (event.target === imageLightbox) {
        closeLightbox();
      }
    });
  }

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && imageLightbox && imageLightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  bindImageUploaders();
  bindFileUploaders();
  renderProductFilesList();
  loadPersistedData();
  hydrateHomeRuntimeForm();
  hydrateAboutRuntimeForm();
  hydrateContactRuntimeForm();
  hydrateSeoRuntimeForm();
  refreshCategoryBindings();
  syncSidebarActive(currentPanelId);
  updateBreadcrumb(currentPanelId);
})();
