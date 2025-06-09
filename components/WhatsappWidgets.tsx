'use client';

import Script from 'next/script';

export default function WhatsAppFloat() {
  return (
    <Script
      src="https://dash.wapikon.com/script/wa-link.js?code=1742636358126139"
      strategy="afterInteractive"
    />
  );
}
