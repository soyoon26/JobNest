import LeaseConfirmationItems from "./LeaseConfirmationItems";
import Notes from "./Notes";
import PropertyDescription from "./PropertyDescription";
import PropertyRights from "./PropertyRights";
import TenantConfirmation from "./TenantConfirmation";
import VerificationExplanation from "./VerificationExplanation";

const FirstPage = () => {
  return (
    <div className="w-[1236px]">
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
