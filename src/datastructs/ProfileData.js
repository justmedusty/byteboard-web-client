export class ProfileData {
    constructor(userName, bio, publicKey, profilePhoto, autoEncrypt) {
        this.userName = userName;
        this.bio = bio;
        this.publicKey = publicKey;
        this.profilePhoto = profilePhoto;
        this.autoEncrypt = autoEncrypt;
    }
}