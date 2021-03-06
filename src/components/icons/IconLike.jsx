import { useState } from "react";

const IconLike = ({ className }) => {

    const [color, setColor] = useState('#fff');
    const [isActive, setIsActive] = useState(false);

    return (
        <svg
            className={className}
            onMouseEnter={() => setColor("#00A0AB")}
            onMouseLeave={() => setColor('#fff')}
            onClick={() => setIsActive(prev => !prev)}
            width="24" height="24" viewBox="0 0 24 24" fill={isActive ? color : 'none'} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <g filter="url(#filter0_d)">
                    <path d="M21.4321 12.2122C20.5975 14.5152 14.8243 19.697 12.0421 22C9.60767 19.8889 4.42577 15.206 3.17377 13.3636C1.60876 11.0606 1.60874 7.60649 3.17375 5.3033C4.30214 3.64268 6.3037 3.00028 7.86878 3C9.64009 2.99968 12.0421 5.30302 12.0421 5.30302C12.0421 5.30302 15.6938 1.84866 19.3455 4.15179C22.2456 5.98093 22.4755 9.3334 21.4321 12.2122Z" stroke={isActive ? "#2C2C2C" : color} strokeWidth={isActive ? 1 : 2} strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d" x="-19" y="-18" width="61.9965" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <clipPath id="clip0">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>

    )
};

export default IconLike;