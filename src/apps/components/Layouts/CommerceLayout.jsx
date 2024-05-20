import NavbarCatalog from "../Fragments/Commerce/NavbarCatalog";
const CommerceLayout = ({ children }) => {
  return (
    <div className="">
      <NavbarCatalog />
      <div className="p-6 lg:py-10 lg:px-20 mt-20">{children}</div>
    </div>
  );
};

export default CommerceLayout;
