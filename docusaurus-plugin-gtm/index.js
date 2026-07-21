module.exports = function (context, options) {
  const isProd = process.env.NODE_ENV === "production";
  const storageKey = options.storageKey || "cookie-consent-preferences";
  const waitForUpdate = options.waitForUpdate || 500;

  return {
    name: "docusaurus-plugin-gtm",
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }

      const consentDefault = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent','default',{
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    analytics_storage:'denied',
    functionality_storage:'denied',
    personalization_storage:'denied',
    security_storage:'granted',
    wait_for_update:${waitForUpdate}
  });
  gtag('set','ads_data_redaction',true);
  try {
    var c = JSON.parse(localStorage.getItem(${JSON.stringify(storageKey)}));
    if (c && c.consentGiven) {
      gtag('consent','update',{
        ad_storage: c.marketing?'granted':'denied',
        ad_user_data: c.marketing?'granted':'denied',
        ad_personalization: c.marketing?'granted':'denied',
        analytics_storage: c.analytics?'granted':'denied',
        functionality_storage: c.functional?'granted':'denied',
        personalization_storage: c.functional?'granted':'denied'
      });
    }
  } catch (e) {}
})();`;

      return {
        headTags: [
          // Consent Mode defaults must run before the GTM loader below.
          { tagName: "script", innerHTML: consentDefault },
          `<!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${options.gtm}');</script>
  <!-- End Google Tag Manager -->`,
        ],
        postBodyTags: [
          `<!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${options.gtm}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->`,
        ],
      };
    },
  };
};
