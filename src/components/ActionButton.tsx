import React from "react";

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "glass" | "glassLight" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  type = "button",
  ...rest
}) => {
  const sizeClass: Record<string, string> = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
  };
  const variantClass =
    variant === "primary"
      ? "btn--primary"
      : variant === "glass"
        ? "btn--glass"
        : variant === "glassLight"
          ? "btn--glass-light"
          : "btn--secondary";
  const widthClass = fullWidth ? "w-full" : "";
  const combined =
    `btn ${variantClass} ${sizeClass[size] || ""} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn__icon inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      {children && (
        <span className="btn__label inline-flex items-center">{children}</span>
      )}
      {icon && iconPosition === "right" && (
        <span className="btn__icon inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        className={combined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combined}
      {...rest}
    >
      {content}
    </button>
  );
};
