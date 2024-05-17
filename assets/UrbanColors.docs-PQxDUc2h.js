import{j as e}from"./jsx-runtime-BOjWsBnT.js";import{u as c}from"./index-Byvx7BeH.js";import{M as i,d as n,e as r}from"./index-B-_Seo6R.js";import{u as l}from"./urbanColors-BkxYcPwH.js";import"./index-Czbo3Ue1.js";import"./iframe-V8BA26Ai.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";function o(a){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"utils/urbanColors"}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.p,{children:["The colors utility module provides easy access to the Urban Institute's brand colors. For best practices on selecting colors for data visualizations, see the ",e.jsx(s.a,{href:"https://urbaninstitute.github.io/graphics-styleguide/#color",rel:"nofollow",children:"Urban Institute Data Visualizaton Styleguide"}),"."]}),`
`,e.jsx(s.p,{children:"To use these, utilities, import the module like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { urbanColors } from "@urbaninstitute/dataviz-components/utils";
`})}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary Colors"}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Primary Colors",subtitle:"",colors:{blue:l.blue,gray:l.gray,black:l.black,yellow:l.yellow,magenta:l.magenta,green:l.green,space_gray:l.space_gray,red:l.red}})}),`
`,e.jsxs(s.p,{children:["Any color can be used directly from the ",e.jsx(s.code,{children:"urbanColors"})," object:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// equal to "#1696D2"
const blue = urbanColors.blue;

// equal to "#EC00BB"
const magenta = urbanColors.magenta;
`})}),`
`,e.jsx(s.h2,{id:"color-shades",children:"Color shades"}),`
`,e.jsx(s.p,{children:"Each of Urban's primary colors also comes in a range of different shades. These can be useful for different data visualization scenarios."}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Blue shades",subtitle:"",colors:l.getBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getBlues();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#CFE8F3", "#A2D4EC", "#73BFE2", "#46ABDB", "#1696D2", "#12719E", "#0A4C6A", "#062635" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Gray shades",subtitle:"",colors:l.getGrays()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getGrays();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#F5F5F5", "#ECECEC", "#E3E3E3", "#DCDBDB", "#D2D2D2", "#9D9D9D", "#696969", "#353535" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Yellow shades",subtitle:"",colors:l.getYellows()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getYellows();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#FFF2CF", "#FCE39E", "#FDD870", "#FCCB41", "#FDBF11", "#E88E2D", "#CA5800", "#843215" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Magenta shades",subtitle:"",colors:l.getMagentas()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getMagentas();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#F5CBDF", "#EB99C2", "#E46AA7", "#E54096", "#EC00BB", "#af1f6b", "#761548", "#351123" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Green shades",subtitle:"",colors:l.getGreens()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getGreens();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#DCEDD9", "#BCDEB4", "#98CF90", "#78C26D", "#55B748", "#408941", "#2C5C2D", "#1A2E19" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Space gray shades",subtitle:"",colors:l.getSpaceGrays()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getSpaceGrays();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#D5D5D4", "#ADABAC", "#848081", "#5C5859", "#332D2F", "#262223", "#1A1717", "#0E0C0D" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Red shades",subtitle:"",colors:l.getReds()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getReds();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#F8D5D4", "#F1AAA9", "#E9807D", "#E25552", "#DB2B27", "#A4201D", "#6E1614", "#1A2E19" ]
`})}),`
`,e.jsx(s.h2,{id:"dataviz-helpers",children:"DataViz Helpers"}),`
`,e.jsx(s.p,{children:"Below are a few helper functions to generate some useful default color palettes."}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Categorical colors",subtitle:"",colors:l.getCategoricalColors()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#1696D2", "#FDBF11", "#EC00BB", "#000000", "#D2D2D2", "#73BFE2"]
`})}),`
`,e.jsx(s.p,{children:"This function generates a 6 color palette by default, but you can specify any number between 2 and 6."}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Categorical colors",subtitle:"2 colors",colors:l.getCategoricalColors(2)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(2);
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#1696D2", "#FDBF11" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Categorical colors",subtitle:"3 colors",colors:l.getCategoricalColors(3)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(3);
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#1696D2", "#FDBF11", "#000000" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Categorical colors",subtitle:"4 colors",colors:l.getCategoricalColors(4)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(4);
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#1696D2", "#FDBF11", "#000000", "#EC00BB" ]
`})}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Categorical colors",subtitle:"5 colors",colors:l.getCategoricalColors(5)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(5);
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#1696D2", "#FDBF11", "#000000", "#EC00BB", "#D2D2D2" ]
`})}),`
`,e.jsx(s.h2,{id:"diverging-colors",children:"Diverging colors"}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Diverging colors",subtitle:"Useful for maps with diverging data",colors:l.getDivergingColors()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getDivergingColors();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#CA5800", "#FDBF11", "#FDD870", "#FFF2CF", "#CFE8F3", "#73BFE2", "#1696D2", "#0A4C6A" ]
`})}),`
`,e.jsx(s.h2,{id:"blues-for-maps",children:"Blues for maps"}),`
`,e.jsx(s.p,{children:"The style guide specifies a specific set of colors for usage in choropleth maps."}),`
`,e.jsx(n,{children:e.jsx(r,{title:"Blue colors for maps",subtitle:"",colors:l.getMapBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getMapBlues();
`})}),`
`,e.jsx(s.p,{children:"Color values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`[ "#CFE8F3", "#73BFE2", "#1696D2", "#0A4C6A", "#000000", ]
`})})]})}function b(a={}){const{wrapper:s}={...c(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(o,{...a})}):o(a)}export{b as default};
