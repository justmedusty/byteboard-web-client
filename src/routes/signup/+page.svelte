<script lang="ts">

    import {URI} from '../../enums/enums';
    import {saveTokenWithAutoDelete} from "../../auth/TokenHandling.js";
    import {goto} from "$app/navigation";
    import toast, {Toaster} from 'svelte-french-toast';

    let username = ""
    let password = ""
    async function handleSubmit() {


        const response = await fetch(URI.SIGNUP, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username, password
            }),

        })


        if (response.ok) {
            password = ""
            username = ""
            toast.success("Sign-up Success!")
            goto("/login")
        } else {
            const responseJson = await response.json()
            toast.error(responseJson["Response"])
        }

    }
</script>

<style>
    /* Container styling */
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35vh;
        /* Set a minimum width to ensure it's not too narrow */
        min-width: 60vh;
        background-color: rgba(242, 242, 242, 0);
    }

    /* Form styling */
    .form-container {
        max-width: 40vh; /* Corrected value */
        padding: 20px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .form-container h2 {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

    .form-container label {
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
        min-width: 35vh;
    }

    .form-container input {
        width: 95%;
        padding: 10px;
        margin-bottom: 20px;

        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    .form-container button {
        width: 100%;
        padding: 12px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 18px;
        transition: background-color 0.3s ease;
    }

    .form-container button:hover {
        background-color: #0056b3;
    }

    .form-container .switch-pages {
        text-align: center;
        margin-top: 15px;
    }

    .form-container .switch-pages a {
        color: #007bff;
        text-decoration: none;
        font-size: 16px;
    }

    .form-container .switch-pages a:hover {
        text-decoration: underline;
    }
</style>

<div class="container">
    <div class="form-container">
        <form on:submit|preventDefault={handleSubmit}>
            <h2>Create An Account</h2>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" bind:value={username}>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" bind:value={password}>

            <button type="submit">Sign Up</button>

            <div class="switch-pages">
                <a href="/login">Have an account? Click here.</a>
            </div>
        </form>
    </div>
</div>
