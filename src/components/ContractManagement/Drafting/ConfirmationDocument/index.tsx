import React, { useRef, useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import LastPage from "./LastPage";
import ContractBtn from "../Common/ContractBtn";
import html2pdf from "html2pdf.js";

const ConfirmationDocument: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageRef = useRef<HTMLDivElement>(null);

  const pages = [
    { id: 1, name: "FirstPage", content: <FirstPage /> },
    { id: 2, name: "SecondPage", content: <SecondPage /> },
    { id: 3, name: "ThirdPage", content: <ThirdPage /> },
    { id: 4, name: "LastPage", content: <LastPage /> },
  ];

  const handleSaveAsPDF = () => {
    if (pageRef.current) {
      const element = pageRef.current;

      const opt = {
        margin: [10, 10, 10, 10], // 여백 (mm)
        filename: `Page-${pages[currentPage - 1].name}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4", // PDF를 A4 용지 크기
          orientation: "portrait", // 세로 모드
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // 페이지 넘김
      };

      html2pdf().from(element).set(opt).save();
    } else {
      console.error("DOM 요소를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="relative flex bg-white border-g">
      <div className="flex-col flex-1 items-j">
        <div className="flex justify-end w-full gap-2 pr-4 mt-10 mb-4">
          <ContractBtn />
          <ContractBtn
            text="저장"
            color="#335995"
            textColor="white"
            onClick={handleSaveAsPDF}
          />
        </div>
        <div className="w-[1223px] mt-4 h-[1px] bg-gray-300 mb-10"></div>
        {/* 화면에 표시 */}
        <div ref={pageRef} className="pdf-page">
          {pages[currentPage - 1].content}
        </div>
      </div>

      <div
        className="absolute flex flex-col bg-white border border-gray-200 shadow-lg top-44"
        style={{ left: "100%" }}
      >
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`w-[96px] h-[95px] ${
              currentPage === page.id
                ? "bg-[#335995] text-white"
                : "text-[#335995] border border-[#335995]"
            }`}
          >
            {page.name}쪽
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationDocument;
