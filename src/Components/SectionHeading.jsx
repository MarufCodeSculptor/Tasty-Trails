const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex items-center justify-center flex-col py-5">
      <p className="text-[#D99904]"> {subHeading}</p>
      <h4 className="text-3xl border-y-2 p-5 my-3 text-[#151515] font-semibold">
        {heading}
      </h4>
    </div>
  );
};

export default SectionHeading;
