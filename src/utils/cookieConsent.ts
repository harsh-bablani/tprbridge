/**
 * Cookie Consent Utility Functions
 * 
 * Use these functions to check if user has accepted cookies
 * and conditionally enable/disable features based on consent.
 */

export type CookieConsentStatus = 'accepted' | 'declined' | null

/**
 * Get the current cookie consent status
 * @returns 'accepted', 'declined', or null if not set
 */
export function getCookieConsent(): CookieConsentStatus {
  if (typeof window === 'undefined') return null
  const consent = localStorage.getItem('cookieConsent')
  return consent as CookieConsentStatus
}

/**
 * Check if user has accepted cookies
 * @returns true if cookies are accepted, false otherwise
 */
export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === 'accepted'
}

/**
 * Check if user has declined cookies
 * @returns true if cookies are declined, false otherwise
 */
export function hasDeclinedCookies(): boolean {
  return getCookieConsent() === 'declined'
}

/**
 * Get the date when consent was given
 * @returns ISO date string or null
 */
export function getCookieConsentDate(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('cookieConsentDate')
}

/**
 * Track page view (only if cookies accepted)
 */
export function trackPageView(_pageName: string) {
  if (hasAcceptedCookies()) {
    // Add your analytics tracking here
    // Example: window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: _pageName })
  }
}

/**
 * Track user event (only if cookies accepted)
 */
export function trackEvent(_eventName: string, _eventData?: Record<string, any>) {
  if (hasAcceptedCookies()) {
    // Add your analytics tracking here
    // Example: window.gtag('event', _eventName, _eventData)
  }
}

/**
 * Example: Store user preferences (only if cookies accepted)
 */
export function storeUserPreference(key: string, value: any) {
  if (hasAcceptedCookies()) {
    localStorage.setItem(`pref_${key}`, JSON.stringify(value))
    return true
  }
  return false
}

/**
 * Example: Get user preferences (only if cookies accepted)
 */
export function getUserPreference(key: string): any {
  if (hasAcceptedCookies()) {
    const value = localStorage.getItem(`pref_${key}`)
    return value ? JSON.parse(value) : null
  }
  return null
}

