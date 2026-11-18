import React, { useState } from 'react';
import { OrnateDivider, FloralCorner, GoldCross } from './GoldOrnaments';
import { MessageSquare, Send, CheckCircle, Share2, Copy } from 'lucide-react';

export const RSVPSection = ({ onAddBlessing }) => {
  const [guestName, setGuestName] = useState('');
  const [attendees, setAttendees] = useState('2');
  const [attending, setAttending] = useState('yes');
  const [blessingMessage, setBlessingMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const familyWhatsappNumber = '917892447247';

  const constructMessage = () => {
    const statusText =
      attending === 'yes'
        ? `Joyfully Attending with ${attendees} guest(s)`
        : 'Regretfully Unable to Attend in person, but sending our deepest prayers and love';

    let msg = `✦ *RSVP: Halesh's Cradle Ceremony* ✦\n\n`;
    msg += `*Guest Name:* ${guestName || 'A Well Wisher'}\n`;
    msg += `*Attendance:* ${statusText}\n`;
    if (attending === 'yes') {
      msg += `*Date:* Sunday, 22 November 2026 (2:40 PM)\n`;
      msg += `*Venue:* Eden Garden Function Hall, Bidar\n`;
    }
    if (blessingMessage.trim()) {
      msg += `\n*Blessing & Wishes for Baby Halesh:*\n"${blessingMessage.trim()}"\n`;
    }
    msg += `\n_With warm regards and God's blessings!_`;
    return msg;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!guestName.trim()) {
      alert('Please enter your name so the Halesh family knows who is RSVPing.');
      return;
    }

    const message = constructMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${familyWhatsappNumber}?text=${encoded}`;

    if (blessingMessage.trim() && onAddBlessing) {
      onAddBlessing({
        name: guestName.trim(),
        text: blessingMessage.trim(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      });
    }

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const message = constructMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWebsite = () => {
    const shareText = `You are cordially invited to celebrate the Cradle Ceremony of baby Halesh on Sunday, 22 November 2026 at Eden Garden Function Hall, Bidar.\n\nView digital invitation: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: "Halesh's Cradle Ceremony Invitation",
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="invitation-section light" id="rsvp">
      <div className="section-container">
        <div className="rsvp-card">
          {/* Top 5-Color Spectrum */}
          <div className="hero-spectrum-top" />

          <div className="verse-inner-frame" />
          <FloralCorner position="top-left" size={54} className="envelope-corner top-left" />
          <FloralCorner position="top-right" size={54} className="envelope-corner top-right" />
          <FloralCorner position="bottom-left" size={54} className="envelope-corner bottom-left" />
          <FloralCorner position="bottom-right" size={54} className="envelope-corner bottom-right" />

          <header className="section-header" style={{ marginBottom: 20 }}>
            <div className="section-badge light-theme">
              <GoldCross size={16} />
              <span>RSVP Confirmation</span>
              <GoldCross size={16} />
            </div>
            <h2 className="section-title dark-text">We Would Be Delighted to Have You With Us</h2>
            <p className="section-subtitle">
              Kindly confirm your gracious presence by filling out the details below to help us prepare with warmth.
            </p>
            <OrnateDivider maxWidth={320} />
          </header>

          <form className="rsvp-form" onSubmit={handleWhatsAppSend}>
            {/* Guest Name */}
            <div className="form-group">
              <label htmlFor="guestName" className="form-label">
                Your Full Name / Family Name *
              </label>
              <input
                id="guestName"
                type="text"
                className="form-input"
                placeholder="e.g. Mr. &amp; Mrs. Joseph / David Family"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </div>

            {/* Attendance Toggle */}
            <div className="form-group">
              <label className="form-label">Will You Be Joining Us?</label>
              <div className="attendance-toggle">
                <button
                  type="button"
                  className={`attendance-btn ${attending === 'yes' ? 'active' : ''}`}
                  onClick={() => setAttending('yes')}
                >
                  <CheckCircle size={16} />
                  <span>Joyfully Attending</span>
                </button>
                <button
                  type="button"
                  className={`attendance-btn ${attending === 'no' ? 'active' : ''}`}
                  onClick={() => setAttending('no')}
                >
                  <span>Regretfully Unable</span>
                </button>
              </div>
            </div>

            {/* Attendees Count */}
            {attending === 'yes' && (
              <div className="form-group">
                <label htmlFor="attendees" className="form-label">
                  Total Number of Family Members Attending
                </label>
                <select
                  id="attendees"
                  className="form-select"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People (Couple)</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People (Family Group)</option>
                </select>
              </div>
            )}

            {/* Personal Blessing / Message */}
            <div className="form-group">
              <label htmlFor="blessingMessage" className="form-label">
                A Prayer or Blessing for Baby Halesh (Optional)
              </label>
              <textarea
                id="blessingMessage"
                className="form-textarea"
                rows="3"
                placeholder="May God bless little Halesh with good health, long life, wisdom and heavenly joy..."
                value={blessingMessage}
                onChange={(e) => setBlessingMessage(e.target.value)}
              />
            </div>

            {/* Submit via WhatsApp */}
            <button type="submit" className="whatsapp-rsvp-btn">
              <MessageSquare size={18} />
              <span>Send RSVP via WhatsApp</span>
              <Send size={16} />
            </button>

            {/* Extra Actions: Copy message & Share invitation */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 10 }}>
              <button
                type="button"
                onClick={handleCopyMessage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 50,
                  background: '#FFFFFF',
                  border: '1px solid rgba(133, 172, 252, 0.5)',
                  fontSize: 12,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--palette-purple)',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Copy size={13} />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy RSVP Text'}</span>
              </button>

              <button
                type="button"
                onClick={handleShareWebsite}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 50,
                  background: '#FFFFFF',
                  border: '1px solid rgba(133, 172, 252, 0.5)',
                  fontSize: 12,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--palette-purple)',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Share2 size={13} />
                <span>Share Invitation</span>
              </button>
            </div>

            <p className="rsvp-note">
              Directly contacts Mr. Arjun Rao Halesh &amp; Family (+91 7892447247) with your details via official WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
