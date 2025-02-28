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
  export let siteName = "Urban Institute";

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
  export let socialImage = "";

  /**
   * The publication date for the page in the format of 1968-01-01
   * @type {string}
   */
  export let publishDate;

  /**
   * The section of the article for the schema.org metadata
   * @type {string}
   */
  export let articleSection = "Data Tool";

  /**
   * Should the page be hidden from search engines?
   * @type {boolean}
   */
  export let robotsNoIndex = false;

  $: schemaMeta = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: title,
    url: url,
    thumbnailUrl: `${socialImage}`,
    dateCreated: `${publishDate}T05:00:00.000Z`,
    articleSection: articleSection,
    creator: authors,
    keywords: keywords
  };
  $: schemaMetaMarkup = `<script type="application/ld+json">${JSON.stringify(
    schemaMeta
  )}<\/script>`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="" />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content={socialImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@urbaninstitute" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={socialImage} />

  <meta name="robots" content="max-image-preview:large" />
  {#if robotsNoIndex}
    <meta name="robots" content="noindex" />
  {/if}

  <link rel="canonical" href={url} />

  <!-- schema.org metadata -->
  {@html schemaMetaMarkup}
  <!-- End shema.org metadata -->
</svelte:head>
