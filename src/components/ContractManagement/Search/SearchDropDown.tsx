import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropDownProps {
  items: string[];
  selectedItem: string | null;
  onSelect: (item: string) => void;
}

const SearchDropDown: React.FC<DropDownProps> = ({
  items,
  selectedItem,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[240px] h-[36px]">
      <button
        onClick={toggleDropdown}
        className="w-full h-full rounded border border-gray bg-white text-[#6F6F6F] text-sm flex items-center justify-between px-2"
      >
        <span>{selectedItem || "전체"}</span>
        <FaChevronDown className="text-[#6F6F6F] text-[14px]" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-[#6F6F6F] rounded max-h-40 overflow-y-auto z-10 custom-scrollbar">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className="px-2 py-1 text-[#6F6F6F] text-sm cursor-pointer hover:bg-gray-100 rounded"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-2 py-1 text-[#6F6F6F] text-sm">No items</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;
