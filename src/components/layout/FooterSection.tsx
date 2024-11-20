import React from 'react';

interface FooterItem {
  text: string;
  href?: string;
  icon?: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  items: FooterItem[];
}

const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.icon && item.icon}
            {item.href ? (
              <a href={item.href} className="text-gray-400 hover:text-white">
                {item.text}
              </a>
            ) : (
              <span className="text-gray-400">{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;