<script lang="ts">
    export let speed: number;
    $: crazySpeed = speed > 160; // 160 is the max speed of the speedometer
</script>
<div
    class="overflow-hidden bg-black grid-cols-2 grid-rows-2 text-white w-48 aspect-square rounded-full grid place-content-center relative"
>
    {speed}

    <div class=" absolute inset-0 grid place-content-center ">
        <div class="grid place-items-center translate-y-2">
            <div class="text-2xl z-10 font-bold">
                {speed}
            </div>
            <div class="text-xs opacity-50">km/h</div>
        </div>
    </div>

    <div
        class="  origin-bottom-left relative grid content-center"
        style="transform: rotate({190 + Math.min(speed, 160) * 1.5}deg);"
    >
        <div
            class="from-yellow-300 h-1 -rotate-45 bg-gradient-to-l "
            class:from-red-600={crazySpeed}
        />
    </div>
</div>
