import React from 'react';
import { MessageCircle, MapPin, Phone, CalendarDays } from 'lucide-react';

const actions = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WA',
    href: 'https://wa.me/919505116789?text=Hi%20Advanced%20Focus%20Eye%20Team%2C%20I%20need%20an%20Appointment.',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    href: 'https://maps.app.goo.gl/2J1atqWV7MSwF6Vg8',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Call',
    href: 'tel:+919505116789',
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    label: 'Book',
    href: '#hero-mobile-name',
    isScroll: true,
  },
];

export default function MobileActionBar({ onBook }) {
  const handleClick = (action, e) => {
    if (action.isScroll) {
      e.preventDefault();
      if (onBook) {
        onBook();
      } else {
        const el = document.getElementById('hero-mobile-name');
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex justify-evenly items-center py-2.5 px-2">
        {actions.map((action, idx) => (
          <a
            key={idx}
            href={action.href}
            target={action.isScroll ? undefined : '_blank'}
            rel={action.isScroll ? undefined : 'noopener noreferrer'}
            onClick={(e) => handleClick(action, e)}
            className="flex flex-col items-center gap-1 text-[#002d5c] hover:text-[#00829b] transition-colors min-w-[50px]"
          >
            {action.icon}
            <span className="text-[10px] font-semibold">{action.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
