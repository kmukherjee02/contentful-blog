export function encodeEmailAddress(emailAddress){
   return emailAddress?.substring(0, emailAddress?.lastIndexOf("@"));
   //return encodeURIComponent(emailAddress)
}

export function decodeEmailId(emailId){
    return emailId + "@xtivia.com"; 
    //return emailId;
}

export function createAbsoluteUrl(imageUrl){
    if (imageUrl) return 'https:' + imageUrl;
    return undefined;
}


export function getBackgroundImageUrl(url){
    if (url) return 'bg-[url(' + createAbsoluteUrl(url) + ')]';
    return undefined; 
}