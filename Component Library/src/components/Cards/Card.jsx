import React from 'react'
import './CardStyle.css'
import CardDefaultIcon from "../../assets/card_icons/cardDefaultIcon.svg"

export default function Card({ icon, icon_backgroundColor, icon_alt, title, text, children}) {

    // Log a dev-only warning to inform user when expected or required props are not passed
    // Defaults are used as fallback
    if (!icon) {
        console.warn('No icon prop was passed. A default icon was used as fallback.')
    }

    if (!icon_alt) {
        console.warn('No icon_alt prop was passed. A default icon alt was used as fallback.')
    }

    if (!icon_backgroundColor) {
        console.warn('No icon_backgroundColor prop was passed. A default background color was used as fallback.')
    }

    if (!title) {
        console.warn('No title prop was passed. Title not displayed in component.')
    }
     if (!text || !children) {
        console.warn('No text or children prop was passed. Text or children not displayed in component.')
    }

    // Use default icon if no icon is passed as prop
    const cardIcon = icon ?? CardDefaultIcon

    // Apply default bg if no icon_backgroundColor prop was passed 
    const cardIconBg = {
        backgroundColor: icon_backgroundColor ? icon_backgroundColor : '#3F75FE',
    }
    // Apply icon alt text if icon alt prop was passed otherwise use default alt text 
    const cardAltText =  icon_alt ? icon_alt : 'Icon'

    // Children prop takes precedence over text prop
    const cardContent = children ?? text

    return (
        <div className="card-container">

            <div className="card-icon-container" style={cardIconBg}>
                <img src={cardIcon} alt={cardAltText} className="card-icon" />
            </div>

            <div className="card">
                {/* Conditional rendering of title if title prop was passed */}
                {title && <p className="card-title">{title}</p>}
                {/* Conditional rendering of card text based on whether text or children prop was passed */}
                {cardContent && <p className="card-text">{cardContent}</p>}
            </div>

        </div>
    )
}