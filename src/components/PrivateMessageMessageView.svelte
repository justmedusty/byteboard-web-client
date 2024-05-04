<script>
import {Message} from "../datastructs/Message.js";

let sampleMessages = [];
for (let i = 1; i <= 25; i++) {
    sampleMessages.push(new Message(i, `User${i}`, `Message ${i}`, '2024-04-27'));
}
</script>

<style>

</style>


<div>
    {#each sampleMessages as message}
        <div class="user-profile">
            <div class="2">
                <h3>{message.senderUserName}</h3>
                <p>{message.message}</p>
                <p>Timestamp: {message.timeStamp}</p>
            </div>
        </div>
    {/each}
</div>