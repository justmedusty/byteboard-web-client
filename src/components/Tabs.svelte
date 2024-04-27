<script>
    export let items = [];
    export let activeTabValue = 1;

    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<div class="button-row">
    {#each items as item}
        <button class={activeTabValue === item.value ? 'active' : ''} on:click={handleClick(item.value)}>
            {item.label}
        </button>
    {/each}
</div>

{#each items as item}
    {#if activeTabValue === item.value}
        <div class="box">
            <svelte:component this={item.component}/>
        </div>
    {/if}
{/each}

<style>
    .box {
        margin-bottom: 10px;
        padding: 40px;
        border-radius: .5rem .5rem .5rem .5rem;
        background-color: rgba(51, 51, 51, 0.24);
        align-content: center;
    }

    .button-row {
        display: flex;
        border: black;
        justify-content: center;
        margin-bottom: 25px;
        background-color: rgba(0, 0, 0, 0.44);
        border-radius: 1rem 1rem 1rem 1rem;
        padding: 15px;
        min-width: fit-content;
    }

    .button-row button {
        border: none;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        margin: 0 5px;
    }

    .button-row button.active {
        color: #495057;
        background-color: rgba(255, 255, 255, 0.5);
        font-weight: 900;
    }

    .button-row button:hover {
        background-color: rgba(255, 255, 255, 0.52);
    }
</style>
