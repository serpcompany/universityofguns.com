// utils/cloudflare.js

export function getCloudflareResizedImageURL(url, width, height) {
  return url.replace(/w=\d+/, `w=${width}`).replace(/h=\d+/, `h=${height}`);
}
