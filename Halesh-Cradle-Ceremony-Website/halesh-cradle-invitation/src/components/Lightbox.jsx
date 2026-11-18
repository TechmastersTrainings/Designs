import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>

        <img src={image.src} alt={image.caption || 'Enlarged photo'} className="lightbox-img" />

        {image.caption && <div className="lightbox-caption">{image.caption}</div>}
      </div>
    </div>
  );
};

