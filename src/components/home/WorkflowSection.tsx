import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function WorkflowSection() {
  return (
    <section className="h-[700px] relative">
      <Image
        src="/images/home/vector-3.webp"
        alt="Background"
        fill
        className="object-center"
      />

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[102rem] space-y-8">
        <p
          className={cn(
            " inline-flex justify-start items-center w-5/12 gap-2 text-xl uppercase text-white font-light",
            manrope.className
          )}
        >
          <span>
            <Image
              src="/images/logo-inline.webp"
              alt="Logo"
              width={16}
              height={16}
            />
          </span>
          What we do
        </p>
        <div className="flex justify-between">
          <p className="text-[55px] text-white font-medium">
            What Goes on Behind the Scenes
          </p>
          <button className="border px-10 py-4 text-3xl rounded-full hover:bg-[#c4161c] hover:border-[#c4161c] text-white border-white transform transition-all duration-300">
            Know the Process
          </button>
        </div>

        <div className="flex justify-around mt-20">
          <div className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4">
            <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
              <svg
                width="63"
                height="57"
                viewBox="0 0 63 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5442 20.8667C21.3548 20.8667 22.8227 19.3988 22.8227 17.5881C22.8227 15.7774 21.3548 14.3096 19.5442 14.3096C17.7335 14.3096 16.2656 15.7774 16.2656 17.5881C16.2656 19.3988 17.7335 20.8667 19.5442 20.8667Z"
                  fill="white"
                />
                <path
                  d="M31.437 20.8667C33.2477 20.8667 34.7155 19.3988 34.7155 17.5881C34.7155 15.7774 33.2477 14.3096 31.437 14.3096C29.6263 14.3096 28.1584 15.7774 28.1584 17.5881C28.1584 19.3988 29.6263 20.8667 31.437 20.8667Z"
                  fill="white"
                />
                <path
                  d="M43.3276 20.8667C45.1383 20.8667 46.6061 19.3988 46.6061 17.5881C46.6061 15.7774 45.1383 14.3096 43.3276 14.3096C41.5169 14.3096 40.0491 15.7774 40.0491 17.5881C40.0491 19.3988 41.5169 20.8667 43.3276 20.8667Z"
                  fill="white"
                />
                <path
                  d="M31.5358 40.4148C35.8148 40.4148 39.2837 36.946 39.2837 32.6669C39.2837 28.3878 35.8148 24.9189 31.5358 24.9189C27.2567 24.9189 23.7878 28.3878 23.7878 32.6669C23.7878 36.946 27.2567 40.4148 31.5358 40.4148Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.9509 52.9999C18.9509 49.662 20.2769 46.4607 22.6372 44.1004C24.9976 41.7401 28.1988 40.4141 31.5368 40.4141C33.1898 40.4138 34.8266 40.7391 36.3538 41.3715C37.881 42.0039 39.2688 42.9309 40.4377 44.0996C41.6066 45.2684 42.5339 46.6559 43.1665 48.183C43.7991 49.7102 44.1247 51.347 44.1247 52.9999"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M39.2826 32.6664H50.8757C52.2537 32.6664 53.5753 32.119 54.5497 31.1445C55.5241 30.1701 56.0715 28.8486 56.0715 27.4705V10.1873C56.0693 8.81079 55.5209 7.4914 54.5467 6.51884C53.5726 5.54627 52.2523 5 50.8757 5H12.1958C10.8178 5 9.49622 5.54739 8.52182 6.5218C7.54742 7.49621 7 8.81779 7 10.1958V27.4791C7 28.8571 7.54742 30.1787 8.52182 31.1531C9.49622 32.1275 10.8178 32.6749 12.1958 32.6749H14.3261L19.5368 37.9538V32.6749H23.7804"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="text-white font-medium text-[33px]">Briefing</p>
          </div>
          <div className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4">
            <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
              <svg
                width="37"
                height="52"
                viewBox="0 0 37 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3745 34.749C27.4179 34.749 34.749 27.4179 34.749 18.3745C34.749 9.33112 27.4179 2 18.3745 2C9.33112 2 2 9.33112 2 18.3745C2 27.4179 9.33112 34.749 18.3745 34.749Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M25.0096 16.9365C23.2495 18.6962 20.8625 19.6848 18.3736 19.6848C15.8847 19.6848 13.4977 18.6962 11.7375 16.9365"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.375 34.747V19.6855"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M22.781 34.7471H13.9684C11.9204 34.7471 10.2603 36.4073 10.2603 38.4552V38.4575C10.2603 40.5055 11.9204 42.1657 13.9684 42.1657H22.781C24.8289 42.1657 26.4891 40.5055 26.4891 38.4575V38.4552C26.4891 36.4073 24.8289 34.7471 22.781 34.7471Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12.2388 42.1611H24.5098V43.8649C24.5098 45.4922 23.8634 47.0528 22.7128 48.2034C21.5621 49.354 20.0015 50.0005 18.3743 50.0005C16.7471 50.0005 15.1865 49.354 14.0358 48.2034C12.8852 47.0528 12.2388 45.4922 12.2388 43.8649V42.1611Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="text-white font-medium text-[33px]">
              Conceptualization
            </p>
          </div>{" "}
          <div className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4">
            <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
              <svg
                width="63"
                height="57"
                viewBox="0 0 63 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3474 10.5052V7.98504C15.3471 7.59315 15.424 7.20504 15.5738 6.84289C15.7235 6.48075 15.9432 6.15167 16.2201 5.87446C16.4971 5.59724 16.826 5.3773 17.1881 5.22726C17.5501 5.07722 17.9381 5 18.33 5H50.8917C51.6833 5 52.4426 5.31448 53.0024 5.87428C53.5622 6.43408 53.8767 7.19336 53.8767 7.98504V50.0077C53.8776 50.4003 53.8011 50.7893 53.6516 51.1523C53.502 51.5153 53.2822 51.8452 53.005 52.1231C52.7277 52.4011 52.3983 52.6216 52.0357 52.7721C51.673 52.9226 51.2843 53 50.8917 53H18.33C17.9381 53 17.5501 52.9228 17.1881 52.7727C16.826 52.6227 16.4971 52.4028 16.2201 52.1256C15.9432 51.8484 15.7235 51.5193 15.5738 51.1571C15.424 50.795 15.3471 50.4069 15.3474 50.015V47.4948"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M15.3474 25.6631V17.1729"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M15.3474 40.8203V32.3301"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 10.5078H11.985C10.3364 10.5078 9 11.8443 9 13.4928V14.1901C9 15.8386 10.3364 17.1751 11.985 17.1751H18.0785C19.7271 17.1751 21.0635 15.8386 21.0635 14.1901V13.4928C21.0635 11.8443 19.7271 10.5078 18.0785 10.5078Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 25.6631H11.985C10.3364 25.6631 9 26.9995 9 28.6481V29.3453C9 30.9939 10.3364 32.3304 11.985 32.3304H18.0785C19.7271 32.3304 21.0635 30.9939 21.0635 29.3453V28.6481C21.0635 26.9995 19.7271 25.6631 18.0785 25.6631Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 40.8203H11.985C10.3364 40.8203 9 42.1568 9 43.8053V44.5026C9 46.1511 10.3364 47.4876 11.985 47.4876H18.0785C19.7271 47.4876 21.0635 46.1511 21.0635 44.5026V43.8053C21.0635 42.1568 19.7271 40.8203 18.0785 40.8203Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M30.9219 15.9792L34.9624 19.1797L41.8476 11.6094"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M30.9219 29.3229L34.9624 32.5234L41.8476 24.9531"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M31.8052 44.1543H41.8472"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-white font-medium text-[33px]">Planning</p>
          </div>{" "}
          <div className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4">
            <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
              <svg
                width="63"
                height="57"
                viewBox="0 0 63 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3479 10.5052V7.98505C15.3479 7.59224 15.4254 7.20328 15.576 6.84049C15.7267 6.47769 15.9474 6.14818 16.2256 5.87087C16.5038 5.59356 16.834 5.37388 17.1973 5.22444C17.5606 5.075 17.9498 4.99874 18.3426 5.00002H50.9042C51.6955 5.00066 52.4541 5.31545 53.0134 5.87518C53.5727 6.43491 53.8868 7.1938 53.8868 7.98505V50.0077C53.8878 50.4009 53.811 50.7905 53.661 51.1539C53.511 51.5174 53.2906 51.8477 53.0125 52.1257C52.7345 52.4038 52.4043 52.6241 52.0408 52.7742C51.6773 52.9242 51.2878 53.0009 50.8946 53H18.3426C17.5509 53 16.7917 52.6855 16.2319 52.1257C15.6721 51.5659 15.3576 50.8067 15.3576 50.015V47.4948"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M15.3479 25.6631V17.1729"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M15.3479 40.8203V32.3301"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 10.5078H11.985C10.3364 10.5078 9 11.8443 9 13.4928V14.1901C9 15.8386 10.3364 17.1751 11.985 17.1751H18.0785C19.7271 17.1751 21.0635 15.8386 21.0635 14.1901V13.4928C21.0635 11.8443 19.7271 10.5078 18.0785 10.5078Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 25.6631H11.985C10.3364 25.6631 9 26.9995 9 28.6481V29.3453C9 30.9939 10.3364 32.3304 11.985 32.3304H18.0785C19.7271 32.3304 21.0635 30.9939 21.0635 29.3453V28.6481C21.0635 26.9995 19.7271 25.6631 18.0785 25.6631Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.0785 40.8203H11.985C10.3364 40.8203 9 42.1568 9 43.8053V44.5026C9 46.1511 10.3364 47.4876 11.985 47.4876H18.0785C19.7271 47.4876 21.0635 46.1511 21.0635 44.5026V43.8053C21.0635 42.1568 19.7271 40.8203 18.0785 40.8203Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M31.4614 28.737L35.5044 31.9375L42.3871 24.3672"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M36.4775 40.433C43.0691 40.433 48.4127 35.0894 48.4127 28.4977C48.4127 21.9061 43.0691 16.5625 36.4775 16.5625C29.8858 16.5625 24.5422 21.9061 24.5422 28.4977C24.5422 35.0894 29.8858 40.433 36.4775 40.433Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="text-white font-medium text-[33px]">Execution</p>
          </div>{" "}
          <div className="h-[298px] w-[301px] border border-white rounded-xl flex flex-col items-center justify-center space-y-4">
            <div className="h-[108px] w-[108px] border border-white rounded-full flex justify-center items-center text-6xl">
              <svg
                width="63"
                height="57"
                viewBox="0 0 63 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.877 49.0081C51.878 49.4007 51.8015 49.7896 51.6519 50.1526C51.5023 50.5156 51.2826 50.8455 51.0053 51.1235C50.728 51.4014 50.3986 51.622 50.036 51.7724C49.6734 51.9229 49.2846 52.0003 48.892 52.0003H16.34C15.5488 51.9997 14.7901 51.6849 14.2309 51.1252C13.6716 50.5655 13.3574 49.8066 13.3574 49.0153V46.4951"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M13.3477 9.50523V6.98505C13.3477 6.59244 13.4251 6.20364 13.5756 5.84101C13.726 5.47838 13.9466 5.14903 14.2245 4.87175C14.5025 4.59447 14.8324 4.37472 15.1954 4.22514C15.5584 4.07556 15.9473 3.99905 16.3399 4.00001H48.9016C49.6933 4.00001 50.4525 4.31449 51.0123 4.87429C51.5721 5.43409 51.8866 6.19337 51.8866 6.98505V43.7034"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M13.3477 24.6631V16.1729"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M13.3477 39.8203V31.3301"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16.0785 9.50781H9.98501C8.33643 9.50781 7 10.8443 7 12.4928V13.1901C7 14.8386 8.33643 16.1751 9.98501 16.1751H16.0785C17.7271 16.1751 19.0635 14.8386 19.0635 13.1901V12.4928C19.0635 10.8443 17.7271 9.50781 16.0785 9.50781Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M44.7995 34.388L40.0041 38.6425C39.274 39.2903 39.2072 40.4073 39.855 41.1374L39.9739 41.2714C40.6217 42.0015 41.7387 42.0683 42.4688 41.4205L47.2641 37.166C47.9942 36.5182 48.061 35.4012 47.4132 34.6711L47.2943 34.5371C46.6466 33.807 45.5296 33.7403 44.7995 34.388Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16.0785 24.6631H9.98501C8.33643 24.6631 7 25.9995 7 27.6481V28.3453C7 29.9939 8.33643 31.3304 9.98501 31.3304H16.0785C17.7271 31.3304 19.0635 29.9939 19.0635 28.3453V27.6481C19.0635 25.9995 17.7271 24.6631 16.0785 24.6631Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16.0785 39.8203H9.98501C8.33643 39.8203 7 41.1568 7 42.8053V43.5026C7 45.1511 8.33643 46.4876 9.98501 46.4876H16.0785C17.7271 46.4876 19.0635 45.1511 19.0635 43.5026V42.8053C19.0635 41.1568 17.7271 39.8203 16.0785 39.8203Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M34.4782 39.433C41.0699 39.433 46.4134 34.0894 46.4134 27.4977C46.4134 20.9061 41.0699 15.5625 34.4782 15.5625C27.8866 15.5625 22.543 20.9061 22.543 27.4977C22.543 34.0894 27.8866 39.433 34.4782 39.433Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M46.4128 38.2803L54.6779 46.48C54.8405 46.6422 54.9684 46.8357 55.0539 47.0489C55.1394 47.262 55.1807 47.4903 55.1753 47.7199C55.1699 47.9495 55.1178 48.1756 55.0223 48.3844C54.9268 48.5933 54.7899 48.7805 54.6198 48.9348C54.2985 49.2246 53.8786 49.3806 53.446 49.3707C53.0134 49.3608 52.601 49.1858 52.2933 48.8816L43.8999 40.5535"
                  stroke="white"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-white font-medium text-[33px]">Evaluation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
