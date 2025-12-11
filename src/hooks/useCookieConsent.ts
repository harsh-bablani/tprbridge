import { useState, useEffect } from 'react'
import { getCookieConsent, hasAcceptedCookies, type CookieConsentStatus } from '../utils/cookieConsent'

/**
 * React hook to check cookie consent status
 * Automatically updates when consent changes
 * 
 * @example
 * const { hasConsent, consentStatus } = useCookieConsent()
 * if (hasConsent) {
 *   // Enable analytics, tracking, etc.
 * }
 */
export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(null)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check initial status
    const status = getCookieConsent()
    setConsentStatus(status)
    setHasConsent(hasAcceptedCookies())

    // Listen for storage changes (when user accepts/declines)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        const newStatus = getCookieConsent()
        setConsentStatus(newStatus)
        setHasConsent(hasAcceptedCookies())
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Also listen for custom event (for same-tab updates)
    const handleConsentChange = () => {
      const newStatus = getCookieConsent()
      setConsentStatus(newStatus)
      setHasConsent(hasAcceptedCookies())
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cookieConsentChanged', handleConsentChange)
    }
  }, [])

  return {
    consentStatus,
    hasConsent,
    hasDeclined: consentStatus === 'declined',
    isPending: consentStatus === null,
  }
}

