<script>
    let userId = 'exampleUserId';

    async function fetchProfileData(userId) {
        try {
            const response = await fetch(URI`${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch profile data');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null; // Return null if fetch fails
        }
    }

    let profileData = null;

    (async () => {
        profileData = await fetchProfileData(userId);
    })();
</script>

<style>
    .profile {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 20px;
        max-width: 400px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: fit-content;
    }

    .profile-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
    }

    .profile-element {
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }

    h3 {
        margin: 0;
        color: #333;
    }

    p {
        margin: 0;
        color: #666;
    }
</style>

<div class="profile">
    {#if profileData}
        <div class="profile-element">
            <img class="profile-photo" src="{profileData.profilePhoto}" alt="Profile Photo" />
        </div>
        <div class="profile-element">
            <h3>{profileData.userName}</h3>
        </div>
        <div class="profile-element">
            <p>{profileData.bio}</p>
        </div>
        <div class="profile-element">
            <p>Public Key: {profileData.publicKey}</p>
        </div>
        <div class="profile-element">
            <p>Auto Encrypt: {profileData.autoEncrypt ? 'Yes' : 'No'}</p>
        </div>
    {:else}
        <div class="profile-element">
            <img class="profile-photo" src="/static/favicon.png" alt="Profile Photo"/>

            <h3>Dustyn</h3>
        </div>
        <div class="profile-element">
            <p>Hey this is my bio and shit</p>
        </div>
        <div class="profile-element">
            <p>Public Key: No Key</p>
        </div>
        <div class="profile-element">
            <p>Auto Encrypt: Yes</p>
        </div>
    {/if}
</div>
