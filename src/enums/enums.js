const URI = {
    /*
    *If a slash is after the final bit it means that it takes an ID or an order or some other parameter in the
    * request url
     */
    BASE_URI: "/byteboard",

    BASE_URL: "http://127.0.0.1:6969"
};

URI.LOGIN = URI.BASE_URL + URI.BASE_URI + "/login";
URI.SIGNUP = URI.BASE_URL + URI.BASE_URI + "/signup";

URI.CHANGE_USERNAME = URI.BASE_URL + URI.BASE_URI + "/profile/changeUserName";
URI.FETCH_PROFILE_BY_ID = URI.BASE_URL + URI.BASE_URI + "/profiles/get/";
URI.CHANGE_PASSWORD = URI.BASE_URL + URI.BASE_URI + "/profile/changePassword";
URI.DELETE_ACCOUNT = URI.BASE_URL + URI.BASE_URI + "/profile/deleteAccount";
URI.CHANGE_BIO = URI.BASE_URL + URI.BASE_URI + "/profile/changeBio";
URI.CHANGE_PUBLIC_KEY = URI.BASE_URL + URI.BASE_URI + "/profile/changePublicKey";
URI.CHANGE_PROFILE_PHOTO = URI.BASE_URL + URI.BASE_URI + "/profile/changeProfilePhoto";
URI.CHANGE_AUTO_ENCRYPTION_FLAG = URI.BASE_URL + URI.BASE_URI + "/profile/changeAutoEncryptionFlag";

URI.NOTIFICATION_FETCH = URI.BASE_URL + URI.BASE_URI + "/notifications/fetch";
URI.NOTIFICATION_MARK_READ = URI.BASE_URL + URI.BASE_URI + "/notifications/markread/";
URI.NOTIFICATION_MARK_UNREAD = URI.BASE_URL + URI.BASE_URI + "/notifications/markunread/";

URI.DELETE_COMMENT = URI.BASE_URL + URI.BASE_URI + "/comments/delete/";
URI.GET_COMMENTS_FOR_POST = URI.BASE_URL + URI.BASE_URI + "/comments/get/";
URI.GET_COMMENTS_BY_USER = URI.BASE_URL + URI.BASE_URI + "/comments/get/user/";
URI.GET_CHILD_COMMENTS = URI.BASE_URL + URI.BASE_URI + "/comments/getchildren/";
URI.LIKE_COMMENT = URI.BASE_URL + URI.BASE_URI + "/comments/like/";
URI.DISLIKE_COMMENT = URI.BASE_URL + URI.BASE_URI + "/comments/dislike/";
URI.UPDATE_COMMENT = URI.BASE_URL + URI.BASE_URI + "/comments/update/";
URI.POST_COMMENT = URI.BASE_URL + URI.BASE_URI + "/comments/post";

URI.DELETE_POST = URI.BASE_URL + URI.BASE_URI + "/posts/delete/";
URI.CREATE_POST = URI.BASE_URL + URI.BASE_URI + "/posts/create";
URI.EDIT_POST = URI.BASE_URL + URI.BASE_URI + "/posts/edit/";
URI.LIKE_POST = URI.BASE_URL + URI.BASE_URI + "/posts/like/";
URI.DISLIKE_POST = URI.BASE_URL + URI.BASE_URI + "/posts/dislike/";
URI.GET_ALL_POSTS = URI.BASE_URL + URI.BASE_URI + "/posts/posts/";
URI.GET_POSTS_BY_TOPIC = URI.BASE_URL + URI.BASE_URI + "/posts/topic/";
URI.SEARCH_POSTS = URI.BASE_URL + URI.BASE_URI + "/posts/search";
URI.GET_POSTS_LIKE_OR_DISLIKED_BY_ME = URI.BASE_URL + URI.BASE_URI + "/posts/interacted/";

URI.SEND_PRIVATE_MESSAGE = URI.BASE_URL + URI.BASE_URI + "/messages/send";
URI.FETCH_ALL_MESSAGES = URI.BASE_URL + URI.BASE_URI + "/messages/send";
URI.FETCH_MESSAGES_BY_SENDER = URI.BASE_URL + URI.BASE_URI + "/messages/fetchByUser";
URI.GET_ALL_PEOPLE_WHO_MESSAGED_ME = URI.BASE_URL + URI.BASE_URI + "/messages/getAllSenders";

URI.SUSPEND_USER = URI.BASE_URL + URI.BASE_URI + "/admin/suspend/";
URI.UNSUSPEND_USER = URI.BASE_URL + URI.BASE_URI + "/admin/unsuspend/";
URI.GIVE_ADMIN = URI.BASE_URL + URI.BASE_URI + "/admin/giveadmin/";
URI.TAKE_ADMIN = URI.BASE_URL + URI.BASE_URI + "/admin/takeadmin/";
URI.GET_ADMIN_LOGS = URI.BASE_URL + URI.BASE_URI + "/admin/getadminlogs/";
URI.GET_ADMIN_LOGS_BY_ADMIN_ID = URI.BASE_URL + URI.BASE_URI + "/admin/getadminlogsforadmin/";
URI.GET_SUSPEND_LOGS = URI.BASE_URL + URI.BASE_URI + "/admin/getsuspendlogs/";

export { URI };