import{j as t}from"./jsx-runtime-587a15cc.js";import{S as r}from"./Meta.stories-16312e5e.js";import{M as i,C as s}from"./index-85c0d2fa.js";import{u as a}from"./index-69d9fc06.js";import"./index-e3b48b1c.js";import"./lifecycle-6e31b59c.js";import"./collect-stories-7274ab70.js";import"./iframe-cf1817b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function o(n){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},a(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Meta",of:r}),`
`,t.jsx(e.h1,{id:"meta",children:"Meta"}),`
`,t.jsxs(e.p,{children:["A component to manage meta tags for the HTML document. This component generates HTML to be rendered in the ",t.jsx(e.code,{children:"<head>"})," of your current page, defining necessary page metadata, titles, descriptions and social images."]}),`
`,t.jsx(e.p,{children:"Usage:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { Meta } from "@urban-institute/dataviz-components";
`})}),`
`,t.jsx(e.p,{children:"The generated HTML follows the following structure:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<title>{title}</title>
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
`,t.jsx(s,{})]})}function M(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(o,n)})):o(n)}export{M as default};
