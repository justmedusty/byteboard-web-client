<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { URI } from "../enums/enums.js";
    import Post from './Post.svelte'; // Import the Post component

    class PostData {
        constructor(id, posterUserName, topic, timeStamp, title, content, likeCount, dislikeCount, likedByMe, dislikedByMe, lastedEdited) {
            this.id = id;
            this.posterUserName = posterUserName;
            this.topic = topic;
            this.timeStamp = timeStamp;
            this.title = title;
            this.content = content;
            this.likeCount = likeCount;
            this.dislikeCount = dislikeCount;
            this.likedByMe = likedByMe;
            this.dislikedByMe = dislikedByMe;
            this.lastedEdited = lastedEdited;
        }
    }

    // Generate 25 sample posts
    let samplePosts = [];
    for (let i = 1; i <= 25; i++) {
        samplePosts.push(new PostData(i, `User${i}`, `Topic ${i}`, '2024-04-27', `Post ${i}`, `Content of post ${i}`, i * 2, i, i % 2 === 0, i % 3 === 0, null));
    }

    const posts = writable(samplePosts);
    const searchTerm = writable('');
    const orderBy = writable('');

    function filterPosts(post) {
        const term = $searchTerm.toLowerCase();
        return post.title.toLowerCase().includes(term);
    }

    async function fetchPosts() {
        const term = $searchTerm;
        try {
            const response = await fetch(URI.SEARCH_POSTS + `?search=${term}`);
            if (!response.ok) {
                alert("not okay")
            }
            const data = await response.json();
            posts.set(data.posts);
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        fetchPosts(); // Initial fetch when component is mounted
    });
</script>

<style>
    .post-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;
        min-width: 60vw;
        margin: 50px;
    }

    input[type="text"] {
        width: 300px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        text-align: center;
        max-height: max-content;
    }
</style>

<div class="post-view">
    <div class="sort-search">
        <input type="text" bind:value={$searchTerm} placeholder="Search posts..." />
        <select bind:value={$orderBy}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most-liked">Most Liked</option>
            <option value="most-disliked">Most Disliked</option>
        </select>
    </div>

    <ul>
        {#each $posts.filter(filterPosts) as post}
            <li>
                <Post post={post}/>
            </li>
        {/each}
    </ul>
</div>
