import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faqs = ({ title, desc }) => {
  const Faqs = [
    "How to book a car service with CarCruize?",
    "Do I have to pay before the service?",
    "Where can I book a car service with CarCruize?",
    "What if I am not available to drop my car?",
    "What is CarCruize?",
    "How can you offer upto 40% savings on services?",
    "Why should I choose CarCruize?",
    "How is CarCruizedifferent from other service platforms out there?",
    "What if my car requires parts?",
    "What are OEM or OES spare parts?",
  ];

  return (
    <div className="w-full px-[17px]">
      <div className="mx-auto w-full text-TextWhite">
        <Disclosure className="">
          {({ open }) => (
            <div className={`${open ? "border-l-4 border-pila" : ""}`}>
              <Disclosure.Button className=" flex w-full justify-between font-lato font-bold text-[20px] px-4 py-2 text-left ">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform " : ""} h-6 w-6 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" px-4 pt-4 pb-2 text-sm font-lato font-regular text-[16px]">
                {desc}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <div className="w-full border-b"></div>
      </div>
    </div>
  );
};

export default Faqs;
