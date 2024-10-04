import LeaseConfirmationItems from "./LeaseConfirmationItems";
import Notes from "./Notes";
import PropertyDescription from "./PropertyDescription";
import PropertyRights from "./PropertyRights";
import TenantConfirmation from "./TenantConfirmation";
import VerificationExplanation from "./VerificationExplanation";

const FirstPage = () => {
  return (
    <div className="">
      <div className="w-[1236px]  text-center h-[66px] rounded border border-gray text-[45px] font-bold">
        중개대상물 확인 · 설명서[I](주거용 건축물)
      </div>
      <VerificationExplanation />
      <Notes />
      <PropertyDescription />
      <PropertyRights />
      <LeaseConfirmationItems />
      <TenantConfirmation />
    </div>
  );
};
export default FirstPage;
