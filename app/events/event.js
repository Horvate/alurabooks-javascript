import { sortByPriceButton, buttons } from "../element.js";
import { sortBooksByPrice } from "../sortBooks.js";
import { handleFilterClick } from "../metodoFilter.js";

export function registerEvents() {
    buttons.forEach(btn => btn.addEventListener("click", handleFilterClick));
    if (sortByPriceButton) {
        sortByPriceButton.addEventListener('click', sortBooksByPrice);
    }
}