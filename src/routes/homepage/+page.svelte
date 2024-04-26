<script lang="ts">

    import Tabs from "../../components/Tabs.svelte";
    import {deleteToken} from "../../auth/TokenHandling.js";


    function handleLogout() {
        deleteToken()
    }


    let items = [
        {
            label: "Your Files",
            value: 1,
            component: ""
        },
        {
            label: "Account Settings",
            value: 2,
            component: ""
        },
        {
            label: "Public Key Settings",
            value: 3,
            component: ""
        },
        {
            label: "About",
            value: 4,
            component: ""
        }
    ];
</script>

<style>
    /* Container styling */
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        /* Set a minimum width to ensure it's not too narrow */
        min-width: 100vh;
        background-color: rgba(242, 242, 242, 0);
    }

    /* Form styling */
    .form-container {
        min-height: 80vh;
        min-width: 80vh; /* Corrected value */
        padding: 20px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

</style>

<div class="container">
    <div class="form-container">
        <Tabs {items}/>

        <footer class ="logout-footer">
            <button class="logout" on:click={handleLogout}>Logout
            </button>
        </footer>
    </div>
</div>
