// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = 'dlxsai1kr';
const CLOUDINARY_UPLOAD_PRESET = 'profileImages'; // Your unsigned preset

/**
 * Upload image to Cloudinary
 * @param {File} file - The image file from file input
 * @returns {Promise<string>} - The secure URL of the uploaded image
 */
export const uploadImageToCloudinary = async (file) => {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Check file size (5MB limit)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      throw new Error('File size exceeds 5MB limit');
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload an image (JPEG, PNG, GIF, or WebP)');
    }

    // Create form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    // Optional: Add folder (must be configured in preset or use signed upload)
    // formData.append('folder', 'portfolio_comments');

    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();

    if (data.secure_url) {
      return data.secure_url; // Returns HTTPS URL
    } else {
      throw new Error('Upload failed: ' + (data.error?.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

/**
 * Get optimized image URL with transformations
 * @param {string} imageUrl - Original Cloudinary URL
 * @param {number} width - Desired width
 * @param {number} height - Desired height
 * @returns {string} - Transformed image URL
 */
export const getOptimizedImageUrl = (imageUrl, width = 100, height = 100) => {
  if (!imageUrl || !imageUrl.includes('cloudinary.com')) {
    return imageUrl;
  }

  // Insert transformation parameters into URL
  const parts = imageUrl.split('/upload/');
  if (parts.length === 2) {
    return `${parts[0]}/upload/w_${width},h_${height},c_fill,g_face,f_auto,q_auto/${parts[1]}`;
  }
  
  return imageUrl;
};