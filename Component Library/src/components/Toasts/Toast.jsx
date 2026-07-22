import React from 'react'
import { createPortal } from 'react-dom';
import SuccessIcon from "../../assets/toast_icons/successIcon.svg"
import WarningIcon from "../../assets/toast_icons/warningIcon.svg"
import ErrorIcon from "../../assets/toast_icons/errorIcon.svg"
import InformationIcon from "../../assets/toast_icons/informationIcon.svg"
import "./ToastStyle.css"

export default function Toast ( { toast_icon, toast_icon_alt, status, title, text, show_delay_ms, hide_delay_ms } ) {

    // To reference setTimeout timer IDs
    const showToastTimerRef = React.useRef(null)
    const hideToastTimerRef = React.useRef(null)
    
    const [showToast, setShowToast] = React.useState(false)

    const showDelayDuration = Number(show_delay_ms) ?? 2000 // default is 2000 ms (2 seconds)
    const hideDelayDuration = Number(hide_delay_ms) ?? 4000 // default is 4000 ms (4 seconds)
    
    // Trigger Toast to pop-up and hide 
    React.useEffect(() => {
        const showToastTimerId = setTimeout(() => {
            setShowToast(true)
            
        const hideToastTimerId = setTimeout(() => {
            setShowToast(false)
        }, hideDelayDuration) // Hide children element(s) after 'hideDelayDuration' seconds
        
        hideToastTimerRef.current = hideToastTimerId
        
        }, showDelayDuration) // Show children element(s) after 'showDelayDuration ' seconds 
        
       showToastTimerRef.current = showToastTimerId
        
        // Clean up function
        return () => {
            clearTimeout(showToastTimerRef)
            clearTimeout(hideToastTimerRef)
        }
        
    }, [])

    
    const defaultToastStatus = {
        success: {
            status: 'success',
            icon: toast_icon ?? SuccessIcon,
            iconAlt: toast_icon_alt ?? 'success status icon'
        },
        warning: {
            status: 'warning',
            icon: toast_icon ? toast_icon : WarningIcon,
            iconAlt: toast_icon_alt ?? 'warning status icon'
        },
        error: {
            status: 'error',
            icon: toast_icon ? toast_icon : ErrorIcon,
            iconAlt: toast_icon_alt ?? 'error status icon'
        },
        information: {
            status: 'information',
            icon: toast_icon ? toast_icon : InformationIcon,
            iconAlt: toast_icon_alt ?? 'information status indicates icon'
        },    
    }
    
    // Log a dev-only warning to inform user when expected or required props are not passed
    // Use Status: Information as default/fallback if no status prop or if passed status prop is invalid
    if(status && !defaultToastStatus[status]) {
        console.warn("StatusIndicator: valid 'status' prop is required. Options are: 'success', 'warning', 'error', and 'information'. Component not rendered. Default status (information) was used as fallback");
    }
   
    if (!status) {
        console.warn("StatusIndicator: 'status' prop is required. Component not rendered.");
    }
    
    // Use default icon based on status if no icon prop is passed 
    // Status: Information is default status if no status prop is passed 
    const toastIcon = toast_icon ?? defaultToastStatus[status].icon ?? InformationIcon
    // Use default icon text alt based on status if no icon alt text is passed
    const toastIconAlt = toast_icon_alt ?? defaultToastStatus[status].iconAlt ?? defaultToastStatus['information'].iconAlt
    // Use default title based on status if no title is passed 
    // Capitalize first letter of the status
    const toastTitle = title ?? defaultToastStatus[status].status.charAt(0).toUpperCase() + defaultToastStatus[status].status.slice(1);
    console.log(toastTitle)
    // Conditional Classes 
    const toastStatusClass = `toast-${defaultToastStatus[status].status}` ?? 'toast-information'
    const toastTitleClass = `toast-${defaultToastStatus[status].status}-title` 
    const toastTextClass = `toast-${defaultToastStatus[status].status}-text`

    console.log(toastStatusClass)
    console.log(toastTitleClass)
    
    // Nest jsx components in createPortal to render component in DOM body 
    return (
    
        createPortal(
            <div className='toast-container' role="status" aria-live="polite">
            {showToast ?
             <div className={`toast ${toastStatusClass}`}>
               <img src={toastIcon} alt={toastIconAlt} className="toast-icon" /> 
               <div className="toast-title-text-container">
                    <p className={`toast-title ${toastTitleClass}`}>{toastTitle}</p>
                    {text && <p className={`toast-text ${toastTextClass}`}>{text}</p>}
                </div>
            </div> : null }
            </div>, document.body
        )
    
    )
}