import { React } from "react";
import { Link } from "react-router-dom";
import smLogo from "../../images/svg-logo/smLogo.svg";
import FilledBtn from "../Button/Filled-Button/FilledBtn";
import OutlineBtn from "../Button/Outline-Button/OutlineBtn";
import TextBtn from "../Button/Text-Button/TextBtn";
import { Disclosure } from "@headlessui/react";

const navigation = [
  {
    btnType: <TextBtn buttonText={"Learn More"} />,
    name: "Learn More",
    to: "/",
  },
  {
    btnType: <OutlineBtn buttonText={"Login"} />,
    name: "Login",
    to: "/login",
  },
  {
    btnType: <FilledBtn buttonText={"Sign Up"} />,
    name: "Sign Up",
    to: "/sign-up",
  },
];

function LandingNav() {
  return (
    <Disclosure as="nav" className="nav-bar" data-testid="landing-page-nav">
      {({ open }) => (
        <>
          <div className="mx-auto  max-w-7xl py-9 px-5 md:px-9 lg:px-16">
            <div className="relative  flex items-center justify-end">
              <div className="absolute inset-y-0 left-0 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex items-center ">
                  <img
                    className="h-14 py-3"
                    src={smLogo}
                    alt="Frugal Finesse"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-end justify-end sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-3 pr-7 font-extrabold text-purple-dark">
                  {open ? (
                    <div className="block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 12L7 7L12 12M12 2L6.99905 7L2 2"
                          stroke="#3F3649"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 12"
                        fill="none"
                      >
                        <path
                          d="M1 11H19M1 6H19M1 1H19"
                          stroke="black"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center justify-center space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} data-testid={item.name} to={item.to}>
                      {item.btnType}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="flex items-center mt-8 px-4 justify-center sm:hidden">
            <div className="flex flex-col flex-1 gap-9 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  data-testid={item.name}
                  href={item.to}
                >
                  {item.btnType}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default LandingNav;
