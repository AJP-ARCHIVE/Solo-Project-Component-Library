import React from 'react'
import DefaultImageDesktop from '../../assets/testimonial/defaultImageDesktop.svg'
import DefaultImageMobile from '../../assets/testimonial/defaultImageMobile.svg'
import QuoteIcon from '../../assets/testimonial/quoteIcon.svg'
import TestimonialQuote from './TestimonialQuote.jsx'
import "./TestimonialStyle.css"



export default function TestimonialWithImage({ desktopImage, mobileImage, imageAlt, quote, author, role, viewport }) {

    // Use default viewport 'mobile' if no viewport prop is passed 
    const testimonialViewport = viewport ?? 'mobile'
    const viewportType = {
        desktop: desktopImage ? desktopImage : DefaultImageDesktop,
        mobile: mobileImage ? mobileImage : DefaultImageMobile
    }
    //Use default image if no viewport prop and image (desktop/or mobile) are not passed
    const testimonialImage = viewportType[viewport] ?? DefaultImageMobile

    // Log a dev-only warning to inform user when expected or required props are not passed
    // And that default fallbacks were used instead 
    if (viewport === 'desktop' && !desktopImage) {
        console.warn('No desktopImage prop was passed for viewport desktop. A default desktop image was used as fallback.')
    }

    if (viewport === 'mobile' && !mobileImage) {
        console.warn('No mobileImage prop was passed for viewport desktop. A default mobile image was used as fallback.')
    }

    if (!imageAlt) {
        console.warn('No imageAlt prop was passed for viewport desktop. A default image alt was used as fallback based on viewport.')
    }

   
    return (
   
            <div className={`testimonial testimonial-with-image-container ${testimonialViewport}`}>
                <img src={testimonialImage} alt={imageAlt ? imageAlt : 'Testimonial image'} className={`testimonial-image ${testimonialViewport}`} />
                <TestimonialQuote hasImage={true} quote={quote} author={author} role={role} testimonialViewport={testimonialViewport} testimonialImageAlt={imageAlt} />
            </div>
         

    )
}

