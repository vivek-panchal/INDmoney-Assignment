import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  title: string;
  url?: string;
  subMenuItems?: MenuItem[];
}

interface NavigationSidebarProps {
  menuItems: MenuItem[];
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ menuItems }) => {
  return (
    <div className="bg-white w-full border-t border-gray-200">
      <nav>
        {menuItems.map((item, index) => (
          <TopLevelAccordionItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
};

const TopLevelAccordionItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isTopOpen, setIsTopOpen] = useState(false);

  return (
    <div className="box-border cursor-pointer appearance-none items-center justify-between p-4 border-b">
      {/* Top-level accordion item header */}
      <button
        className="flex items-center justify-between w-full text-left text-gray-800"
        onClick={() => setIsTopOpen(!isTopOpen)}
      >
        <span className="text-gray-800 hover:text-gray-900">{item.title}</span>
        {item.subMenuItems ? (
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
              isTopOpen ? 'rotate-180' : ''
            }`}
          />
        ) : null}
      </button>

      {/* Top-level accordion item content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isTopOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {item.subMenuItems && (
          <div className="pt-4">
            {item.subMenuItems.map((subItem, subIndex) => (
              <div key={subIndex} className="">
                <SubLevelAccordionItem subItem={subItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SubLevelAccordionItem: React.FC<{ subItem: MenuItem }> = ({ subItem }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);
  
    return (
      <div className="w-full cursor-pointer appearance-none items-center justify-between">
        {/* Sub-level accordion item header */}
        <button
          className="flex items-center justify-between w-full text-left text-gray-700 py-4 px-0"  // Removed padding on X-axis
          onClick={() => setIsSubOpen(!isSubOpen)}
        >
          <span className="text-gray-700 hover:text-gray-900">{subItem.title}</span>
          {subItem.subMenuItems ? (
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transform transition-transform duration-300 ${
                isSubOpen ? 'rotate-180' : ''
              }`}
            />
          ) : null}
        </button>
  
        {/* Sub-level accordion item content */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isSubOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {subItem.subMenuItems && (
            <div className="">
              {subItem.subMenuItems.map((subSubItem, subSubIndex) => (
                <div key={subSubIndex} className="py-2 px-4">
                  <Link href={subSubItem.url ?? "#"}>
                    <p className="text-gray-600 hover:text-gray-800 py-1">
                      {subSubItem.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default NavigationSidebar;
