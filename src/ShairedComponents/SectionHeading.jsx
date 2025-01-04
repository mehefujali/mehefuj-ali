/* eslint-disable react/prop-types */

const SectionHeading = ({title , subTitle, color}) => {
      return (
            <div className="text-center w-11/12 md:w-6/12 mx-auto flex flex-col gap-2">
                  <h1 className={` text-xl  md:text-3xl font-semibold ${color && 'text-primary-color'} `}>{title}</h1>
                  {
                        subTitle && <p className=" text-sm  lg:text-lg">{subTitle}</p>
                  }
            </div>
      );
};

export default SectionHeading;