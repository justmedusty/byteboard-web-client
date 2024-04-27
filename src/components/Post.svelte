<script>
    export let post = {
        id: null,
        posterUserName: '',
        topic: '',
        timeStamp: '',
        title: '',
        content: '',
        likeCount: 0,
        dislikeCount: 0,
        likedByMe: false,
        dislikedByMe: false,
        lastedEdited: null
    };

    function toggleLike() {
        post.likedByMe = !post.likedByMe;
        if (post.likedByMe) {
            post.likeCount++;
        } else {
            post.likeCount--;
        }
    }

    function toggleDislike() {
        post.dislikedByMe = !post.dislikedByMe;
        if (post.dislikedByMe) {
            post.dislikeCount++;
        } else {
            post.dislikeCount--;
        }
    }
    function redirectToPost(postId) {
        // Assuming you have a function to redirect to the post page with postId
        // Replace this line with the actual logic to redirect
        alert("Going elsewhere")
    }

</script>

<div class="post" >
    <div class="post-content" on:click={() => redirectToPost(post.id)}>
        <h3>{post.title}</h3>
        <p>Posted by: {post.posterUserName}</p>
        <p>Topic: {post.topic}</p>
        <p>{post.content.substring(0, 50)}...</p>
        <p>Last Edited: {post["lastedEdited"]}</p>
        <div class="counts">
            <p>Like Count: {post.likeCount}</p>
            <p>Dislike Count: {post.dislikeCount}</p>
        </div>
    </div>
    <div class="button-row">
        <button on:click={toggleLike} style="color: {post.likedByMe ? 'red' : 'black'}">Like</button>
        <button on:click={toggleDislike} style="color: {post.dislikedByMe ? 'red' : 'black'}">Dislike</button>
    </div>
</div>

<style>
    .post {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 20px;
        min-width: 40vh;
        background-color: rgba(51, 51, 51, 0.39);
        cursor: pointer; /* Change cursor to pointer to indicate clickability */
        transition: background-color 0.3s ease; /* Add transition for smoother hover effect */
        display: flex;
        flex-direction: column;
    }

    .post:hover {
        background-color: rgba(51, 51, 51, 0.6); /* Darken background color on hover */
    }

    .post-content {
        flex-grow: 1; /* Grow to fill remaining space */

    }

    .counts {
        display: flex;
        justify-content: space-between;
    }

    .button-row {
        display: flex;
        justify-content: space-between; /* Spread the buttons evenly */
        margin-top: 10px; /* Add some space between the buttons and other content */
    }

    button {
        cursor: pointer; /* Change cursor to pointer for buttons */
    }
</style>
