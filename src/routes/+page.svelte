<script>
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  import { House, Cog } from '@lucide/svelte';

  import Home from '$lib/components/Home.svelte';
  import Options from '$lib/components/Options.svelte';

  let value = $state('home');
</script>

<div class="card bg-stone-900 border-surface-100-900 flex h-screen w-full flex-col border-[1px]">
  <!-- Component -->
  <Navigation.Bar {value} onValueChange={(newValue) => (value = newValue)}>
      <Navigation.Tile id="home" label="Home"><House /></Navigation.Tile>
      <Navigation.Tile id="options" label="Options"><Cog /></Navigation.Tile>
  </Navigation.Bar>
  <!-- Content -->
  <div class="flex flex-col items-center justify-center h-full">
    {#if value == 'home'}
      <Home />
    {:else if value == 'options'}
      <Options />
    {/if}
  </div>
</div>
