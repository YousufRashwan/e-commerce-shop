import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEgyptianPhoneNumber(phoneNumber: string): boolean {
  // Remove any spaces, dashes, or parentheses
  const cleanedNumber = phoneNumber.replace(/[\s()-]/g, "");

  // Egyptian numbers start with +20 or 0 followed by 10 or 11 digits
  const egyptianPhoneRegex = /^(?:\+20|0)?1[0-9]{9}$/;

  return egyptianPhoneRegex.test(cleanedNumber);
}
