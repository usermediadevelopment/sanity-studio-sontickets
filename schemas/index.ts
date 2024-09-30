import { cuisineSchema } from "./cuisine";
import { menuItemSchema } from "./menuItem";
import { operatingHourSchema } from "./operatingHour";
import { restaurantSchema } from "./restaurant";
import { reviewSchema } from "./review";
import { socialMediaSchema } from "./socialMedia";

export const schemaTypes = [
  restaurantSchema,
  cuisineSchema,
  menuItemSchema,
  reviewSchema,
  operatingHourSchema,
  socialMediaSchema,
  // Add other schemas as needed
];