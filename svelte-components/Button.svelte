<script lang="ts">
  import Text from "$components/Text/Text.svelte";

  type Props = {
    disabled?: boolean;
    variant?: "primary" | "secondary";
    label: string;
    className?: string;
  };

  type LinkProps = Props & {
    as: "link";
    href: string;
    isExternal?: boolean;
  };
  type ButtonProps = Props & {
    as: "button";
    type?: "button" | "submit";
    onClick: () => void;
  };

  const props: LinkProps | ButtonProps = $props();
</script>

{#if props.as === "link"}
  <a
    href={props.href}
    class="button {props.variant} {props.className}"
    aria-disabled={props.disabled}
    target={props.isExternal ? "_blank" : undefined}
    rel={props.isExternal ? "noopener noreferrer" : undefined}
  >
    <Text variant="span" styling="body-lg-medium" className="text">
      {props.label}
    </Text>
  </a>
{:else if props.as === "button"}
  <button
    onclick={() => !props.disabled && props.onClick()}
    class="button {props.variant} {props.className}"
    aria-disabled={props.disabled}
    type={props.type ?? "button"}
  >
    <Text variant="span" styling="body-lg-medium" className="text">
      {props.label}
    </Text>
  </button>
{/if}

<style lang="scss">
  .button {
    // ...

    &:focus-visible {
      // ...
    }
  }

  .primary {
    // ...

    &:hover,
    &:active {
      // ...
    }
  }

  .secondary {
    // ...

    &:hover,
    &:active {
      // ...
    }
  }
</style>
