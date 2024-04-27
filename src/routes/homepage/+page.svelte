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
            label: "Account Settings",
            value: 5,
            component: ""
        },
        {
            label: "About",
            value: 6,
            component: ""
        }
    ];
</script>
<style>

    .logout-footer {
        text-align: center; /* Center the contents horizontally */
    }

    .logout {
        min-width: 15vh;
    }
</style>

<div class="container">
    <div class="form-container">
        <div class="tabs">
            <Tabs {items}/>
        </div>


        <footer class ="logout-footer">
            <button class="logout" on:click={handleLogout}>Logout
            </button>
            <footer>
                <p>Visit <a style="color: blue" href="https://github.com/justmedusty">My Github</a></p>
            </footer>
        </footer>
    </div>
</div>
