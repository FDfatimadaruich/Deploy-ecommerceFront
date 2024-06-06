import Link from "next/link";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  type = "button",
  href,
  className = "",
  children,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          className={`bg-[#19B4FE]   hover:bg-transparent hover:border hover:border-[#19B4FE] hover:text-[#19B4FE]  text-white text-2xl tracking-wider font-bold py-4 px-20 rounded ${className}`}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`transition duration-300 bg-[#19B4FE] hover:bg-transparent  hover:border-[#19B4FE] hover:text-[#19B4FE] border border-transparent text-white text-xl md:text-2xl tracking-wider font-bold py-4 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
