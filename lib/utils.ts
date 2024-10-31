import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// ClassValue and clsx are imported from the clsx package. clsx is a utility for combining class names conditionally. It handles arrays, objects, strings, and even falsy values, returning a properly formatted class string.
// twMerge is imported from the tailwind-merge package, which merges Tailwind class names, resolving any conflicts (e.g., if both bg-red-500 and bg-blue-500 are present, twMerge will keep only the last class, bg-blue-500).
