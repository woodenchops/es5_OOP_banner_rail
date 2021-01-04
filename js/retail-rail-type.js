export const retailOne = (props) => {
    return `<div class="retail-rail ${props._styles && props._styles.map(x => x).join('')}">

                <div class="content-wrap">

                <div class="text-container retail-rail__child">
                
                    <h3 class="retail-rail__title">${props._title}</h3>
                    <p class="retail-rail__body-text">${props._description}</p>

                </div>
                
                ${props._cta.map(cta => {
                    return cta.id && `<a href="${cta.link}" id=${cta.id} tabindex="0" aria-label="find out more link" class="retail-rail__child retail-rail__cta ${[...cta.classes].join(' ')}">${cta.text}</a>`;
                }).join(' ')}

                <button class="retail-rail__close icon-close"></button>

                </div>
    
            </div>`;
};

