<script>
import {Message} from "../datastructs/Message.js";

let sampleMessages = [];
for (let i = 1; i <= 50; i++) {
    sampleMessages.push(new Message(i, `User${i}`, `Message ${i}`, '2024-04-27'));
}
</script>

<style>
.message-view{
    min-width: 40vb;
    overflow-y: auto;
    max-height: 60vb;
}

</style>

<div>
<div class="message-view">
    {#each sampleMessages as message}
        <div class="message">
            <div class="2">
                <p>{message.message}</p>
                <p>Timestamp: {message.timeSent}</p>
            </div>
        </div>
    {/each}

</div>
</div>