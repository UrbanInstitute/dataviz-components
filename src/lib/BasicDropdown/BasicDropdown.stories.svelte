<script context="module">
  import BasicDropdown from "./BasicDropdown.svelte";
  import IconDownload from "$lib/Button/IconDownload.svelte";
  import urbanColors from "$lib/utils/urbanColors.js";

  export const meta = {
    title: "Components/BasicDropdown",
    description: "A basic dropdown component that uses a <select> element under the hood.",
    component: BasicDropdown,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        options: ["primary", "secondary-blue", "secondary-black", "secondary-yellow"],
        control: { type: "select" }
      },
      data: { control: "object" },
      showLabel: { control: "boolean" },
      value: { control: "text" },
      placeholder: { control: "text" }
    },
    parameters: {
      docs: {
        description: {
          component: "Basic HTML dropdown adhering to Urban styles."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { fireEvent, within, expect } from "@storybook/test";

  const sampleData = [
    { value: "ohio", label: "Ohio" },
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "new_york", label: "New York" },
    { value: "maryland", label: "Maryland" }
  ];
</script>

<Template let:args>
  <BasicDropdown
    variant="primary"
    data={sampleData}
    inlineLabel="Dropdown label"
    {...args}
    on:change
  />
</Template>

<Story
  name="Default"
  args={{
    id: "dropdown-story",
    placeholder: "Select a state"
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectEl = canvas.getByLabelText("Dropdown with selected value", {
      selector: "select"
    });
    await fireEvent.change(selectEl, { target: { value: sampleData[1].value } });
    expect(selectEl.value).toBe(sampleData[1].value);
    await fireEvent.change(selectEl, { target: { value: sampleData[3].value } });
    expect(selectEl.value).toBe(sampleData[3].value);
  }}
/>

<Story
  name="With value specified"
  args={{
    id: "dropdown-story-2",
    placeholder: "Select a state",
    value: "pennsylvania"
  }}
/>

<Story
  name="With placeholder set to null and no value set (auto-selects first)"
  args={{
    id: "dropdown-story-4",
    placeholder: null
  }}
/>

<Story
  name="Secondary variant (blue) with label shown"
  args={{
    variant: "secondary-blue",
    id: "dropdown-story-5",
    inlineLabel: "Select a state",
    showLabel: true,
    placeholder: null
  }}
/>

<Story
  name="Secondary variant (black) with label shown"
  args={{
    variant: "secondary-black",
    id: "dropdown-story-6",
    inlineLabel: "Select a state",
    showLabel: true,
    placeholder: null
  }}
/>

<Story
  name="Secondary variant (yellow) with label shown"
  args={{
    variant: "secondary-yellow",
    id: "dropdown-story-7",
    inlineLabel: "Select a state",
    showLabel: true,
    placeholder: null
  }}
/>

<Story
  name="Secondary variant (blue) with label hidden"
  args={{
    variant: "secondary-blue",
    id: "dropdown-story-8",
    placeholder: "Select a state"
  }}
/>

<Story
  name="Secondary variant (black) with label hidden"
  args={{
    variant: "secondary-black",
    id: "dropdown-story-9",
    placeholder: "Select a state"
  }}
/>

<Story
  name="Secondary variant (yellow) with label hidden"
  args={{
    variant: "secondary-yellow",
    id: "dropdown-story-10",
    placeholder: "Select a state"
  }}
/>

<Story name="Custom icon (uncommon)">
  <BasicDropdown
    variant="primary"
    id="dropdown-story-11"
    data={sampleData}
    inlineLabel="Dropdown label"
    on:change
  >
    <IconDownload slot="icon" size={16} fill={urbanColors.blue_shade_darker} />
  </BasicDropdown>
</Story>
