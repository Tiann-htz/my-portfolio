import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_sc1rv7a';
const EMAILJS_TEMPLATE_ID = 'template_7bdi1wr';
const EMAILJS_PUBLIC_KEY = 'y_jxCha4t7ck-X0P0';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send email using EmailJS
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email
 * @param {string} message - Message content
 * @returns {Promise<void>}
 */
export const sendEmail = async (name, email, message) => {
  try {
    // Get current time for the email
    const now = new Date();
    const time = now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Template parameters matching your HTML template
    const templateParams = {
      name: name,
      email: email,
      message: message,
      time: time,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};