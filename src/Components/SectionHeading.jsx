const SectionHeading = ({ heading, subHeading,hColor }) => {
  return (
    <div className="flex items-center justify-center flex-col py-5 capitalize">
      <p className="text-[#D99904] "> {subHeading}</p>
      <h4 className={`text-3xl border-y-2 p-5 my-3 ${hColor} font-semibold`}>
        {heading}
      </h4>
    </div>
  );
};

export default SectionHeading;
