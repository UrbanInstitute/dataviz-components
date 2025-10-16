<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import IconBluesky from "./IconBluesky.svelte";
  import IconFacebook from "./IconFacebook.svelte";
  import IconLinkedin from "./IconLinkedin.svelte";
  import IconMail from "./IconMail.svelte";
  import IconThreads from "./IconThreads.svelte";
  import IconTwitter from "./IconTwitter.svelte";
  import IconX from "./IconX.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [shareUrl=""] - URL to share on social media platforms
   * @property {(evt: MouseEvent, platform: string) => void} [onclick=(evt, platform) => {}] - An optional custom click handler to be called when any share button is clicked
   * @property {"dark" | "light"} [variant="dark"] - The color variant of the social media icons
   * @property {number} [iconSize=24] - The size of the social media icons
   */

  /** @type {Props} */
  let {
    shareUrl = "",
    onclick = (evt, platform) => {},
    variant = "dark",
    iconSize = 24
  } = $props();

  let encodedUrlToShare = $derived(encodeURIComponent(shareUrl));

  let socials = $derived([
    {
      name: "linkedin",
      component: IconLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrlToShare}`
    },
    {
      name: "bluesky",
      component: IconBluesky,
      url: `https://bsky.app/intent/compose?text=${encodedUrlToShare}`
    },
    {
      name: "threads",
      component: IconThreads,
      url: `https://threads.net/intent/post?url=${encodedUrlToShare}`
    },
    {
      name: "facebook",
      component: IconFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrlToShare}`
    },
    {
      name: "X",
      component: IconX,
      url: `https://twitter.com/intent/tweet?text=&url=${encodedUrlToShare}`
    },
    {
      name: "email",
      component: IconMail,
      url: `mailto: ?subject=&body=${encodedUrlToShare}`
    }
  ]);
</script>

<div class="social-container">
  {#each socials as { component: Icon, name, url }}
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      role="button"
      aria-label={`${name}-share`}
      onclick={(evt) => onclick(evt, name)}
      ><span class="social-icon" style:width={`${iconSize}px`} style:height={`${iconSize}px`}
        ><Icon {variant} size={iconSize} /></span
      ></a
    >
  {/each}
</div>

<style>
  .social-container {
    display: flex;
    justify-content: center;
    gap: var(--spacing-4);
  }
  .social-icon {
    display: block;
  }
</style>
