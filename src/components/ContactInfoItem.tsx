import type { LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string | null;
}

const ContactInfoItem = ({
  icon: Icon,
  label,
  value,
  link,
}: ContactInfoItemProps) => (
  <div className="flex items-center gap-3">
    <span className="text-lime-neon/60 w-5">
      <Icon size={18} />
    </span>

    <div>
      <div className="font-mono text-[10px] text-slate/50 uppercase tracking-wider">
        {label}
      </div>

      {link ? (
        <a
          href={link}
          className="text-slate/80 text-sm hover:text-lime-neon transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-slate/80 text-sm">{value}</span>
      )}
    </div>
  </div>
);

export default ContactInfoItem;