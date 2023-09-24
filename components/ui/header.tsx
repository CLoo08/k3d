import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';

import Banner from '@/public/images/Banner-modelado.webp';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}            
              <Image
                className="rounded-full"
                src={Banner}
                width={80}
                height={80}
                alt="Logo"
                style={{ marginTop: '50px' }} // Agrega el margen superior aquí
              />
          </div>      
        </div>
      </div>
    </header>
  );
}
