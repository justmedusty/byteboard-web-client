<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { URI } from "../enums/enums.js";
    import Post from './Post.svelte';
    import {PostData} from "../datastructs/Post.js";



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
            const response = await fetch(URI.SEARCH_POSTS_FROM_USER + `?search=${term}`);
            const data = await response.json();
            posts.set(data.posts);
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        fetchPosts();
    });

    // Function to check if the length of posts array is divisible by 25
    function isDivisibleBy25() {
        return $posts.length % 25 === 0;
    }
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

    .load-more.visible {
        display: block;
    }

    .load-more.hidden {
        display: none;
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

    <button class="load-more {isDivisibleBy25() ? 'visible' : 'hidden'}">Load More</button>
</div>
