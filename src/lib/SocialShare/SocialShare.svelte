<script>
  import twitterIcon from "./IconTwitter.svelte";
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

  const base_share_url = "https://www.addtoany.com/add_to";
  $: encoded_url_to_share = encodeURIComponent(shareUrl);

  $: socials = [
    {
      name: "twitter",
      icon: twitterIcon,
      url: `${base_share_url}/twitter?linkurl=${encoded_url_to_share}&linknote=`
    },
    {
      name: "facebook",
      icon: facebookIcon,
      url: `${base_share_url}/facebook?linkurl=${encoded_url_to_share}&linknote=`
    },
    {
      name: "linkedin",
      icon: linkedinIcon,
      url: `${base_share_url}/linkedin?linkurl=${encoded_url_to_share}&linknote=`
    },
    {
      name: "email",
      icon: mailIcon,
      url: `${base_share_url}/email?linkurl=${encoded_url_to_share}&linknote=`
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
    gap: 24px;
  }
  .social-icon {
    display: block;
  }
</style>
