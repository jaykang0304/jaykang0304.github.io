import React from 'react';

// 보글이 로고 이미지
export const DogIcon = ({ size = 40, className = '' }) => (
  <img 
    src={process.env.PUBLIC_URL + '/boglelogo.png'}
    alt="보글이"
    width={size}
    height={size}
    className={className}
    style={{ 
      objectFit: 'contain',
      borderRadius: '50%'
    }}
  />
);

// 로고 컴포넌트 (아이콘 + 텍스트)
export const Logo = ({ showText = true, size = 40, className = '' }) => (
  <div 
    className={className}
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem',
    }}
  >
    <DogIcon size={size} />
    {showText && (
      <span style={{ 
        fontSize: size * 0.55, 
        fontWeight: 700,
        color: 'var(--color-text)',
        letterSpacing: '-0.02em',
      }}>
        Bogle Studio
      </span>
    )}
  </div>
);

export default Logo;
