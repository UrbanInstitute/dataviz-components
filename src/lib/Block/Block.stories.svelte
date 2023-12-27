<script context="module">
	import Block from "./Block.svelte";

	export const meta = {
		title: "Layout/Block",
		description: "A basic building block of a page",
		component: Block,
		tags: ["autodocs"],
    argTypes: {
      width: {
        default: "body",
        options: ["body", "full"],
        control: "select"
      }
    },
      
	};
</script>

<script>
	import { Story, Template } from "@storybook/addon-svelte-csf";

</script>

<Template let:args>
	<Block {...args} >
    <div style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;">Block</div>
  </Block>
</Template>

<Story
	name="Default"
  args={{
  }}
/>
<Story
	name="Full width"
  args={{
    width: "full"
  }}
/>
<Story
	name="Wide"
  args={{
    width: "wide"
  }}
/>

