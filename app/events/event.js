import { sortByPriceButton } from "../element.js";
import { sortBooksByPrice } from "../sortBooks.js";

export function registerEvents() {
    if (sortByPriceButton) {
        sortByPriceButton.addEventListener('click', sortBooksByPrice);
    }
}