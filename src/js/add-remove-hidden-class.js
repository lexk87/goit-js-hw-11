// Removes "hidden" class
export function showElement(element) {
    element.classList.remove("hidden");
};

// Adds "hidden" class
export function hideElement(element) {
    element.classList.add("hidden");
};