export function encodeEmailAddress(emailAddress){
   return emailAddress?.substring(0, emailAddress?.lastIndexOf("@"));
   //return encodeURIComponent(emailAddress)
}

export function decodeEmailId(emailId){
    return emailId + "@xtivia.com"; 
    //return emailId;
}

export function createAbsoluteUrl(imageUrl){
    return "https:" + imageUrl;
}