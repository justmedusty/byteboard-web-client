<script>

    export let profileData = null;
    class ProfileData {
        constructor(userName, bio, publicKey, profilePhoto, autoEncrypt) {
            this.userName = userName;
            this.bio = bio;
            this.publicKey = publicKey;
            this.profilePhoto = profilePhoto;
            this.autoEncrypt = autoEncrypt;
        }
    }
</script>
<style>
    .profile {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 20px;
        max-width: 400px;
    }

    .profile-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
    }
</style>

<div class="profile">
    {#if profileData}
        <img class="profile-photo" src="{profileData.profilePhoto}" alt="Profile Photo" />
        <h3>{profileData.userName}</h3>
        <p>{profileData.bio}</p>
        <p>Public Key: {profileData.publicKey}</p>
        <p>Auto Encrypt: {profileData.autoEncrypt ? 'Yes' : 'No'}</p>
    {:else}
        <p>No profile data available.</p>
    {/if}
</div>