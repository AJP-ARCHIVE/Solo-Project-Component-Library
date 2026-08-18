import React from 'react'
import "./TestimonialStyle.css"
import QuoteIcon from '../../assets/testimonial/quoteIcon.svg'
import DotPatternDesktop from '../../assets/testimonial/dotPatternDesktop.svg'
import DotPatternMobile from '../../assets/testimonial/dotPatternMobile.svg'

export default function TestimonialQuote({ hasImage, testimonialMedia, testimonialImageAlt, pattern, quote, author, role, testimonialViewport }) {

    // Conditional class based on whether the parent component is TestimonialWithImage or TestimonialWithoutImage
    const testimonialClass = hasImage ? 'with-image' : 'without-image'

  
    // Conditional render of decorator icon or pattern based on whether the component is to have an image or no image and viewport type. 
    const testimonialDecorator = !hasImage && testimonialViewport === 'desktop' ? DotPatternDesktop : !hasImage && testimonialViewport === 'mobile' ? DotPatternMobile : QuoteIcon

    return (
          <figure className={`testimonial-content-container ${testimonialViewport} ${testimonialClass}`}>
                             
            {quote && (
                <div className={`quote-container ${testimonialClass} ${testimonialViewport}`}>
                 {/* Decorative quote image */}
                    <div className={`icon-wrapper  ${testimonialClass} ${testimonialViewport}`}>
                    <img src={testimonialDecorator} aria-hidden="true" className={`testimonial-icon ${testimonialClass} ${testimonialViewport}`} alt="testimonial decorator image" /> 
                    </div>
                
                    <div className={`testing ${testimonialViewport} ${testimonialClass}`}>
                    {testimonialMedia && 
                    <img src={testimonialMedia} className={`logo-image ${testimonialClass} ${testimonialViewport}`} alt={testimonialImageAlt} />}
                 
                    <blockquote className={`quote ${testimonialViewport}`}>{testimonialClass === 'without-image' ? `"${quote}"` : quote}</blockquote>
                
                   
                
        
                    {name || role && (
                    <figcaption className={`quote-attributes-container ${testimonialViewport}`}>
                        <div className={`author-container ${testimonialClass} ${testimonialViewport}`}>
                             
                            <strong className={`author ${testimonialClass} ${testimonialViewport}`}>{author ? author : null}</strong>
                            {testimonialClass === 'without-image' &&testimonialViewport === 'desktop' &&
                            <span className="separator"> / </span>}
                            <p className={`role ${testimonialClass} ${testimonialViewport}`}>{role ? role : null}</p>
                        </div>
                    </figcaption>
            )}
                </div>
                </div>
            )
            }
          
            </figure>
    )
}