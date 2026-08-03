// Google Ads & Meta Ads DataLayer Events

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

// Initialize dataLayer
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Helper function for gtag
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Helper function for dataLayer push
export const pushToDataLayer = (event: object) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
};

// ============================================
// STANDARD EVENTS FOR GOOGLE ADS
// ============================================

// Page View - automatically tracked by gtag config
export const trackPageView = (pagePath?: string) => {
  gtag('event', 'page_view', {
    page_path: pagePath || window.location.pathname,
    page_title: document.title,
  });
};

// Lead - When user shows interest (e.g., clicks WhatsApp button)
export const trackLead = (leadData?: {
  value?: number;
  currency?: string;
  lead_source?: string;
}) => {
  gtag('event', 'generate_lead', {
    value: leadData?.value || 0,
    currency: leadData?.currency || 'BRL',
    lead_source: leadData?.lead_source || 'website',
  });

  pushToDataLayer({
    event: 'generate_lead',
    ...leadData,
  });
};

// Contact - When user initiates contact
export const trackContact = (contactMethod: string) => {
  gtag('event', 'contact', {
    method: contactMethod,
  });

  pushToDataLayer({
    event: 'contact',
    contact_method: contactMethod,
  });
};

// Click to Call/WhatsApp
export const trackClickToContact = (contactType: 'whatsapp' | 'phone' | 'email') => {
  gtag('event', 'click_to_contact', {
    contact_type: contactType,
  });

  pushToDataLayer({
    event: 'click_to_contact',
    contact_type: contactType,
  });

  // Also track as conversion for Google Ads
  gtag('event', 'conversion', {
    send_to: 'AW-11144025715',
    event_category: 'contact',
    event_label: contactType,
  });
};

// View Content - When user views important content
export const trackViewContent = (contentData: {
  content_name: string;
  content_category?: string;
  content_id?: string;
}) => {
  gtag('event', 'view_item', {
    items: [{
      item_name: contentData.content_name,
      item_category: contentData.content_category,
      item_id: contentData.content_id,
    }],
  });

  pushToDataLayer({
    event: 'view_content',
    ...contentData,
  });
};

// Scroll Depth - Track scroll milestones
export const trackScrollDepth = (percentage: number) => {
  gtag('event', 'scroll', {
    percent_scrolled: percentage,
  });

  pushToDataLayer({
    event: 'scroll_depth',
    scroll_percentage: percentage,
  });
};

// Button Click - Generic button tracking
export const trackButtonClick = (buttonData: {
  button_name: string;
  button_location: string;
  button_action?: string;
}) => {
  gtag('event', 'button_click', {
    button_name: buttonData.button_name,
    button_location: buttonData.button_location,
    button_action: buttonData.button_action,
  });

  pushToDataLayer({
    event: 'button_click',
    ...buttonData,
  });
};

// ============================================
// STANDARD EVENTS FOR META ADS (Facebook Pixel)
// ============================================

// Meta Lead Event
export const trackMetaLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
  pushToDataLayer({ event: 'meta_lead' });
};

// Meta Contact Event
export const trackMetaContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
  pushToDataLayer({ event: 'meta_contact' });
};

// Meta ViewContent Event
export const trackMetaViewContent = (contentData?: {
  content_name?: string;
  content_category?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', contentData);
  }
  pushToDataLayer({ event: 'meta_view_content', ...contentData });
};

// ============================================
// COMBINED TRACKING (Google + Meta)
// ============================================

// Track WhatsApp Click (for both platforms)
export const trackWhatsAppClick = (source: string) => {
  // Google Ads
  trackClickToContact('whatsapp');
  trackLead({ lead_source: source });
  
  // Meta Ads
  trackMetaLead();
  trackMetaContact();
  
  // DataLayer for GTM
  pushToDataLayer({
    event: 'whatsapp_click',
    click_source: source,
    timestamp: new Date().toISOString(),
  });
};

// Track CTA Click
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackButtonClick({
    button_name: ctaName,
    button_location: ctaLocation,
    button_action: 'cta_click',
  });
  
  pushToDataLayer({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

export default {
  trackPageView,
  trackLead,
  trackContact,
  trackClickToContact,
  trackViewContent,
  trackScrollDepth,
  trackButtonClick,
  trackMetaLead,
  trackMetaContact,
  trackMetaViewContent,
  trackWhatsAppClick,
  trackCTAClick,
};
