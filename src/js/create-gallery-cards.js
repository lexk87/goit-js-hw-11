export function createGalleryCardsMarkup(imgDataArr) {
    const markup = imgDataArr.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card"><a href="${largeImageURL}" class="photo-card__link"><img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo-card__img"/></a><ul class="info"><li class="info-item" title="Likes"><i class="fa-solid fa-heart info-item__img"></i><p class="info-item__txt">${likes}</p></li><li class="info-item" title="Views"><i class="fa-solid fa-eye info-item__img"></i><p class="info-item__txt">${views}</p></li><li class="info-item" title="Comments"><i class="fa-solid fa-comment info-item__img"></i><p class="info-item__txt">${comments}</p></li><li class="info-item" title="Downloads"><i class="fa-solid fa-cloud-arrow-down info-item__img"></i><p class="info-item__txt">${downloads}</p></li></ul></div>`
    }).join("");
    return markup;
};