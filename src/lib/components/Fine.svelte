<script lang="ts">
    import SpeedLimitChange from "$lib/components/SpeedLimitChange.svelte";
    import Speedometer from "$lib/components/Speedometer.svelte";

    const fineStep = 400;
    const fineStart = 1600;

    const fineAmounts = Array(7)
        .fill(0)
        .map((_, i) => fineStart + i * fineStep - (i === 0 ? 100 : 0));

    const speedAmounts = Array(7)
        .fill(0)
        .map((_, i) => 10 + i * 5);

    let mySpeed = 50;
    let speedLimit = 60;

    $: overSpeedLimit = Math.max(0, mySpeed - speedLimit);
    $: isSpeeding = overSpeedLimit > 0;
    $: fineSlowRoad = !(speedLimit > 50);
    $: suspensionSlowRoad = !(speedLimit > 30);

    $: speedingIndex = speedAmounts.findIndex((x) => x >= overSpeedLimit);

    $: fineAmount = !isSpeeding ? 0 : fineAmounts[speedingIndex];

    $: displaySpeedAmounts = [
        0,
        ...speedAmounts.slice(0, fineSlowRoad ? 5 : 6),
    ];
</script>

<div class="bg-green-300 p-4">
    <table>
        <thead>
            <tr>
                <th>Speed</th>
                <th>Fine</th>
            </tr>
        </thead>
        <tbody>
            {#each displaySpeedAmounts as speedAmount, i}
                <tr>
                    <td>{speedAmount}</td>
                    <td>{fineAmounts[i + (fineSlowRoad ? 1 : 0)]}</td>
                </tr>
            {/each}
        </tbody>
    </table>

    <SpeedLimitChange {speedLimit} />
    <Speedometer speed={mySpeed} />

    <input type="range" bind:value={mySpeed} min="0" max="250" />
    <input type="range" bind:value={speedLimit} min="30" max="120" step="10" />

    <pre>{JSON.stringify(displaySpeedAmounts, null, 2)}</pre>
    <pre>{JSON.stringify(
            speedAmounts.findIndex((x) => x >= overSpeedLimit),
            null,
            2
        )}</pre>
    <pre>{JSON.stringify(
            {
                fineAmount,
                speedingIndex,
                mySpeed,
                speedLimit,
                overSpeedLimit,
                isSpeeding,
                fineSlowRoad,
                suspensionSlowRoad,
            },
            null,
            2
        )}</pre>

    <pre>{JSON.stringify(speedAmounts, null, 2)}</pre>
    <pre>{JSON.stringify(fineAmounts, null, 2)}</pre>
</div>
