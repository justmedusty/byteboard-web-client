<script>
    import './styles.css';
    import MainHeader from "./MainHeader.svelte";
    import {Toaster} from "svelte-french-toast";
</script>

<Toaster/>
<div class="app">
    <MainHeader/>

    <main>
        <div class="content-box">
            <slot/>
        </div>

    </main>

</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-content: center;
    }

    .content-box{
        min-width: inherit;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
        min-width: fit-content;
        align-content: center;
        align-items: center;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>