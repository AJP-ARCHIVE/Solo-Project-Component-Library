import React from 'react'
import TestimonialLogo from '../../assets/testimonial/logo.svg'
import TestimonialQuote from './TestimonialQuote.jsx'
import "./TestimonialStyle.css"


export default function TestimonialWithoutImage({ logo, logoImageAlt, quote, author, role, viewport }) {
    // Use default viewport 'mobile' if no viewport prop is passed 
    const testimonialViewport = viewport ?? 'mobile'

    //Use default logo if no logo prop is not passed 
    const testimonialImage = logo ?? TestimonialLogo


    // Log a dev-only warning to inform user when expected or required props are not passed
    // And that default fallbacks were used instead 
    if (!viewport) {
        console.warn('No viewport prop was passed. A default viewport of "mobile" was used as fallback.')
    }

    if (!logo) {
        console.warn('No logo prop was passed. A default logo image was used as fallback.')
    }

    if (!logoImageAlt) {
        console.warn('No logoImageAlt prop was passed for viewport desktop. A default image alt was used as fallback based on viewport.')
    }

    if (!quote) {
        console.warn('No quote prop was passed. No quote displayed in component.')
    }

    if (!author) {
        console.warn('No author prop was passed. No author displayed in component.')
    }

    if (!role) {
        console.warn('No role prop was passed. No role displayed in component.')
    }

    return (

            <div className={`testimonial testimonial-without-image-container ${testimonialViewport}`}>
                <TestimonialQuote hasImage={false} testimonialMedia={testimonialImage} testimonialImageAlt={logoImageAlt} quote={quote} author={author} role={role} testimonialViewport={testimonialViewport}/>
            </div>

    )
}

