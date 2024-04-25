export const URI = {
    /*
    *If a slash is after the final bit it means that it takes an ID or an order or some other parameter in the
    * request url
     */
    BASE_URI: "/byteboard",

    BASE_URL: "http://127.0.0.1:6969",

    LOGIN: this.BASE_URL + this.BASE_URI + "/login",
    SIGNUP: this.BASE_URL + this.BASE_URI + "/signup",

    CHANGE_USERNAME: this.BASE_URL + this.BASE_URI + "/profile/changeUserName",
    FETCH_PROFILE_BY_ID: this.BASE_URL + this.BASE_URI + "/profiles/get/",
    CHANGE_PASSWORD: this.BASE_URL + this.BASE_URI + "/profile/changePassword",
    DELETE_ACCOUNT: this.BASE_URL + this.BASE_URI + "/profile/deleteAccount",
    CHANGE_BIO: this.BASE_URL + this.BASE_URI + "/profile/changeBio",
    CHANGE_PUBLIC_KEY: this.BASE_URL + this.BASE_URI + "/profile/changePublicKey",
    CHANGE_PROFILE_PHOTO: this.BASE_URL + this.BASE_URI + "/profile/changeProfilePhoto",
    CHANGE_AUTO_ENCRYPTION_FLAG: this.BASE_URL + this.BASE_URI + "/profile/changeAutoEncryptionFlag",

    NOTIFICATION_FETCH: this.BASE_URL + this.BASE_URI + "/notifications/fetch",
    NOTIFICATION_MARK_READ: this.BASE_URL + this.BASE_URI + "/notifications/markread/",
    NOTIFICATION_MARK_UNREAD: this.BASE_URL + this.BASE_URI + "/notifications/markunread/",

    DELETE_COMMENT: this.BASE_URL + this.BASE_URI + "/comments/delete/",
    GET_COMMENTS_FOR_POST: this.BASE_URL + this.BASE_URI + "/comments/get/",
    GET_COMMENTS_BY_USER: this.BASE_URL + this.BASE_URI + "/comments/get/user/",
    GET_CHILD_COMMENTS: this.BASE_URL + this.BASE_URI + "/comments/getchildren/",
    LIKE_COMMENT: this.BASE_URL + this.BASE_URI + "/comments/like/",
    DISLIKE_COMMENT: this.BASE_URL + this.BASE_URI + "/comments/dislike/",
    UPDATE_COMMENT: this.BASE_URL + this.BASE_URI + "/comments/update/",
    POST_COMMENT: this.BASE_URL + this.BASE_URI + "/comments/post",

    DELETE_POST: this.BASE_URL + this.BASE_URI + "/posts/delete/",
    CREATE_POST: this.BASE_URL + this.BASE_URI + "/posts/create",
    EDIT_POST: this.BASE_URL + this.BASE_URI + "/posts/edit/",
    LIKE_POST: this.BASE_URL + this.BASE_URI + "/posts/like/",
    DISLIKE_POST: this.BASE_URL + this.BASE_URI + "/posts/dislike/",
    GET_ALL_POSTS: this.BASE_URL + this.BASE_URI + "/posts/posts/",
    GET_POSTS_BY_TOPIC: this.BASE_URL + this.BASE_URI + "/posts/topic/",
    SEARCH_POSTS: this.BASE_URL + this.BASE_URI + "/posts/search",
    GET_POSTS_LIKE_OR_DISLIKED_BY_ME: this.BASE_URL + this.BASE_URI + "/posts/interacted/",

    SEND_PRIVATE_MESSAGE: this.BASE_URL + this.BASE_URI + "/messages/send",
    FETCH_ALL_MESSAGES: this.BASE_URL + this.BASE_URI + "/messages/send",
    FETCH_MESSAGES_BY_SENDER: this.BASE_URL + this.BASE_URI + "/messages/fetchByUser",
    GET_ALL_PEOPLE_WHO_MESSAGED_ME: this.BASE_URL + this.BASE_URI + "/messages/getAllSenders",

    SUSPEND_USER: this.BASE_URL + this.BASE_URI + "/admin/suspend/",
    UNSUSPEND_USER: this.BASE_URL + this.BASE_URI + "/admin/unsuspend/",
    GIVE_ADMIN: this.BASE_URL + this.BASE_URI + "/admin/giveadmin/",
    TAKE_ADMIN: this.BASE_URL + this.BASE_URI + "/admin/takeadmin/",
    GET_ADMIN_LOGS: this.BASE_URL + this.BASE_URI + "/admin/getadminlogs/",
    GET_ADMIN_LOGS_BY_ADMIN_ID: this.BASE_URL + this.BASE_URI + "/admin/getadminlogsforadmin/",
    GET_SUSPEND_LOGS: this.BASE_URL + this.BASE_URI + "/admin/getsuspendlogs/"


}