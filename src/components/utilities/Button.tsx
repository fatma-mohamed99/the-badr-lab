import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'gradient' | 'solid';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = 'gradient'
}) => {
    const baseClasses = "px-4 py-2 rounded-md text-white hover:scale-[1.01] transition-all";
    const gradientClasses = "bg-gradient-to-l from-main to-PrimaryAccent";

    const finalClasses = variant === 'gradient'
        ? `${baseClasses} ${gradientClasses} ${className}`
        : `${baseClasses} ${className}`;

    return (
        <button
            onClick={onClick}
            className={finalClasses}
        >
            {children}
        </button>
    );
};

export default Button;