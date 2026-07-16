interface NavLinkProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: (id: string) => void;
  className?: string;
}

const NavLink = ({
  id,
  name,
  isActive,
  onClick,
  className = "",
}: NavLinkProps) => (
  <a
    href={`#${id}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(id);
    }}
    className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
      isActive ? "text-neon" : "text-slate hover:text-lime-neon/70"
    } ${className}`}
  >
    {name}
  </a>
);

export default NavLink;