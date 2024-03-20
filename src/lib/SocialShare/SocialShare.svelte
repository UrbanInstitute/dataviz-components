<script>
  import twitterIcon from "./IconTwitter.svelte";
  import xIcon from "./IconX.svelte";
  import facebookIcon from "./IconFacebook.svelte";
  import linkedinIcon from "./IconLinkedin.svelte";
  import mailIcon from "./IconMail.svelte";

  /**
   * URL to share on social media platforms
   * @type {string}
   */
  export let shareUrl;

  /**
   * An optional custom click handler to be called when any share button is clicked
   * @param {import("svelte").ComponentEvents<This>} evt - A Svelte component event
   * @param {string} platform - The name of the social media platform the user has clicked
   * @returns {void}
   */
  export let onClick = function(evt, platform) {};

  /**
   * The color variant of the social media icons
   * @type {"dark" | "light"} [variant = "dark"]
   */
  export let variant = "dark";

  /**
   * The size of the social media icons
   * @type {number} [iconSize = 24]
   */
  export let iconSize = 24;

  $: encoded_url_to_share = encodeURIComponent(shareUrl);

  $: socials = [
    {
      name: "facebook",
      icon: facebookIcon,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encoded_url_to_share}`
    },
    {
      name: "X",
      icon: xIcon,
      url: `https://twitter.com/intent/tweet?text=&url=${encoded_url_to_share}`
    },
    {
      name: "linkedin",
      icon: linkedinIcon,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded_url_to_share}`
    },
    {
      name: "email",
      icon: mailIcon,
      url: `mailto: ?subject=&body=${encoded_url_to_share}`
    }
  ];
</script>

<div class="social-container">
  {#each socials as social}
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      role="button"
      aria-label={`${social.name}-share`}
      on:click={(evt) => onClick(evt, social.name)}
      ><span class="social-icon" style:width={iconSize} style:height={iconSize}><svelte:component this={social.icon} {variant} size={iconSize}/></span></a
    >
  {/each}
</div>

<style>
  .social-container {
    display: flex;
    justify-content: center;
    gap: var(--spacing-6);
  }
  .social-icon {
    display: block;
  }
</style>
