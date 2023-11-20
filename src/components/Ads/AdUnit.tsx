"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import {
  Display as AdLayout_Display,
  InArticle as AdLayout_InArticle,
  type Layout as AdLayout,
} from './AdLayout';
import { isPublisherId, isSlotId } from './Utils';

type AdUnitProps = {
  publisherId?: string;
  slotId: string;
  layout: AdLayout;
  customLayout?: JSX.Element;
  comment?: string;
};

/**
 * @param publisherId - Google AdSense publisher ID
 * @param slotId - Google AdSense slot ID
 * @param layout - Google AdSense ad unit layout
 * @param comment - Comment for the unit, it will be used to generate a unique key for the unit, easier to debug
 */
const AdUnit = ({
  publisherId,
  slotId,
  layout = 'display',
  customLayout,
  comment = 'regular',
}: AdUnitProps): JSX.Element | null => {
  const _publisherId =
    process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? publisherId;

  if (!isPublisherId(_publisherId) || !isSlotId(slotId)) {
    console.error(
      '❌ [next-google-adsense] Invalid publisherId or slotId found for the unit.'
    );
    return null;
  }

  const clientId = `ca-${_publisherId}`;

  let Ad: JSX.Element;

  switch (layout) {
    case 'display':
      Ad = <AdLayout_Display dataAdClient={clientId} dataAdSlot={slotId} />;
      break;
    case 'in-article':
      Ad = <AdLayout_InArticle dataAdClient={clientId} dataAdSlot={slotId} />;
      break;
    case 'custom':
      // TODO: add verification to custom layout
      if (!customLayout) {
        console.error(
          '❌ [next-google-adsense] Custom layout is not provided for the unit.'
        );
        return null;
      }
      Ad = customLayout;
      break;
    default:
      Ad = <AdLayout_Display dataAdClient={clientId} dataAdSlot={slotId} />;
      break;
  }

  const pathname = usePathname();

  return (
    <div
      key={
        pathname.replace(/\//g, '-') +
        '-' +
        slotId +
        '-' +
        comment.replace(' ', '-')
      }
    >
      {Ad}
      <Script id='next-google-adsense' strategy='afterInteractive'>
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </div>
  );
};

export { AdUnit };

