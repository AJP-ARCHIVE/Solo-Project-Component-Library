import React from "react"
// Badge Component CSS file 
import './BadgeStyle.css' 

export default function Badge( { color, shape, text, children }) {

    const badgeColor = {
        gray: `badge-gray`,
        red: 'badge-red',
        yellow: 'badge-yellow',
        green: 'badge-green',
        blue: 'badge-blue',
        indigo: 'badge-indigo',
        purple: 'badge-purple',
        pink: 'badge-pink'
    }
    // Default badge color styling is gray if no valid color prop is passed 
    const badgeVariantColorClass = badgeColor[color] ?? 'badge-gray'
    
    const badgeShape = {
        square: 'badge-shape-square',
        pill: 'badge-shape-pill'
    }
    
    // Default badge shape style is 'square' 
    const badgeVariantShapeClass = badgeShape[shape] || 'badge-shape-square'

    // Children prop takes precedence over text prop
    const badgeContent = children ?? text 

    // Log a dev-only warning to inform user when expected or required props are not passed
    // Defaults are used as fallback
    if (!color) {
        console.warn('No color prop was passed. A default color "gray" was used as fallback.')
    }

    if (!shape) {
        console.warn('No shape prop was passed. A default shape "pill" was used as fallback.')
    }

    if (!text || !children) {
          if (!color) {
        console.warn('No text or children prop was passed. No text or children will be displayed in component. ')
    }
    }


    return (
        <div className={`badge ${badgeVariantColorClass} ${badgeVariantShapeClass}`}>
            {/* Conditional rendering of badge text based on whether text or children prop was passed */}
            {badgeContent && badgeContent}
        </div>
        
    )
}