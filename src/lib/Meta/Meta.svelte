<!-- @component `Meta` Meta tags to be included the <head> of your HTML document -->
<script>
  /**
   * The title to be used for the HTML page
   * @type {string}
   */
  export let title = "";

  /** @type {string} */

  /**
   * The description to be used for the HTML page
   * @type {string}
   */
  export let description = "";

  /**
   * The URL to be used for the og:url and the canonical URL of the HTML page
   * @type {string}
   */
  export let url = "";

  /**
   * The site_name to be used for the og:site_name property for the page
   * @type {string}
   */
  export let site_name = "Urban Institute";

  /**
   * A list of author names to be included in the schema.org metadata for the page
   * @type {string[]}
   */
  export let authors = [];

  /**
   * A list of keywords to be included in the schema.org metadata for the page
   * @type {string[]}
   */
  export let keywords = [];

  /**
   * URL path to an image to be used as the social media image for the HTML page
   * @type {string}
   */
  export let social_image = "";

  $: schema_meta = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: title,
    url: url,
    thumbnailUrl: `${social_image}`,
    dateCreated: "2023-10-25T05:00:00.000Z",
    articleSection: "Data Tool",
    creator: authors,
    keywords: keywords
  };
  $: schema_meta_markup = `<script type="application/ld+json">${JSON.stringify(
    schema_meta
  )}<\/script>`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="" />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content={social_image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@urbaninstitute" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={social_image} />

  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href={url} />

  <!-- schema.org metadata -->
  {@html schema_meta_markup}
  <!-- End shema.org metadata -->
</svelte:head>
