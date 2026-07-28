/**
 * HTML5 Canvas Image Optimizer for Client-Side CMS.
 * Resizes and compresses images into Original, Medium, and Thumbnail sizes.
 * Converts to WebP format if supported, fallback to JPEG.
 */

const resizeImage = (img, maxDimension, quality, format = 'image/webp') => {
  return new Promise((resolve) => {
    let width = img.width;
    let height = img.height;

    // Calculate new dimensions preserving aspect ratio
    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      } else {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    // Draw image onto canvas
    ctx.drawImage(img, 0, 0, width, height);

    // Export to WebP/JPEG data URL
    let dataUrl = canvas.toDataURL(format, quality);

    // Fallback to jpeg if format is not supported (browser returns image/png by default if unsupported)
    if (format === 'image/webp' && !dataUrl.startsWith('data:image/webp')) {
      dataUrl = canvas.toDataURL('image/jpeg', quality);
    }

    resolve(dataUrl);
  });
};

export const optimizeImage = (file) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Invalid image file'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        try {
          // Optimize at three different resolutions
          const [original, medium, thumbnail] = await Promise.all([
            resizeImage(img, 1400, 0.70, 'image/webp'), // Original: Max 1400px (conservative to avoid local storage overflow)
            resizeImage(img, 700, 0.60, 'image/webp'),  // Medium: Max 700px
            resizeImage(img, 180, 0.50, 'image/webp')   // Thumbnail: Max 180px
          ]);

          // Cleanup object url
          URL.revokeObjectURL(img.src);
          resolve({ original, medium, thumbnail });
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};
