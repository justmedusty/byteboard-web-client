export class PostData {
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