
<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import {URI} from "../enums/enums.js";

    let initialPosts = [
        { id: 1, title: 'Post 1', content: 'Content of post 1' },
        { id: 2, title: 'Post 2', content: 'Content of post 2' },
        { id: 3, title: 'Post 3', content: 'Content of post 3' }
    ];


    const posts = writable(initialPosts);

    const searchTerm = writable('');

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
        min-width: 60vb;
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
    }

    li {
        margin-bottom: 20px;
        min-width: 55vh;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    h3 {
        margin-bottom: 10px;
    }

    p {
        color: #666;
    }
</style>

<div class="post-view">

    <input type="text" bind:value={$searchTerm} placeholder="Search posts..." />

    <ul>
        {#each $posts.filter(filterPosts) as post}
            <li>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </li>
        {/each}
    </ul>
</div>
