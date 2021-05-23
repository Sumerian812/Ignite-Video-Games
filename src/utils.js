// Resize images
export const resizeImage = (imageUrl, size) => {
    if (imageUrl) {
        return imageUrl.match(/media\/(screenshots|games)/)
            ? imageUrl.replace("/media/", `/media/resize/${size}/-/`)
            : imageUrl;
    } 
    return null;
}