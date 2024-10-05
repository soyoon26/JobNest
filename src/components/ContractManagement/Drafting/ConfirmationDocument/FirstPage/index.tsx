import LeaseConfirmationItems from "./LeaseConfirmationItems";
import Notes from "./Notes";
import PropertyDescription from "./PropertyDescription";
import PropertyRights from "./PropertyRights";
import TenantConfirmation from "./TenantConfirmation";
import VerificationExplanation from "./VerificationExplanation";

const FirstPage = () => {
  return (
    <>
      <VerificationExplanation />
      <Notes />
      <PropertyDescription />
      <PropertyRights />
      <LeaseConfirmationItems />
      <TenantConfirmation />
    </>
  );
};
export default FirstPage;
