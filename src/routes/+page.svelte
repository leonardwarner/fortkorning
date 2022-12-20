<script lang="ts">
    import SpeedLimitChange from "$lib/components/SpeedLimitChange.svelte";
    import Speedometer from "$lib/components/Speedometer.svelte";
    import Fine from "$lib/components/Fine.svelte";
    let mySpeed = 50;
    let speedLimit = 50;
    let fabian = true;

$:illegalSpeed = mySpeed > speedLimit;

</script>

<div class="bg-red-200 grid grid-cols-2 h-12 -translate-y-full"

class:translate-y-0={illegalSpeed}

>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="bg-blue-800"
        on:click={() => (fabian = !fabian)}
        class:bg-blue-600={fabian}
    >
       
    </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
        class="bg-blue-800"
        on:click={() => (fabian = !fabian)}
        class:bg-blue-600={!fabian}
    >
       
    </div>

</div>

<h1>Välkommen till fortkörning</h1>

<Fine />

<input type="range" bind:value={mySpeed} min="0" max="250" />
<input type="range" bind:value={speedLimit} min="30" max="120" step="10" />

<input
    type="range"
    min="30"
    max="120"
    bind:value={speedLimit}
    class="range"
    step="10"
/>
<div class="w-full flex justify-between text-xs px-2">
    <span>30</span>
    <span>40</span>
    <span>50</span>
    <span>60</span>
    <span>70</span>
    <span>80</span>
    <span>90</span>
    <span>100</span>
    <span>110</span>
    <span>120</span>
</div>

<SpeedLimitChange {speedLimit} />
<Speedometer speed={mySpeed} />
