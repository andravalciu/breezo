/**
 * Types
 */
type Props = {
    variant?: 'default' | 'icon';
    size?: number;
  };
  
  export const Logo = ({ variant = "default", size = 28 }: Props) => {
    const Icon = (
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="48" cy="14" r="6" fill="#facc15" />
  
        <path
          d="M22 12v40
             M22 12h14a10 10 0 0 1 0 20H22
             M22 32h16a10 10 0 0 1 0 20H22"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  
    if (variant === "icon") {
      return Icon;
    }
  
    return (
      <div className="flex items-center gap-2">
        {Icon}
        <span className="text-xl font-semibold tracking-tight text-foreground">
          Breezo
        </span>
      </div>
    );
  };