import { getFromLocalStorage, setToLocalStorage } from "./localstoragehelper";


// Function to apply the theme and save to localStorage
export const applyTheme = (theme: string) => {
  document.documentElement.classList.remove(...document.documentElement.classList);
  document.documentElement.classList.add(theme);
  setToLocalStorage('theme', theme);  // Save theme to localStorage
};

// Function to get the theme from localStorage or default to "green-light"
export const getSavedTheme = (): string => {
  const theme = getFromLocalStorage('theme');
  return theme || '';  // Default to 'green-light' if no theme is found
};