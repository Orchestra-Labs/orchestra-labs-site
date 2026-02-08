import React from 'react';
import orchestraLogo from '@/assets/images/orchestra_logo.svg';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <img src={orchestraLogo} alt="Orchestra Labs" className="h-8 w-8" />
    <span
      className="text-white font-normal tracking-[0.2em] text-lg"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      ORCHESTRA LABS
    </span>
  </div>
);

export default Logo;
