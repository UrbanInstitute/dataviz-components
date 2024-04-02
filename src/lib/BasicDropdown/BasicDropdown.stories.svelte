<script context="module">
  import BasicDropdown from "./BasicDropdown.svelte";

  export const meta = {
    title: "Components/BasicDropdown",
    description: "A basic dropdown component that uses a <select> element under the hood.",
    component: BasicDropdown,
    tags: ["autodocs"],
    argTypes: {
      arrowFillColor: { control: "color" },
      data: { control: "object" }
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
    { value: "Ohio", label: "Ohio" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "New York", label: "New York" },
    { value: "Maryland", label: "Maryland" }
  ];
</script>

<Template let:args>
  <BasicDropdown {...args} on:change />
</Template>

<Story
  name="Default"
  args={{
    id: "dropdown-story",
    dropdownWidth: 260,
    inlineLabel: "Dropdown label",
    arrowFillColor: "#1696D1",
    placeholder: "Select a state",
    data: sampleData
  }}
/>

<Story
  name="With value specified"
  args={{
    id: "dropdown-story-2",
    inlineLabel: "Dropdown with value",
    placeholder: "Select a state",
    value: "Ohio",
    data: sampleData
  }}
/>

<Story
  name="With value selected"
  args={{
    id: "dropdown-story-3",
    inlineLabel: "Dropdown with selected value",
    placeholder: "Select a state",
    data: sampleData
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
  name="With placeholder set to null and no value set"
  args={{
    id: "dropdown-story-4",
    inlineLabel: "Dropdown without a value",
    placeholder: null,
    data: sampleData
  }}
/>
