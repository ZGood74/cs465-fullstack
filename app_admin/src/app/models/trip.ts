/**
 * Interface representing a travel trip object.
 * This model defines the data structure exchanged between
 * the Angular frontend and the Express API backend.
 */
export interface Trip {
  /** Unique identifier for the trip (used in URL routing) */
  code: string;

  /** Name/title of the trip (e.g., "Gale Reef Adventure") */
  name: string;

  /** Duration of the trip in days (as a string like "7", can be validated) */
  length: string;

  /** Trip start date in ISO string format (e.g., "2025-08-01") */
  start: string;

  /** Name of the associated resort or location */
  resort: string;

  /** Cost per person as a formatted string (e.g., "$1999") */
  perPerson: string;

  /** URL to an image representing the trip */
  image: string;

  /** Text description highlighting the trip's features */
  description: string;
}
