<script context="module">
  import ProjectCredits from "./ProjectCredits.svelte";

  export const meta = {
    title: "Components/ProjectCredits",
    description: "A block for project credits",
    component: ProjectCredits,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "A block for project credits"
        }
      }
    }
  };
</script>

<script>
  import TextBlock from "$lib/TextBlock/TextBlock.svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  const sample_data = {
    heading: "Project credits",
    items: [
      {
        label: "Research",
        content: "<a href='https://www.urban.org/' target='_blank'>Firstname Lastname</a>"
      },
      {
        label: "Design",
        content: "<a href='https://www.urban.org/' target='_blank'>Firstname Lastname</a>"
      },
      {
        label: "Data visualization and development",
        content: "<a href='https://www.urban.org/' target='_blank'>Firstname Lastname</a>"
      },
      {
        label: "Writing",
        content: "<a href='https://www.urban.org/' target='_blank'>Firstname Lastname</a>"
      }
    ],
    githubUrl: "https://github.com/urbaninstitute/dataviz-components"
  };
</script>

<Template let:args>
  <ProjectCredits {...args}>
    <TextBlock slot="intro"
      ><em
        >Vitae turpis massa sed elementum tempus. At quis risus sed vulputate odio ut enim blandit
        volutpat. Odio ut sem nulla pharetra. Diam maecenas sed enim ut sem viverra. Nunc lobortis
        mattis aliquam faucibus purus in massa. Vel eros donec ac odio tempor orci. Viverra tellus
        in hac habitasse platea. Eget nunc scelerisque viverra mauris in aliquam set egestas quis.
        Integer enim neque volutpat ac tincidunt vitae semper quis. Sociis natoque penatibus et
        magnis dis parturient montes nascetur ridiculus.</em
      ></TextBlock
    >
  </ProjectCredits>
</Template>

<Story name="Default" args={{ ...sample_data }} />
