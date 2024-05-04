<script>
    import { onMount } from "svelte";
    import {ProfileData} from '../datastructs/ProfileData.js';
    import PrivateMessageMessageView from "./PrivateMessageMessageView.svelte";

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

    let users = Array.from({ length: 5 }, () => generateRandomProfileData());

    let selectedUser = null;

    function handleClick(user) {
        selectedUser = user;
    }

    function handleClose() {
        selectedUser = null;
    }

    function openOrCloseMessage() {
        selectedUser = !selectedUser;
    }
</script>
<style>
    .user-profile {
        background-color: rgba(51, 51, 51, 0.41);
        margin-bottom: 25px;
    }
    .user-profile:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .user-profile-detail-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user-profile-detail {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center; /* Center horizontally */
    }

    .close {
        align-self: flex-end; /* Align to the right */
        margin-bottom: 10px; /* Add some space */
        background-color: red;
    }

    .message-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px; /* Add some space */
    }

    .message-input {
        margin-right: 10px; /* Add some space between input and button */
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
        </div>
    {/each}

    {#if selectedUser}
        <div class="user-profile-detail-overlay">
            <div class="user-profile-detail">
                <button class="close" on:click={openOrCloseMessage}>X</button>
                <PrivateMessageMessageView user={selectedUser} on:close={handleClose} />
                <div class="message-bar">
                    <input class="message-input">
                    <button>Send</button>
                </div>
            </div>
        </div>
    {/if}
</div>
