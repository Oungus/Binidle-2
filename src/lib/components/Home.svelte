<script>
  import { Play, Pause, StepForward, StepBack, Repeat, X, ArrowLeftRight, Ampersand, SplinePointer, Trash2, UserRound, Crosshair } from '@lucide/svelte';

  let instructions = $state([]);
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
  let is_relative = $state(true);
  let insn_value = $state(0);

  run_program(i2c, c2c, true);

  function add_insn(insn_element) {
    console.log(insn_element.target)
    let insn_operator = insn_element.target.children[0].classList.values().find((x) => x.endsWith('-insn')).split('-')[0];
    instructions.push({
      "operator": insn_operator,
      "relative": is_relative ? insn_value : null,
      "absolute": is_relative ? null : insn_value
    });
  }

  function del_insn(idx) {
    return () => {
      instructions.splice(idx, 1)
    };
  }
  
  async function run_program(insns, code, is_c2c) {
    // loop through instructions
    for (let i = 0; i < insns.length; i++) {
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
      <pre class={`pre ${idx == cursor ? 'bg-red-400' : ''}`}>{bit}</pre>
    {/each}
  </div>

  <div class="flex flex-row">
    {#each c2c as bit, idx}
      <pre class={`pre ${idx == cursor ? 'bg-blue-400' : ''}`}>{bit}</pre>
    {/each}
  </div>

  <hr class="hr border-t-4 border-stone-500 m-1" />
  
  <div class="card w-full max-w-md bg-stone-400 preset-filled-surface-100-900 p-4 text-center">
    <pre class="pre">instructions</pre>

    <div class="flex flex-row overflow-x-auto">
      {#each instructions as insn, idx}
        <pre class={`pre p-2 m-2 overflow-x-clip`}><button onclick={del_insn(idx)}><Trash2 class="p-1" /></button>{insn['operator'] + (insn['relative'] != null ? `{${insn['relative']}}` : (insn['absolute'] != null ? `[${insn['absolute']}]` : ''))}</pre>
      {/each}
    </div>

    <div class="flex flex-row">
      <button class="bg-stone-500 m-1 p-1 rounded-sm" onclick={add_insn}><X class="pointer-events-none x-insn m-auto" />xor</button>
      <button class="bg-stone-500 m-1 p-1 rounded-sm" onclick={add_insn}><ArrowLeftRight class="pointer-events-none m-insn m-auto" />move</button>
      <button class="bg-stone-500 m-1 p-1 rounded-sm" onclick={add_insn}><Ampersand class="pointer-events-none a-insn m-auto" />and</button>
      <button class="bg-stone-500 m-1 p-1 rounded-sm" onclick={add_insn}><SplinePointer class="pointer-events-none o-insn m-auto" />or</button>
    </div>

    <div class="flex flex-row">
      <button class={`bg-stone-500 m-1 p-1 rounded-sm ${is_relative == true ? 'bg-stone-200!' : ''}`} onclick={is_relative = true}><UserRound />relative</button>
      <button class={`bg-stone-500 m-1 p-1 rounded-sm ${is_relative == false ? 'bg-stone-200!' : ''}`} onclick={is_relative = false}><Crosshair />absolute</button>
      <label class="bg-stone-500 m-1 p-1 rounded-sm label">
        <span class="label-text">value</span>
        <input type="number" class="input" bind:value={insn_value} placeholder="enter value" />
      </label>
    </div>
  </div>

  <div class="flex flex-row">
    <div class="card p-2 bg-stone-400 flex m-auto mt-3">
      <button class="bg-stone-500 rounded-md p-1 ml-1 mr-1"><StepBack /></button>
      {#if is_running}
        <button class="bg-stone-500 rounded-md p-1 ml-1 mr-1"><Pause /></button>
      {:else}
        <button class="bg-stone-500 rounded-md p-1 ml-1 mr-1" onclick={toggle_program}>
          <Play />
        </button>
      {/if}
      <button class="bg-stone-500 rounded-md p-1 ml-1 mr-1"><StepForward /></button>
      <button class="bg-stone-500 rounded-md p-1 ml-1 mr-1" onclick={reset}><Repeat /></button>
    </div>
  </div>
</div>
