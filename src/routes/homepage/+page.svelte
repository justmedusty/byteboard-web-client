<script lang="ts">

    import Tabs from "../../components/Tabs.svelte";
    import {deleteToken} from "../../auth/TokenHandling.js";
    import PostsFeed from "../../components/PostsFeed.svelte";
    import ProfileViewer from "../../components/ProfileViewer.svelte";
    import About from "../../components/About.svelte";
    import Notifications from "../../components/Notifications.svelte";


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
            component: ProfileViewer
        },
        {
            label: "Notifications",
            value: 4,
            component: Notifications
        },
        {
            label: "Account Settings",
            value: 5,
            component: ""
        },
        {
            label: "About",
            value: 6,
            component: About
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
