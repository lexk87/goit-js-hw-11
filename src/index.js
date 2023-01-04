import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { showElement, hideElement } from './js/add-remove-hidden-class';
import { refs } from './js/refs';
import { clearBtn, loadBtn } from './js/buttons';
import { pixabay } from './js/fetch';
import { createGalleryCardsMarkup } from './js/create-gallery-cards';

const {
    formEl,
    inputEl,
    submitBtnEl,
    contentPlaceholderEl,
    galleryEl } = refs;

const lightboxInstance = new SimpleLightbox('.gallery .photo-card a', {
    captionDelay: 250,
    captionsData: "alt",
});

// Makes "Clear input" button visible/hidden depending on input value
function toggleClearBtnEl(e) {
    const query = e.target.value;
    
    if (query === "") {
        clearBtn.hide();
    } else {
        clearBtn.show();
    };
};

// Clears input by pressing "Clear input" button
function clearInput() {
    formEl.reset();
    clearBtn.hide();
    inputEl.focus();
};

formEl.addEventListener("input", toggleClearBtnEl);
clearBtn.btn.addEventListener("click", clearInput);

console.log(pixabay.fetchData());