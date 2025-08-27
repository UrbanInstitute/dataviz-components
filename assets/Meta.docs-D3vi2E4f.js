import{j as t}from"./iframe-Bc23XYIh.js";import{useMDXComponents as r}from"./index-WbD3r3ml.js";import{S as a}from"./Meta.stories-CM5Y3INg.js";import{M as i,b as m}from"./blocks-DVtUshFY.js";import"./lifecycle-BvYk3ZZi.js";import"./Meta-BaEDUEaD.js";import"./svelte-head-D-GpmO5A.js";import"./html-DU1KLMhD.js";import"./attributes-Cxy0te-K.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./create-runtime-stories-DZzrqf4P.js";function o(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Meta",of:a}),`
`,t.jsx(e.h1,{id:"meta",children:"Meta"}),`
`,t.jsxs(e.p,{children:["A component to manage meta tags for the HTML document. This component generates HTML to be rendered in the ",t.jsx(e.code,{children:"<head>"})," of your current page, defining necessary page metadata, titles, descriptions and social images."]}),`
`,t.jsx(e.p,{children:"Usage:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { Meta } from "@urbaninstitute/dataviz-components";
`})}),`
`,t.jsx(e.p,{children:"The generated HTML follows the following structure:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<title>{title}</title>
<meta name="description" content="{description}" />
<meta name="author" content="" />

<meta property="og:title" content="{title}" />
<meta property="og:site_name" content="{site_name}" />
<meta property="og:url" content="{url}" />
<meta property="og:description" content="{description}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />

<meta property="og:image" content="{social_image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@urbaninstitute" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{social_image}" />

<meta name="robots" content="max-image-preview:large" />

<link rel="canonical" href="{url}" />

<!-- schema.org metadata -->
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: title,
    url: url,
    thumbnailUrl: \`\${social_image}\`,
    dateCreated: \`\${publish_date}T05:00:00.000Z\`,
    articleSection: "Data Tool",
    creator: authors,
    keywords: keywords
  }
<\/script>
<!-- End shema.org metadata -->
`})}),`
`,t.jsx(m,{})]})}function M(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{M as default};
