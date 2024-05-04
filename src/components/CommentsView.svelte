<script>
    import {CommentData} from "../datastructs/Comment.js"
let comments = [
new CommentData(1, "This is the first comment", 101, false, null, "2024-05-04", 10, 2, false, false, false, true),
new CommentData(2, "Reply to the first comment", 102, true, 1, "2024-05-05", 5, 1, false, false, false, false),
new CommentData(3, "This is another comment", 103, false, null, "2024-05-06", 8, 0, false, true, false, true)];
</script>

<style>
    .comment-item {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .comment-item p {
        margin: 5px 0;
    }

    .reply-btn {
        margin-top: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }

    .reply-btn:hover {
        background-color: #0056b3;
    }
</style>

<div class="comment">
    {#each comments as comment}
        <div class="comment-item">
            <p><strong>Content:</strong> {comment.content}</p>
            <p><strong>Commented by:</strong> <a href="#">{comment.commenterUsername}</a></p>
            <p><strong>Timestamp:</strong> {comment.timeStamp}</p>
            <p><strong>Likes:</strong> {comment.commentLikes}</p>
            <p><strong>Dislikes:</strong> {comment.commentDislikes}</p>
            <p><strong>Last Edited:</strong> {comment.lastedEdited}</p>
            <p><strong>Has Replies:</strong> {comment.hasReplies}</p>
            <button class="reply-btn">Reply</button>
        </div>
    {/each}
</div>