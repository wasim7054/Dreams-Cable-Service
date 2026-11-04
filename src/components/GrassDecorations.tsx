import React from 'react';

/**
 * Reusable Grass and Leaf Nature-inspired vector decorations
 * Tailored for Dream's Cable and Broadband Service
 */

export const GrassBorder: React.FC<{
  position?: 'top' | 'bottom';
  className?: string;
  fillColor?: string;
  accentColor?: string;
}> = ({
  position = 'bottom',
  className = '',
  fillColor = '#004D1A',
  accentColor = '#42C83D',
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        isTop ? 'transform rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 block"
      >
        {/* Soft back blades */}
        <path
          d="M0,64 L0,32 C30,16 60,40 90,24 C130,10 160,35 200,18 C240,32 280,12 320,28 C360,14 400,34 440,20 C480,36 520,16 560,30 C600,14 640,35 680,22 C720,38 760,18 800,32 C840,16 880,36 920,22 C960,38 1000,18 1040,32 C1080,14 1120,34 1160,20 C1180,28 1190,22 1200,26 L1200,64 Z"
          fill={accentColor}
          opacity="0.35"
        />
        {/* Sharp detailed grass blades layer */}
        <path
          d="M0,64 L0,40 
             C15,30 22,12 28,38 
             C38,20 45,8 55,42 
             C68,24 76,14 85,44 
             C98,18 108,6 120,40 
             C135,26 142,16 152,44 
             C165,15 178,4 190,42 
             C205,25 214,14 225,45 
             C238,18 248,8 260,39 
             C275,22 284,10 295,44 
             C310,16 322,6 335,40 
             C350,24 358,12 370,42 
             C385,15 396,4 410,40 
             C425,25 435,14 445,43 
             C460,18 472,6 485,39 
             C500,24 510,12 522,44 
             C535,16 548,5 560,40 
             C575,25 585,12 595,43 
             C610,18 620,8 632,38 
             C645,22 655,10 668,42 
             C682,14 694,4 706,40 
             C720,24 730,12 742,44 
             C755,16 768,6 780,39 
             C795,22 805,10 818,43 
             C832,15 844,5 856,41 
             C870,25 880,14 892,44 
             C905,18 918,6 930,38 
             C945,22 955,10 968,42 
             C982,14 994,4 1006,40 
             C1020,24 1030,12 1042,43 
             C1055,16 1068,6 1080,39 
             C1095,22 1105,10 1118,44 
             C1132,15 1144,5 1156,40 
             C1170,26 1182,18 1200,42 L1200,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const LeafIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 24,
  color = '#087A24',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"
      fill={color}
      opacity="0.18"
    />
    <path
      d="M2 22s5.5-1.5 8-4M17 14l-5-5M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerLeaves: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const getTransforms = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 transform rotate-180 scale-x-[-1]';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0 transform rotate-180';
      case 'bottom-right':
        return 'bottom-0 right-0 transform scale-y-[-1]';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 opacity-40 transition-opacity duration-300 ${getTransforms()} ${className}`}
      aria-hidden="true"
    >
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <path
          d="M95 5C60 5 40 25 35 60C30 25 15 10 5 5C5 40 25 60 60 65C25 70 10 85 5 95C40 95 60 75 65 40C70 75 85 90 95 95C95 60 75 40 40 35C75 30 90 15 95 5Z"
          fill="url(#leaf-gradient)"
        />
        <defs>
          <linearGradient id="leaf-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#42C83D" />
            <stop offset="1" stopColor="#087A24" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
