<script lang="ts">
    export let speedLimit = 120;
    $: smallFont = speedLimit.toString().length > 2;
</script>

<div
    class="bg-yellow-400 select-none w-48 aspect-square rounded-full border-[20px] border-red-600 grid place-content-center font-bold text-8xl"
    class:text-7xl={smallFont}
    >
    {speedLimit}
</div>
