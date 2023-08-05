export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const phoneNumberRegex = /^'?(\+62|62|0)[82][1-9][0-9]{6,11}$/;

export function validateEmail(email: string) {
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string) {
  return phoneNumberRegex.test(phoneNumber);
}
