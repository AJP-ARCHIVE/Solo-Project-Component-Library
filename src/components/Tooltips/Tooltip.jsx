import React from 'react'
// import DefaultTooltipIcon from '../../assets/tooltip_icons/tooltipIcon.svg'

import "./TooltipStyle.css"

export default function Tooltip({ variant, mode, svgElement, title, text, hoveredContent }) {
    
    const defaultTooltipModes = {
        bold: 'bold',
        light: 'light'
    }
    
    const defaultTooltipVariants = {
        achromatic: 'achromatic',
        blue: 'blue',
        purple: 'purple',
        green: 'green'
    }

    
    // Use default if no mode and or variant props are passed
    // Default mode = light. Default variant = 'achromatic' 
    const tooltipModes = defaultTooltipModes[mode] ?? 'light'
    const tooltipVariant = defaultTooltipVariants[variant] ?? 'achromatic'

    
    // Conditional classes
    const tooltipModeClass = `tooltip-${tooltipModes}-${tooltipVariant}` 
    const tooltipTitleClass = tooltipModes === 'light' ? `tooltip-title-${tooltipModes}-${tooltipVariant}` : 'tooltip-title-bold'
    const tooltipTextClass = `tooltip-text-${tooltipModes}-${tooltipVariant}` 
    const tooltipIconClass = `tooltip-icon-${tooltipModes}-${tooltipVariant}`

    // use default icon if no icon prop is passed
    const defaultTooltipIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  

    // Use default tooltip icon if no svg element is passed 
    const tooltipIcon = svgElement ?? defaultTooltipIcon

    
    // Log a dev-only warning to inform user that required 'variant' or 'mode' prop is missing or invalid
    // Use default/fallback if there is no variant or mode prop or if the passed variant or mode prop is invalid
    if (!variant) {
        console.warn('Variant prop is required. Missing variant prop. Default variant "achromatic" was used as fallback');
    }
    if (!defaultTooltipVariants[variant]) {
        console.warn('Invalid variant prop was passed. Default variant "achromatic" was used as fallback')
    }
    if (!defaultTooltipModes[mode]) {
        console.warn("Invalid mode prop was passed. Default variant 'light' was used as fallback.");
    }
    if (!mode) {
        console.warn("Variant mode is required. Missing mode prop. Default variant 'light' was used as fallback");
    }

    if (!hoveredContent) {
        console.warn('No hoveredContent prop was passed. No content will be displayed to hover over.')
    }

    return (
        <div className="tooltip-container">
            {hoveredContent && <div className="hovered-content">{hoveredContent}</div>}
            <div className={`tooltip-content ${tooltipModeClass}  `}>
                <div className={`tooltip-icon default ${tooltipIconClass} `} role="img" aria-hidden="true">{tooltipIcon}</div>
                <div className="tooltip-title-text-container">
                    {title && <p className={`tooltip-title ${tooltipTitleClass}`}>{title}</p>}
                    {text && <p className={tooltipTextClass}>{text}</p>}
                </div>
            </div>   
        </div> 
    )
}