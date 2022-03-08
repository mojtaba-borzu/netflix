//libraries
import React from "react";

const footer = [
  {
    id: 1,
    label: "FAQ",
  },
  {
    id: 2,
    label: "Investor Relations",
  },
  {
    id: 3,
    label: "Ways to Watch",
  },
  {
    id: 4,
    label: "Corporate Information",
  },
  {
    id: 5,
    label: "Help Centre",
  },
  {
    id: 6,
    label: "Jobs",
  },
  {
    id: 7,
    label: "Terms of Use",
  },
  {
    id: 8,
    label: "Contact Us",
  },
  {
    id: 9,
    label: "Account",
  },
  {
    id: 10,
    label: "Redeem gift cards",
  },

  {
    id: 11,
    label: "Privacy",
  },
  {
    id: 12,
    label: "Speed Test",
  },

  {
    id: 13,
    label: "Media Centre",
  },
  {
    id: 14,
    label: "Buy gift cards",
  },
  {
    id: 15,
    label: "Cookie Preferences",
  },
  {
    id: 16,
    label: "Legal Notices",
  },
];
function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-black ">
      <div className="mt-[50px] w-8/12 text-[#757575]">
        Questions? Call 0808 196 5391
      </div>
      <div className="mt-[10px] w-8/12 flex flex-row items-center gap-40 text-[12px]">
        <div className="flex flex-col items-start text-[#757575] gap-4">
          {footer.slice(0, 4).map((item: any) => (
            <a className="cursor-pointer" key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start text-[#757575] gap-4 ">
          {footer.slice(4, 8).map((item: any) => (
            <a className="cursor-pointer" key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start text-[#757575] gap-4">
          {footer.slice(8, 12).map((item: any) => (
            <a className="cursor-pointer" key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start text-[#757575] gap-4  ">
          {footer.slice(12, 16).map((item: any) => (
            <a className="cursor-pointer" key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="w-8/12 text-[#757575] text-[12px] py-[30px]">
        Netflix United Kingdom
      </div>
    </div>
  );
}

export default Footer;
