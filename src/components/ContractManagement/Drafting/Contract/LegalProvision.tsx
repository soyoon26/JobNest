const LegalProvision = () => {
  const data = [
    {
      no: 3,
      content:
        "[제한물권 등의 소멸] 매도인은 위 부동산에 설정된 저당권, 지상권, 임차권 등 소유권의 행사를 제한하는 사유가 있거나, 제세공과금과 기타 부담금의 미납 등이 있을 때는 잔금 수수일까지 그 권리의 하자 및 부담 등을 제거하여 완전한 소유권을 매수인에게 이전한다. 다만, 승계하기로 합의하는 권리 및 금액은 그러하지 아니하다.",
    },
    {
      no: 4,
      content:
        "[지방세 등] 위 부동산에 관하여 발생한 수익의 귀속과 제세공과금 등의 부담은 위 부동산의 인도일 기준으로 하되, 지방세의 납부 의무 및 납부 책임은 지방세법의 규정에 의한다.",
    },
    {
      no: 5,
      content:
        "[계약의 해제] 매수인이 매도인에게 중도금(중도금이 없을 때는 잔금)을 지불하기 전까지, 매도인은 계약금의 배액을 상환하고, 매수인은 계약금을 포기하고 본 계약을 해제할 수 있다.",
    },
    {
      no: 6,
      content:
        "[채무불이행과 손해배상의 예정] 매도인 또는 매수인은 본 계약상의 내용에 대하여 불이행이 있을 경우, 그 상대방은 불이행 한 자에 대하여 서면으로 최고하고 계약을 해제할 수 있다. 그리고 계약 당사자는 계약해제에 따른 손해배상을 각각 상대방에 대하여 청구할 수 있으며, 손해배상에 대하여 별도의 약정이 없는 한 계약금을 손해배상의 기준으로 본다.",
    },
    {
      no: 7,
      content:
        "[중개보수] 개업공인중개사는 매도인 또는 매수인의 본계약 불이행에 대하여 책임지지 않는다. 또한, 중개보수는 본 계약 체결에 따라 계약 당사자가 쌍방이 각각 지불하며, 개업공인중개사의 고의나 과실 없이 본 계약이 무효, 취소 또는 해제되어도 중개보수는 지급한다. 공동중개인 경우에 매도인과 매수인은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.",
    },
    {
      no: 8,
      content:
        "[중개보수 외] 매도인 또는 매수인이 본 계약 이외의 업무를 의뢰한 경우, 이에 관한 보수는 중개보수와는 별도로 지급하며 그 금액은 합의에 의한다.",
    },
    {
      no: 9,
      content: `<div classname="flex flex-col">
      [중개대상물확인·설명서 교부 등] 개업공인중개사는 중개대상물확인·설명서를 작성하고, 업무보증관계증서 (공제증서 등) 사본을 첨부하여 거래당사자 쌍방에게 교부한다.
      <br/> (교부일자        <input
      type="text"
      className="w-[30px] ml-1 border-32"
      />   년    <input
      type="text"
      className="w-[30px] ml-1 border-32"
      /> 월 <input type="text" className="w-8 ml-1" />  일)
      </div>
      `,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex-col  items-j">
        {data.map((item) => (
          <div key={item.no} className="flex m-2">
            <span className="flex font-bold w-[45px] h-[72px] items-center justify-center text-center">
              제{item.no}조
            </span>
            <div
              className="flex w-[1170px] items-center pl-4 h-[72px] text-[14px] border border-gray"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalProvision;
