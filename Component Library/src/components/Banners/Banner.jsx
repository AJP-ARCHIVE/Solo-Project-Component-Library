import React from 'react'
import './BannerStyle.css'
import SuccessIcon from '../../assets/banner_icons/successIcon.svg'
import WarningIcon from "../../assets/banner_icons/warningIcon.svg"
import DangerIcon from "../../assets/banner_icons/dangerIcon.svg"
import NeutralIcon from "../../assets/banner_icons/neutralIcon.svg"

export default function Banner({status, title, text, children}) {

    const bannerColor = {
        success: 'banner-success',
        warning: 'banner-warning',
        danger: 'banner-danger',
        neutral: 'banner-neutral'
    }

    const bannerTitle  = {
        success: 'banner-title-success',
        warning: 'banner-title-warning',
        danger: 'banner-title-danger',
        neutral: 'banner-title-neutral'
    }

    const bannerText = {
        success: 'banner-text-success',
        warning: 'banner-text-warning',
        danger: 'banner-text-danger',
        neutral: 'banner-text-neutral'
    }

    const bannerIcon = {
        success: SuccessIcon,
        warning: WarningIcon,
        danger: DangerIcon,
        neutral: NeutralIcon
    }

    // Default banner style is neutral if no valid status class is passed
    const bannerVariantColorClass = bannerColor[status] ?? 'banner-neutral'
    const bannerVariantTitleClass = bannerTitle[status] ?? 'banner-title-neutral'
    const bannerVariantTextClass = bannerText[status] ?? 'banner-text-neutral'
    const bannerIconVariant = bannerIcon[status] ?? 'neutral'

    // Children prop takes precedence over text prop
    const bannerContent = children ?? text

    // Log a dev-only warning to inform user when expected or required props are not passed
    // Defaults are used as fallback
    if (!status) {
        console.warn('No status prop was passed. A default status of "neutral" was used as fallback.')
    }

    if (!title) {
        console.warn('No title prop was passed. No title displayed in component.')
    }
    
    if (!text || !children) {
        console.warn('No text or children prop was passed. No text or children displayed in component.')
    }

    return (
        <section className={`banner ${bannerVariantColorClass}`} aria-live="polite" role="status">
            <img src={bannerIconVariant} alt={`${status} icon`} className="banner-icon" />
            <div className="banner-text-title-container">
                {/* Conditional rendering of 'title' based on whether title prop was passed */}
                {title && <p className={`banner-title ${bannerVariantTitleClass}`}>{title}</p>}
                {/* Conditional rendering of single line or multi-line banner based on whether text or children prop was passed */}
                {bannerContent && <p className={bannerVariantTextClass}>{bannerContent}</p>}
            </div>
        </section>
    )
}