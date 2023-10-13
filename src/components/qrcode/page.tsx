import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

interface GenerateQRProps {
  url: string | URL;
  size?: number;
  background?: string;
  color?: string;
}

const GenerateQR: React.FC<GenerateQRProps> = ({ url, size = 512, background = 'white', color = 'black' }) => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (qrCodeRef.current) {
      const qrCode = new QRCodeStyling({
        width: size,
        height: size,
        data: url.toString(),
        image: '',
        margin: 20,
        qrOptions: {
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'Q',
        },
        dotsOptions: {
          color: color,
          type: 'square',
        },
        backgroundOptions: {
          color: background,
        },
      });

      qrCode.append(qrCodeRef.current);
      qrCode.update();
    }
  }, [url, size, background, color]);

  return (
    <div ref={qrCodeRef}></div>
  );
};

export default GenerateQR;