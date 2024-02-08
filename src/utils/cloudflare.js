// utils/cloudflare.js

export function getCloudflareResizedImageURL(url, width, height) {
  // Split the URL into parts
  let parts = url.split('/');

  // Find the part of the URL with the width and height
  let sizePartIndex = parts.findIndex((part) => part.startsWith('w='));

  if (sizePartIndex !== -1) {
    // Replace the width and height in the URL part
    parts[sizePartIndex] = `w=${width},h=${height},fit=pad,background=black`;
  }

  // Join the parts back together into a URL
  return parts.join('/');
}
