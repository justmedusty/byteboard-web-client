<script>

    const notifications = [
        {id: 1, type: 1, postId: 123, message: "New comment on your post"},
        {id: 2, type: 2, postId: 456, message: "New reply to your comment "}

    ];
</script>

<style>
    .notification {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .notification a {
        text-decoration: none;
        color: blue;
    }

    .notification button {
        padding: 5px 10px; /* Adjust padding to make buttons smaller */
        font-size: 14px; /* Adjust font size as needed */
    }

</style>
<div>
    {#each notifications as notification}
        <div class="notification">
            <div>
                <p>{notification.postId}</p>
                <p>{notification.message}</p>
            </div>
            <div>
                <button class="read">Mark Read</button>
                <button class="read">Mark Unread</button>
            </div>
        </div>
    {/each}
</div>