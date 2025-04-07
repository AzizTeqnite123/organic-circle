const ReviewSlider = new Swiper(".ReviewSlider", {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    breakpoints: {
        150: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});


// SCRIPT FOR ACCORDIANS FAQS

document.addEventListener('DOMContentLoaded', function () {
    function faqsAccordion() {
        var accordionSections = document.querySelectorAll(".faqWthImgFaq, .FAQmainFaq");

        accordionSections.forEach(section => {
            var accordionItemHeaders = section.querySelectorAll(".accordion-item-header");

            if (accordionItemHeaders.length > 0) {
                var firstAccordionItemHeader = accordionItemHeaders[0];
                var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

                if (firstAccordionItemBody) {
                    firstAccordionItemHeader.classList.add("active");
                    firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
                }
            }

            accordionItemHeaders.forEach(accordionItemHeader => {
                accordionItemHeader.addEventListener("click", event => {
                    var accordionItemBody = accordionItemHeader.nextElementSibling;

                    accordionItemHeaders.forEach(item => {
                        if (item !== accordionItemHeader) {
                            item.classList.remove("active");
                            var body = item.nextElementSibling;
                            if (body) {
                                body.style.maxHeight = 0;
                            }
                        }
                    });

                    accordionItemHeader.classList.toggle("active");

                    if (accordionItemHeader.classList.contains("active") && accordionItemBody) {
                        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                    } else if (accordionItemBody) {
                        accordionItemBody.style.maxHeight = 0;
                    }
                });
            });
        });
    }

    faqsAccordion();
});

// SCRIPT FOR ACCORDIANS FAQS