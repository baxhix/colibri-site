var __colibriHost = window.location.hostname || '';
var __colibriBaseHost = __colibriHost.replace(/^www\./, '');
var __colibriDefaultApiEndpoint =
  __colibriHost === 'localhost' || __colibriHost === '127.0.0.1'
    ? ''
    : 'https://api.' + __colibriBaseHost + '/api/content/site-content';

window.COLIBRI_CMS_CONFIG = {
  apiEndpoint: window.COLIBRI_API_ENDPOINT || __colibriDefaultApiEndpoint,
  endpoint: './data/site-content.json',
  previewStorageKey: 'colibri.cms.preview',
  blogSiteStorageKey: 'colibri.cms.blogSiteData',
  runtimeSiteStorageKey: 'colibri.cms.siteRuntime'
};
