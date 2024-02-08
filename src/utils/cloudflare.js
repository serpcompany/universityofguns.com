// utils/cloudflare.js

export function getCloudflareResizedImageURL(url, width, height) {
  return `${url}?width=${width}&height=${height}`;
}
