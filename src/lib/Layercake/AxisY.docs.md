Layercake components can be useful for out-of-the-box Svelte charts. Often, however, they are not built according to Urban style. This AxisY component takes those available in Layercake and updates them to use Urban font family, colors, and sizes. 

Furthermore, while Layercake components are often externally updated, this axis here is set in time at a stage where they will not break our builds. Any updates to merge in newer Layercake code will happen not project to project but here, at source, when decided necessary. Therefore, this axis will always work with expected parameters.


## Usage

Layercake axes must be built inside a Layercake component and context, and, further, within an Svg component. Both can be imported from the layercake package. The Layercake object must be passed flat array (not object) data and domain before anything can be initialized and rendered, and these are used across all components used to craft a chart.

## Want to update axis style straight from the Layercake repo?
Use this css instead: 
```js
<style>
    .tick, .axis-label {
      font-size: 12px;
      font-family: var(--font-family-sans-serif);
    }
  
    .tick line {
      stroke: #dedddd;
    }
    .tick:first-of-type line {
      stroke: #000000;
    }
</style>
```


```js
import { AxisY } from "@urbaninstitute/dataviz-components";
```
