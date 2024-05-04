<script>
    // Define ProfileData class


    import { onMount } from "svelte";
    import {ProfileData} from '../datastructs/ProfileData.js';
    import PrivateMessageMessageView from "./PrivateMessageMessageView.svelte";

    let selectedUser = false

    function openOrCloseMessage(){
        selectedUser = !selectedUser
    }
    function generateRandomProfileData() {
        const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
        const bios = ["Frontend Developer", "Backend Developer", "Designer", "Data Scientist", "Software Engineer"];
        const publicKeys = ["public_key_1", "public_key_2", "public_key_3", "public_key_4", "public_key_5"];
        const profilePhotos = ["profile1.jpg", "profile2.jpg", "profile3.jpg", "profile4.jpg", "profile5.jpg"];
        const autoEncryptValues = [true, false];

        const randomIndex = Math.floor(Math.random() * names.length);

        return new ProfileData(
            names[randomIndex],
            bios[randomIndex],
            publicKeys[randomIndex],
            profilePhotos[randomIndex],
            autoEncryptValues[Math.floor(Math.random() * autoEncryptValues.length)]
        );
    }

    let users =Array.from({ length: 5 }, () => generateRandomProfileData());

</script>

<style>
    .user-profile{
        background-color: rgba(51, 51, 51, 0.41);
        margin-bottom: 25px;

    }
</style>

<div>
    {#each users as user}
        <div class="user-profile" on:click={() => handleClick(user)}>
            <div class="profile-image">
                <img src="{user.profilePhoto}" alt="{user.userName}" />
            </div>
            <div class="profile-info">
                <h3>{user.userName}</h3>
                <p>{user.bio}</p>
                <p>Auto Encrypt: {user.autoEncrypt ? 'Yes' : 'No'}</p>
            </div>
            <button on:click={openOrCloseMessage}>Open</button>
        </div>
    {/each}

    {#if selectedUser}
        <div class="user-profile-detail-overlay">
            <div class="user-profile-detail">
                <PrivateMessageMessageView />
            </div>
        </div>
    {/if}
</div>