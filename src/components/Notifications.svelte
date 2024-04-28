<script>
    const notifications = [
        { id: 1, type: 1, postId: 123, message: "New comment on your post" },
        { id: 2, type: 2, postId: 456, message: "New comment reply " }

    ];
</script>

<style>
    .notification {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
    }

    .notification a {
        text-decoration: none;
        color: blue;
    }
    .sub{
        display: flex;
        flex-direction: column;
    }

    .sub2{
        display: flex;
        flex-direction: column;
    }
</style>

<div>
    {#each notifications as notification}
        <div class="notification">
            <div class="sub">
                <p>{notification.postId}</p>
                <p>{notification.message}</p>
            </div>
            <div class="sub2">
                <button class="read">Mark Read</button>
                <button class="read">Mark Unread</button>
            </div>

        </div>
    {/each}
</div>