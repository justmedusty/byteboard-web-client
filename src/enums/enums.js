export const URI = {
    /*
    *If a slash is after the final bit it means that it takes an ID or an order or some other parameter in the
    * request url
     */
    BASE_URI: "/byteboard",

    BASE_URL: "http://127.0.0.1:6969",

    LOGIN: "/login",
    SIGNUP: "/signup",

    CHANGE_USERNAME: "/profile/changeUserName",
    FETCH_PROFILE_BY_ID: "/profiles/get/",
    CHANGE_PASSWORD: "/profile/changePassword",
    DELETE_ACCOUNT: "/profile/deleteAccount",
    CHANGE_BIO: "/profile/changeBio",
    CHANGE_PUBLIC_KEY: "/profile/changePublicKey",
    CHANGE_PROFILE_PHOTO: "/profile/changeProfilePhoto",
    CHANGE_AUTO_ENCRYPTION_FLAG: "/profile/changeAutoEncryptionFlag",

    NOTIFICATION_FETCH : "/notifications/fetch",
    NOTIFICATION_MARK_READ : "/notifications/markread/",
    NOTIFICATION_MARK_UNREAD : "/notifications/markunread/",

    DELETE_COMMENT : "/comments/delete/",
    GET_COMMENTS_FOR_POST : "/comments/get/",
    GET_COMMENTS_BY_USER : "/comments/get/user/",
    GET_CHILD_COMMENTS : "/comments/getchildren/",
    LIKE_COMMENT : "/comments/like/",
    DISLIKE_COMMENT : "/comments/dislike/",
    UPDATE_COMMENT : "/comments/update/",
    POST_COMMENT : "/comments/post",

    DELETE_POST : "/posts/delete/",
    CREATE_POST : "/posts/create",
    EDIT_POST : "/posts/edit/",
    LIKE_POST : "/posts/like/",
    DISLIKE_POST : "/posts/dislike/",
    GET_ALL_POSTS : "/posts/posts/",
    GET_POSTS_BY_TOPIC : "/posts/topic/",
    SEARCH_POSTS : "/posts/search",
    GET_POSTS_LIKE_OR_DISLIKED_BY_ME : "/posts/interacted/",

    SEND_PRIVATE_MESSAGE : "/messages/send",
    FETCH_ALL_MESSAGES : "/messages/send",
    FETCH_MESSAGES_BY_SENDER : "/messages/fetchByUser",
    GET_ALL_PEOPLE_WHO_MESSAGED_ME : "/messages/getAllSenders",

    SUSPEND_USER : "/admin/suspend/",
    UNSUSPEND_USER : "/admin/unsuspend/",
    GIVE_ADMIN : "/admin/giveadmin/",
    TAKE_ADMIN : "/admin/takeadmin/",
    GET_ADMIN_LOGS : "/admin/getadminlogs/",
    GET_ADMIN_LOGS_BY_ADMIN_ID : "/admin/getadminlogsforadmin/",
    GET_SUSPEND_LOGS : "/admin/getsuspendlogs/"











}