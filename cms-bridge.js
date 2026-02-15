(function () {
  var config = window.COLIBRI_CMS_CONFIG || {};
  var apiEndpoint = config.apiEndpoint || '';
  var endpoint = config.endpoint || './data/site-content.json';
  var previewStorageKey = config.previewStorageKey || 'colibri.cms.preview';
  var blogSiteStorageKey = config.blogSiteStorageKey || 'colibri.cms.blogSiteData';
  var runtimeSiteStorageKey = config.runtimeSiteStorageKey || 'colibri.cms.siteRuntime';

  function get(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function setText(el, value) {
    if (!el || value === undefined || value === null) return;
    el.textContent = String(value);
  }

  function setHTML(el, value) {
    if (!el || value === undefined || value === null) return;
    el.innerHTML = String(value);
  }

  function parseJSON(raw) {
    try {
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function upsertMetaByName(name, value) {
    if (!name || value == null) return;
    var selector = 'meta[name="' + name + '"]';
    var tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', String(value));
  }

  function upsertMetaByProperty(property, value) {
    if (!property || value == null) return;
    var selector = 'meta[property="' + property + '"]';
    var tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', String(value));
  }

  function upsertCanonical(url) {
    if (!url) return;
    var link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  function injectInlineScript(id, code, target) {
    if (!code) return;
    if (document.getElementById(id)) return;
    var scriptCode = String(code)
      .replace(/<script[^>]*>/gi, '')
      .replace(/<\/script>/gi, '')
      .trim();
    if (!scriptCode) return;
    var script = document.createElement('script');
    script.id = id;
    script.text = scriptCode;
    (target || document.body || document.head).appendChild(script);
  }

  function injectExternalScript(id, src, isAsync) {
    if (!src) return;
    if (document.getElementById(id)) return;
    var script = document.createElement('script');
    script.id = id;
    script.src = src;
    if (isAsync) script.async = true;
    document.head.appendChild(script);
  }

  function resolveCurrentPageKey() {
    if (document.body.classList.contains('home')) return 'home';
    if (document.body.classList.contains('about-page')) return 'about';
    if (document.body.classList.contains('contact-page')) return 'contact';
    if (document.body.classList.contains('products-catalog')) return 'products';
    if (document.body.classList.contains('product-detail')) return 'product';
    if (document.body.classList.contains('blog-page')) return 'blog';
    if (document.body.classList.contains('post-page')) return 'post';
    return 'page';
  }

  function applySeo(content) {
    var seo = get(content, 'seo') || {};
    var pageKey = resolveCurrentPageKey();
    var pageSeo = (seo.pages && seo.pages[pageKey]) || {};
    var canonicalBase = seo.canonicalBase || 'https://www.colibrimoveis.com.br';
    var pathname = window.location.pathname || '/';
    var canonical = pageSeo.canonical || canonicalBase.replace(/\/+$/, '') + pathname;
    var title = document.title || pageSeo.title || seo.siteTitle || 'Colibri Móveis';
    var description = pageSeo.description || seo.defaultDescription || '';
    var robots = seo.indexable === false ? 'noindex,nofollow' : pageSeo.robots || 'index,follow';
    var image = pageSeo.image || get(content, 'home.heroSlides.0.src') || '';

    document.title = title;
    if (description) upsertMetaByName('description', description);
    upsertMetaByName('robots', robots);
    if (seo.metaVerification) upsertMetaByName('google-site-verification', seo.metaVerification);
    upsertCanonical(canonical);

    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:title', title);
    if (description) upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', canonical);
    if (image) upsertMetaByProperty('og:image', image);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', title);
    if (description) upsertMetaByName('twitter:description', description);
    if (image) upsertMetaByName('twitter:image', image);
  }

  function applyAnalytics(content) {
    var analytics = get(content, 'analytics') || {};

    if (analytics.gaMeasurementId) {
      injectExternalScript(
        'colibri-ga4-src',
        'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(analytics.gaMeasurementId),
        true
      );
      injectInlineScript(
        'colibri-ga4-inline',
        "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
          String(analytics.gaMeasurementId) +
          "');",
        document.head
      );
    }

    if (analytics.gtmId) {
      injectInlineScript(
        'colibri-gtm-inline',
        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" +
          String(analytics.gtmId) +
          "');",
        document.head
      );
    }

    if (analytics.facebookPixelId) {
      injectInlineScript(
        'colibri-fb-pixel-inline',
        "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','" +
          String(analytics.facebookPixelId) +
          "');fbq('track','PageView');",
        document.head
      );
    }

    if (analytics.customHeadScript) {
      injectInlineScript('colibri-custom-head-script', analytics.customHeadScript, document.head);
    }
    if (analytics.customBodyScript) {
      injectInlineScript('colibri-custom-body-script', analytics.customBodyScript, document.body);
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

  function createSubmenuHTML(items) {
    if (!Array.isArray(items)) return '';
    return items
      .map(function (item) {
        return '<li><a href="' + (item.href || '#') + '">' + (item.label || '') + '</a></li>';
      })
      .join('');
  }

  function applyHeader(content) {
    var navigation = get(content, 'navigation');
    var nav = document.querySelector('.topbar .navigation');
    if (!navigation || !nav) return;

    var aboutLi = nav.querySelector('li.has-submenu');
    var productLi = nav.querySelectorAll('li.has-submenu')[1];

    if (aboutLi && navigation.about) {
      var aboutAnchor = aboutLi.querySelector(':scope > a');
      if (aboutAnchor) {
        aboutAnchor.setAttribute('href', navigation.about.href || 'sobre.html');
        setHTML(
          aboutAnchor,
          (navigation.about.label || 'Sobre') + ' <span class="submenu-arrow">▾</span>'
        );
      }
      var aboutSub = aboutLi.querySelector(':scope > .submenu');
      if (aboutSub && Array.isArray(navigation.about.items)) {
        aboutSub.innerHTML = createSubmenuHTML(navigation.about.items);
      }
    }

    if (productLi && navigation.products) {
      var productAnchor = productLi.querySelector(':scope > a');
      if (productAnchor) {
        productAnchor.setAttribute('href', navigation.products.href || 'produtos.html');
        setHTML(
          productAnchor,
          (navigation.products.label || 'Produtos') + ' <span class="submenu-arrow">▾</span>'
        );
      }
      var productSub = productLi.querySelector(':scope > .submenu');
      if (productSub && Array.isArray(navigation.products.items)) {
        productSub.innerHTML = createSubmenuHTML(navigation.products.items);
      }
    }

    var allLis = nav.querySelectorAll(':scope > li');
    if (allLis[2] && navigation.blog) {
      var blogA = allLis[2].querySelector('a');
      if (blogA) {
        setText(blogA, navigation.blog.label || 'Blog');
        blogA.setAttribute('href', navigation.blog.href || 'blog.html');
      }
    }

    if (allLis[3] && navigation.clientArea) {
      var clientA = allLis[3].querySelector('a');
      if (clientA) {
        setText(clientA, navigation.clientArea.label || 'Área do Cliente');
        clientA.setAttribute('href', navigation.clientArea.href || '#');
      }
    }
  }

  function applyHome(content) {
    if (!document.body.classList.contains('home')) return;
    var home = get(content, 'home');
    if (!home) return;

    var h1 = document.querySelector('.hero-copy h1');
    var subtitle = document.querySelector('.hero-copy p');
    setHTML(h1, home.heroTitle);
    setHTML(subtitle, home.heroSubtitle);

    setText(document.querySelector('.inspiration-copy h2'), home.inspirationTitle);
    setText(document.querySelector('.inspiration-copy p'), home.inspirationDescription);
    setText(document.querySelector('.inspiration-copy .inspiration-btn span:first-child'), home.inspirationButtonText);
    if (home.inspirationButtonLink) {
      var inspBtn = document.querySelector('.inspiration-copy .inspiration-btn');
      if (inspBtn) inspBtn.setAttribute('href', home.inspirationButtonLink);
    }

    setText(document.querySelector('.popular-intro h2'), home.popularTitle);
    setHTML(document.querySelector('.popular-intro p'), home.popularDescription);
    setText(document.querySelector('.popular-btn span:first-child'), home.popularButtonText);
    if (home.popularButtonLink) {
      var popBtn = document.querySelector('.popular-btn');
      if (popBtn) popBtn.setAttribute('href', home.popularButtonLink);
    }

    setText(document.querySelector('.blog-intro h2'), home.blogTitle);
    setText(document.querySelector('.blog-intro p'), home.blogDescription);
    setText(document.querySelector('.blog-btn span:first-child'), home.blogButtonText);
    if (home.blogButtonLink) {
      var blogBtn = document.querySelector('.blog-btn');
      if (blogBtn) blogBtn.setAttribute('href', home.blogButtonLink);
    }

    setText(document.querySelector('.newsletter .overlay h1'), home.newsletterTitle);
    setHTML(document.querySelector('.newsletter .overlay p'), home.newsletterDescription);
    setText(document.querySelector('.newsletter .overlay form button'), home.newsletterButtonText);
    var newsletterInput = document.querySelector('.newsletter .overlay form input[type="email"]');
    if (newsletterInput && home.newsletterPlaceholder) {
      newsletterInput.setAttribute('placeholder', home.newsletterPlaceholder);
    }

    if (Array.isArray(home.heroSlides) && home.heroSlides.length) {
      window.__COLIBRI_HOME_SLIDES__ = home.heroSlides;
    }

    if (Array.isArray(home.popularProducts)) {
      var popularGrid = document.querySelector('.popular-grid');
      if (popularGrid) {
        popularGrid.innerHTML = home.popularProducts
          .map(function (item) {
            return (
              '<article class="product-card">' +
              '<div class="product-media" role="img" aria-label="' + (item.title || '') + '" style="background-image:url(\'' +
              (item.image || '') +
              '\')"></div>' +
              '<h3>' + (item.title || '') + '</h3>' +
              '</article>'
            );
          })
          .join('');
      }
    }

    var runtimeBlog = parseJSON(window.localStorage.getItem(blogSiteStorageKey));
    var blogCards = null;
    if (runtimeBlog && Array.isArray(runtimeBlog.posts) && runtimeBlog.posts.length) {
      blogCards = runtimeBlog.posts
        .filter(function (post) {
          return post.featured;
        })
        .slice(0, 4);
      if (!blogCards.length) {
        blogCards = runtimeBlog.posts.slice(0, 4);
      }
    } else if (Array.isArray(home.blogPosts)) {
      blogCards = home.blogPosts;
    }

    if (Array.isArray(blogCards)) {
      var blogGrid = document.querySelector('.blog-grid');
      if (blogGrid) {
        blogGrid.innerHTML = blogCards
          .map(function (item) {
            var href = item.href || 'blog.html';
            return (
              '<article class="blog-card">' +
              '<a href="' + href + '">' +
              '<div class="blog-media" role="img" aria-label="' + (item.title || '') + '" style="background-image:url(\'' +
              (item.image || '') +
              '\')"></div>' +
              '<h3>' + (item.title || '') + '</h3>' +
              '</a>' +
              '</article>'
            );
          })
          .join('');
      }
    }
  }

  function applyAbout(content) {
    if (!document.body.classList.contains('about-page')) return;
    var about = get(content, 'about');
    if (!about) return;

    setText(document.querySelector('.about-banner .top .left h1'), about.heroTitle);
    setText(document.querySelector('.about-banner .top .left p'), about.heroDescription);

    var heroImg = document.querySelector('.about-banner .top img.right');
    if (heroImg && about.heroImage) {
      heroImg.src = about.heroImage;
      heroImg.alt = about.heroTitle || heroImg.alt || 'Sobre Colibri';
    }

    setText(document.querySelector('.about-featured h2'), about.featuredTitle);

    var featuredParagraphs = document.querySelectorAll('.about-featured .cols p');
    if (featuredParagraphs[0]) setText(featuredParagraphs[0], about.featuredParagraph1);
    if (featuredParagraphs[1]) setText(featuredParagraphs[1], about.featuredParagraph2);
  }

  function applyContact(content) {
    if (!document.body.classList.contains('contact-page')) return;
    var contact = get(content, 'contact');
    if (!contact) return;

    setText(document.querySelector('.contact-banner .top .left h1'), contact.heroTitle);
    setText(document.querySelector('.contact-banner .top .left p'), contact.heroDescription);

    var heroImg = document.querySelector('.contact-banner .top img.right');
    if (heroImg && contact.heroImage) {
      heroImg.src = contact.heroImage;
      heroImg.alt = contact.heroTitle || heroImg.alt || 'Fale Conosco';
    }

    setText(document.querySelector('.quest h1'), contact.questionTitle);
    setText(document.querySelector('.contact .email h1'), contact.commercialTitle);
    setText(document.querySelector('.contact .email p'), contact.commercialDescription);

    var commercialLines = document.querySelectorAll('.contact .email h2');
    if (commercialLines[0]) setText(commercialLines[0], contact.commercialEmail);
    if (commercialLines[1]) setText(commercialLines[1], contact.commercialPhone);

    setText(document.querySelector('.contact .phone h1'), contact.careersTitle);
    setText(document.querySelector('.contact .phone p'), contact.careersDescription);
    setText(document.querySelector('.contact .phone h2'), contact.careersEmail);

    var mapIframe = document.querySelector('iframe[title="Mapa Colibri"]');
    if (mapIframe && contact.mapEmbedUrl) {
      mapIframe.src = contact.mapEmbedUrl;
    }
  }

  function applyBlog(content) {
    if (!document.body.classList.contains('blog-page')) return;

    var runtimeBlog = parseJSON(window.localStorage.getItem(blogSiteStorageKey));
    var posts = runtimeBlog && Array.isArray(runtimeBlog.posts) ? runtimeBlog.posts : [];
    var homePosts = get(content, 'home.blogPosts');

    if (!posts.length && Array.isArray(homePosts) && homePosts.length) {
      posts = homePosts.map(function (item, idx) {
        return {
          title: item.title || 'Post',
          image: item.image || '',
          href: 'post.html?slug=post-' + String(idx + 1),
        };
      });
    }

    if (!posts.length) {
      posts = [
        {
          title: 'Nenhum post publicado ainda',
          image: 'https://picsum.photos/id/1015/900/700',
          category: 'Blog',
          publishDate: '',
          href: '#',
        },
      ];
    }

    var grid = document.querySelector('.catalog-grid');
    if (!grid) return;

    grid.innerHTML = posts
      .map(function (post) {
        return (
          '<article class="catalog-item">' +
          '<a href="' + (post.href || '#') + '">' +
          '<img src="' + (post.image || '') + '" alt="' + (post.title || '') + '" />' +
          '<h3>' + (post.title || '') + '</h3>' +
          '</a>' +
          '</article>'
        );
      })
      .join('');
  }

  function applyBlogPost(content) {
    if (!document.body.classList.contains('post-page')) return;

    var runtimeBlog = parseJSON(window.localStorage.getItem(blogSiteStorageKey));
    var posts = runtimeBlog && Array.isArray(runtimeBlog.posts) ? runtimeBlog.posts : [];

    var params = new URLSearchParams(window.location.search || '');
    var slug = params.get('slug') || '';

    var post = posts.find(function (item) {
      return item.slug === slug;
    });

    if (!post) {
      var fallback = get(content, 'home.blogPosts');
      if (Array.isArray(fallback) && fallback.length) {
        post = {
          title: fallback[0].title,
          image: fallback[0].image,
          category: 'Blog',
          publishDate: '',
          content: 'Conteúdo em breve.',
          readingMinutes: 0,
          readingSeconds: 0,
        };
      }
    }

    if (!post) return;

    setText(document.querySelector('.post-title'), post.title || 'Post');
    setText(document.querySelector('.post-category'), post.category || 'Blog');
    setText(document.querySelector('.post-date'), post.publishDate || '');

    var readingLabel = '';
    if (post.readingMinutes || post.readingSeconds) {
      readingLabel = String(post.readingMinutes || 0) + ' min';
    }
    setText(document.querySelector('.post-reading'), readingLabel);

    var heroImg = document.querySelector('.post-hero-image');
    if (heroImg && post.image) {
      heroImg.src = post.image;
      heroImg.alt = post.title || 'Post';
    }

    var contentEl = document.querySelector('.post-content');
    if (contentEl) {
      var body = post.content || '';
      if (body.indexOf('<') > -1) {
        setHTML(contentEl, body);
      } else {
        setText(contentEl, body || 'Conteúdo em breve.');
      }
    }

    if (post.title) {
      document.title = post.title + ' - Colibri Móveis';
    }
  }

  function applyCatalog(content) {
    if (!document.body.classList.contains('products-catalog')) return;
    var catalog = get(content, 'catalog');
    var runtimeItems = get(content, 'products.items');
    if (!catalog && !Array.isArray(runtimeItems)) return;
    catalog = catalog || {};

    var title = document.querySelector('.products-catalog .filter-box h1');
    setText(title, catalog.title || 'Catálogo');

    var categories = Array.isArray(catalog.categories) ? catalog.categories : null;
    if (!categories && Array.isArray(runtimeItems)) {
      var categorySet = {};
      runtimeItems.forEach(function (item) {
        if (item && item.category) categorySet[item.category] = true;
      });
      categories = Object.keys(categorySet);
    }

    if (Array.isArray(categories)) {
      var list = document.querySelector('.products-catalog .options ul');
      if (list) {
        var allLabel = catalog.allLabel || 'Todos';
        var html =
          '<li><label class="square_b"><input type="checkbox" checked /><span class="checkmark"></span>' +
          allLabel +
          '</label></li>';

        html += categories
          .map(function (cat) {
            return (
              '<li><label class="square_b"><input type="checkbox" /><span class="checkmark"></span>' +
              cat +
              '</label></li>'
            );
          })
          .join('');

        list.innerHTML = html;
      }
    }

    var listItems = Array.isArray(catalog.products) ? catalog.products : null;
    if (!listItems && Array.isArray(runtimeItems)) {
      listItems = runtimeItems.map(function (item) {
        return {
          title: item.name || '',
          image: item.image || '',
          href: 'produto.html?slug=' + encodeURIComponent(item.slug || ''),
        };
      });
    }

    if (Array.isArray(listItems)) {
      var cards = document.querySelector('.products-catalog .list');
      if (cards) {
        cards.innerHTML = listItems
          .map(function (item) {
            return (
              '<a class="card_b" href="' + (item.href || 'produto.html') + '">' +
              '<img src="' + (item.image || '') + '" alt="' + (item.title || '') + '" />' +
              '<h1>' + (item.title || '') + '</h1>' +
              '</a>'
            );
          })
          .join('');
      }
    }
  }

  function applyProductDetail(content) {
    if (!document.body.classList.contains('product-detail')) return;
    var detail = get(content, 'productDetail');
    var runtimeProducts = get(content, 'products.items');
    var params = new URLSearchParams(window.location.search || '');
    var slug = params.get('slug') || '';

    if (slug && Array.isArray(runtimeProducts) && runtimeProducts.length) {
      var found = runtimeProducts.find(function (item) {
        return item.slug === slug;
      });
      if (found) {
        detail = {
          name: found.name,
          code: found.code,
          category: found.category,
          description: found.description,
          specs: found.specs || [],
          variants: found.variants || [],
          release: !!found.release,
          assemblyPdf: found.assemblyPdf || '',
          extraFile: found.extraFile || '',
        };
      }
    }

    if (!detail) return;

    setText(document.querySelector('.product-detail #product h1'), detail.name);
    setText(document.querySelector('.product-detail .cod'), detail.code ? 'cod. ' + detail.code : '');
    setText(document.querySelector('.product-detail .category'), detail.category || '');
    setText(document.querySelector('.product-detail .description'), detail.description || '');
    var releaseButton = document.querySelector('.product-detail .release');
    if (releaseButton) {
      releaseButton.style.display = detail.release ? '' : 'none';
    }
    var imageDownload = document.querySelector('.product-detail a.image');
    if (imageDownload) {
      imageDownload.href = detail.extraFile || '#';
    }
    var assemblyDownload = document.querySelector('.product-detail a.schema');
    if (assemblyDownload) {
      assemblyDownload.href = detail.assemblyPdf || '#';
    }

    if (Array.isArray(detail.variants) && detail.variants.length) {
      function renderColorGroup(selector, inputName) {
        var container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML =
          '<span>Cores disponíveis:</span>' +
          detail.variants
            .map(function (variant, idx) {
              return (
                '<label class=\"color\" title=\"' + (variant.name || '') + '\">' +
                '<input type=\"radio\" name=\"' + inputName + '\" value=\"' + idx + '\" ' + (idx === 0 ? 'checked' : '') + ' />' +
                '<span class=\"checkmark\" style=\"background-color:' + (variant.color || '#ccc') + '\"></span>' +
                '</label>'
              );
            })
            .join('');
      }

      renderColorGroup('.product-detail .top .left .colors.no-mobi', 'pd_color');
      renderColorGroup('.product-detail .mobile-info .colors', 'pd_color_mobile');
    }

    var specsEl = document.querySelector('.product-detail .characteristics ul');
    if (specsEl) {
      var specs = Array.isArray(detail.specs) ? detail.specs : [];
      specsEl.innerHTML = specs
        .map(function (item) {
          return (
            '<li class="characteristic"><span class="tag">' + (item.label || '') + '</span><span class="other">' +
            (item.value || '') +
            '</span><span class="unit">' + (item.unit || '') + '</span></li>'
          );
        })
        .join('');
    }

    if (Array.isArray(detail.variants) && detail.variants.length) {
      window.__COLIBRI_PRODUCT_DATA__ = detail;
    }

    if (detail.name) {
      document.title = detail.name + ' - Colibri Móveis';
    }
  }

  function applyFooter(content) {
    var footer = get(content, 'footer');
    if (!footer) return;

    setText(document.querySelector('.site-footer .bot .left'), footer.copyright);

    var infos = document.querySelector('.site-footer .informations');
    if (infos && Array.isArray(footer.addressLines)) {
      infos.innerHTML = footer.addressLines.join('\n');
    }
  }

  function dispatchReady(content) {
    window.__COLIBRI_CONTENT__ = content;
    document.dispatchEvent(new CustomEvent('colibri:content-ready', { detail: content }));
  }

  function parsePreview() {
    var raw = window.localStorage.getItem(previewStorageKey);
    return parseJSON(raw);
  }

  function fetchContentFrom(url) {
    if (!url) return Promise.resolve(null);
    return fetch(url, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('content fetch failed');
        return response.json();
      })
      .catch(function () {
        return null;
      });
  }

  function fetchContent() {
    if (apiEndpoint) {
      return fetchContentFrom(apiEndpoint).then(function (apiContent) {
        if (apiContent) return apiContent;
        return fetchContentFrom(endpoint);
      });
    }

    return fetch(endpoint, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('content fetch failed');
        return response.json();
      })
      .catch(function () {
        return null;
      });
  }

  function run(content) {
    var runtimeSite = parseJSON(window.localStorage.getItem(runtimeSiteStorageKey)) || {};
    var mergedContent = mergeDeep(content || {}, runtimeSite);

    if (!mergedContent) {
      dispatchReady({});
      return;
    }

    applyHeader(mergedContent);
    applyHome(mergedContent);
    applyAbout(mergedContent);
    applyContact(mergedContent);
    applyCatalog(mergedContent);
    applyBlog(mergedContent);
    applyBlogPost(mergedContent);
    applyProductDetail(mergedContent);
    applySeo(mergedContent);
    applyAnalytics(mergedContent);
    applyFooter(mergedContent);
    dispatchReady(mergedContent);
  }

  var preview = parsePreview();
  fetchContent().then(function (remote) {
    run(remote || preview || {});
  });
})();
