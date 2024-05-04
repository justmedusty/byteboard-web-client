export class CommentData {
    constructor(id, content, commenterId,commenterUsername,isReply, parentCommentId, timeStamp, commentLikes, commentDislikes, lastEdited, isCommentLikedByMe, isCommentDislikedByMe,hasReplies) {
        this.id = id;
        this.content = content;
        this.commenterId = commenterId;
        this.commenterUsername = commenterUsername
        this.timeStamp = timeStamp;
        this.commentLikes = commentLikes;
        this.commentDislikes = commentDislikes;
        this.lastedEdited = lastEdited;
        this.isCommentLikedByMe = isCommentDislikedByMe;
        this.isCommentDislikedByMe = isCommentDislikedByMe;
        this.hasReplies = hasReplies;
    }
}