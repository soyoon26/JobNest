import React, { useRef } from "react";
import ContractContent from "./ContractContent";
import LegalProvision from "./LegalProvision";
import RealEstate from "./RealEstate";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import B from "./B";
import ConfirmationSection from "./ConfirmationSection";
import Agency from "./Agency";
import TransactionForm from "./TransactionForm";
import ContractBtn from "../Common/ContractBtn";
import html2pdf from "html2pdf.js";

const Contract: React.FC = () => {
  const contractType = useSelector(
    (state: RootState) => state.contract.contractType
  );
  const transactionType = useSelector(
    (state: RootState) => state.contract.transactionType
  );
  const detailAddress = useSelector(
    (state: RootState) => state.contract.detailAddress
  );

  const contractRef = useRef<HTMLDivElement>(null);

  const handleSaveAsPDF = () => {
    if (contractRef.current) {
      const element = contractRef.current;

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${detailAddress || "부동산 계약서"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          width: element.scrollWidth,
          windowWidth: element.scrollWidth,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      };

      html2pdf().from(element).set(opt).save();
    } else {
      console.error("DOM 요소를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center p-2 bg-white border border-gray-300 rounded">
      {/* 계약서 정보 상단 */}
      <div className="flex mt-24 items-j">
        <div className="text-[15px] w-[1000px] my-4 font-bold">
          {detailAddress ? `${detailAddress}` : ""}
          {contractType && ` | 계약서 종류: ${contractType}`}
          {transactionType && ` | 거래유형: ${transactionType}`}
        </div>
        <div className="flex justify-end gap-2">
          <ContractBtn />
          <ContractBtn
            text="다운로드"
            color="#335995"
            textColor="white"
            onClick={handleSaveAsPDF}
          />
        </div>
      </div>

      <div className="w-[1223px] mt-4 h-[1px] bg-gray-300 mb-10"></div>

      {/* 계약서 내용 */}
      <div ref={contractRef} className="flex flex-col w-[1237px] items-j">
        <div className="w-[1223px] text-center h-[66px] rounded border border-gray text-[45px] font-bold">
          부동산(아파트) 매매 계약서
        </div>
        <span className="text-[14px] font-bold">
          매도인과 매수인 쌍방은 아래 표시 부동산에 관하여 다음과 같이 매매
          계약을 체결한다.
        </span>
        <div className="flex-col w-[1237px] items-j">
          <RealEstate />
          <ContractContent />
          <LegalProvision />
          <B />
          <ConfirmationSection />
          <TransactionForm formType="매도인" />
          <TransactionForm formType="매수인" />
          <Agency />
        </div>
      </div>
    </div>
  );
};

export default Contract;
