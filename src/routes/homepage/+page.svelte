<script lang="ts">

    import Tabs from "../../components/Tabs.svelte";
    import {deleteToken} from "../../auth/TokenHandling.js";
    import PostsFeed from "../../components/PostsFeed.svelte";


    function handleLogout() {
        deleteToken()
    }


    let items = [
        {
            label: "Home",
            value: 1,
            component: PostsFeed
        },
        {
            label: "Private Messages",
            value: 2,
            component: ""
        },
        {
            label: "My Profile",
            value: 3,
            component: ""
        },
        {
            label: "Notifications",
            value: 4,
            component: ""
        },
        {
            label: "About",
            value: 5,
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
        min-width: 100vh;
        background-color: rgba(242, 242, 242, 0);
    }

    /* Form styling */
    .form-container {
        min-height: 80vh;
        min-width: 80vh;
        padding: 20px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .logout-footer {
        text-align: center; /* Center the contents horizontally */
    }

    .logout {
        min-width: 15vh;
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
