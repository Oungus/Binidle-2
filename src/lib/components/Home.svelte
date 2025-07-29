<script>
  import { Play, Pause, StepForward, StepBack, Repeat, X, ArrowLeftRight, Ampersand, SplinePointer } from '@lucide/svelte';

  let instructions = $state([
    {
      "operator": "x",
      "relative": null,
      "absolute": null
    },
    {
      "operator": "m",
      "relative": 1,
      "absolute": null
    },
    {
      "operator": "a",
      "relative": null,
      "absolute": 4
    }
  ]);
  let cursor = $state(0);
  let i2c = $state([
    {
      "operator": "x",
      "relative": null,
      "absolute": null
    },
    {
      "operator": "m",
      "relative": 3,
      "absolute": null
    },
    {
      "operator": "a",
      "relative": null,
      "absolute": 4
    },
    {
      "operator": "m",
      "relative": 3,
      "absolute": null,
    },
    {
      "operator": "x",
      "relative": null,
      "absolute": null
    },
    {
      "operator": "m",
      "relative": 1,
      "absolute": null,
    },
  ]);
  let c2c = $state([0,0,0,0,0]);
  let sc  = $state([0,0,0,0,0]);

  let is_running = $state(false);

  run_program(i2c, c2c, true);
  
  async function run_program(insns, code, is_c2c) {
    // loop through instructions
    for (let i = 0; i < insns.length; i++) {
      console.log(insns[i]['operator'])
      let pos = 0;
      if (insns[i]['relative'] != null) {
        pos = (cursor + insns[i]['relative']) % c2c.length;
      } else {
        pos = insns[i]['absolute'] % c2c.length;
      }

      switch (insns[i]['operator']) {
        case 'x':
          code[cursor] ^= 1;
          break;
        case 'm':
          cursor = pos;
          break;
        case 'a':
          code[cursor] &= code[pos];
          break;
        case 'o':
          code[cursor] |= code[pos];
          break;
      }

      // wait for realism
      //if (!is_c2c) {
      await new Promise(r => setTimeout(r, 200));
      //}
    }

    if (is_c2c) {
      cursor = 0;
    }
    
    // turn off pause button
    is_running = false;
  }

  function reset() {
    sc = [0,0,0,0,0];
    cursor = 0;
  }

  function toggle_program() {
    if (!is_running) {
      run_program(instructions, sc);
    }
  
    is_running = !is_running;
  }
</script>

<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">
  code to crack:

  <div class="flex flex-row">
    {#each sc as bit, idx}
      <pre class={`pre m-auto ${idx == cursor ? 'bg-red-400' : ''}`}>{bit}</pre>
    {/each}
  </div>

  <div class="flex flex-row">
    {#each c2c as bit, idx}
      <pre class={`pre m-auto ${idx == cursor ? 'bg-blue-400' : ''}`}>{bit}</pre>
    {/each}
  </div>

  <hr class="hr border-t-4 border-stone-500 m-1" />
  
  <div class="card w-full max-w-md bg-stone-400 preset-filled-surface-100-900 p-4 text-center">
    <pre class="pre">instructions</pre>

    <div class="flex flex-row">
      {#each instructions as insn, idx}
        <pre class={`pre m-auto`}>{insn['operator'] + (insn['relative'] != null ? `{${insn['relative']}}` : (insn['absolute'] != null ? `[${insn['absolute']}]` : ''))}</pre>
      {/each}
    </div>

    <div class="flex flex-row">
      <button onclick={add_insn}><X /></button>
      <button onclick={add_insn}><ArrowLeftRight /></button>
      <button onclick={add_insn}><Ampersand /></button>
      <button onclick={add_insn}><SplinePointer /></button>
    </div>
  </div>

  <div class="flex flex-row">
    <StepBack />
      {#if is_running}
      <Pause />
      {:else}
      <button onclick={toggle_program}>
        <Play />
      </button>
      {/if}
    <StepForward />
    <button onclick={reset}><Repeat /></button>
  </div>
</div>
