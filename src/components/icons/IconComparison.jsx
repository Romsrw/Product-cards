import { useState } from "react";

const IconComparison = ({ className }) => {
    
    const [color, setColor] = useState('#fff');
    const [isActive, setIsActive] = useState(false);

    return (
        <svg
            className={className}
            onMouseEnter={() => setColor("#00A0AB")}
            onMouseLeave={() => setColor('#fff')}
            onClick={() => setIsActive(prev => !prev)}
            width="24" height="24" viewBox="0 0 24 24"
            fill={isActive ? color : 'none'}
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <g filter="url(#filter0_d)">
                    <path d="M10 21.2632V2.73684C10 2.15789 10.3 1 11.5 1C12.7 1 13 2.15789 13 2.73684V21.2632C13 21.4561 13 23 11.5 23C10 23 10 21.4561 10 21.2632Z" stroke={isActive ? "#2C2C2C" : color} strokeWidth={isActive ? 1 : 2} />
                </g>
                <g filter="url(#filter1_d)">
                    <path d="M17 21.6579V7.34211C17 6.89474 17.3 6 18.5 6C19.7 6 20 6.89474 20 7.34211V21.6579C20 21.807 20 23 18.5 23C17 23 17 21.807 17 21.6579Z" stroke={isActive ? "#2C2C2C" : color} strokeWidth={isActive ? 1 : 2} />
                </g>
                <g filter="url(#filter2_d)">
                    <path d="M3 21.8947V10.1053C3 9.73684 3.3 9 4.5 9C5.7 9 6 9.73684 6 10.1053V21.8947C6 22.0175 6 23 4.5 23C3 23 3 22.0175 3 21.8947Z" stroke={isActive ? "#2C2C2C" : color} strokeWidth={isActive ? 1 : 2} />
                </g>
            </g>
            <defs>
                <filter id="filter0_d" x="-11" y="-20" width="45" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter1_d" x="-4" y="-15" width="45" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter2_d" x="-18" y="-12" width="45" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

export default IconComparison;