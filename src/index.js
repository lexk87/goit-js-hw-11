import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { showElement, hideElement } from './js/add-remove-hidden-class';
import { refs } from './js/refs';
import { clearBtn, loadBtn } from './js/buttons';
import { pixabay } from './js/fetch';
import { createGalleryCardsMarkup } from './js/create-gallery-cards';

const {
    formEl,
    inputEl,
    contentPlaceholderEl,
    galleryEl } = refs;

const lightboxInstance = new SimpleLightbox('.gallery .photo-card a', {
    captionDelay: 250,
    captionsData: "alt",
});

function toggleClearBtnEl(e) {
    const query = e.target.value;
    
    if (query === "") {
        clearBtn.hide();
    } else {
        clearBtn.show();
    };
};

function clearInput() {
    formEl.reset();
    clearBtn.hide();
    inputEl.focus();
};

function clearGallery() {
    galleryEl.innerHTML = "";
};

function onFormSubmit(e) {
    e.preventDefault();

    pixabay.searchQuery = e.currentTarget.elements.searchQuery.value.trim();

    clearGallery();
    pixabay.resetPageNumber();
    loadBtn.hide();

    if (!pixabay.searchQuery) {
        contentPlaceholderEl.innerHTML = "Oops, your search request is empty! Please, enter something.";
        showElement(contentPlaceholderEl);
        Notify.failure("Oops, your search request is empty! Please, enter something.");
        inputEl.focus();
        return;
    };

    showSearchResult();
};

async function showSearchResult() {
    loadBtn.disable();

    try {
        const { hits, totalHits } = await pixabay.fetchData();

        if (hits.length === 0) {
            contentPlaceholderEl.innerHTML = "Sorry, there are no images matching your search request. Please try again.";
            showElement(contentPlaceholderEl);
            Notify.failure("Sorry, there are no images matching your search request. Please try again.");
            return;
        };

        loadBtn.enable();
        loadBtn.show();

        if (pixabay.pageNumber === 1) {
            hideElement(contentPlaceholderEl);
            Notify.success(`Hooray! We found ${totalHits} images.`);
        };

        if (totalHits <= pixabay.pageNumber * 40) {
            Notify.warning("We're sorry, but you've reached the end of search results.");
            loadBtn.hide();
        };

        injectGalleryMarkup(hits);
        pixabay.pageNumber += 1;

    } catch (error) {
        console.error(error);
    };
};

function injectGalleryMarkup(hits) {
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCardsMarkup(hits));
    lightboxInstance.refresh();
};

formEl.addEventListener("input", toggleClearBtnEl);
clearBtn.btn.addEventListener("click", clearInput);
formEl.addEventListener("submit", onFormSubmit);
loadBtn.btn.addEventListener("click", showSearchResult);