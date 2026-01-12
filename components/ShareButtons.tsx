'use client';

import { Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

export const ShareButtons = ({ title, url, className = '' }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  
  const shareData = {
    title: title,
    url: url,
  };
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Sharing failed or was cancelled', error);
      }
    } else {
      // Fallback to copying the link
      handleCopyLink();
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={handleShare}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Share"
      >
        <Share2 size={18} />
      </button>
      
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Share on Twitter"
      >
        <span className="text-[#1DA1F2]">X</span>
      </a>
      
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <span className="text-[#0077B5]">in</span>
      </a>
      
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Share on Facebook"
      >
        <span>f</span>
      </a>
      
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1"
        aria-label={copied ? "Link copied" : "Copy link"}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? <span className="text-xs">Copied!</span> : <span className="text-xs">Copy</span>}
      </button>
    </div>
  );
};