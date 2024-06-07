/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'

const categories = [
  { name: 'COLLABORATIONS', count: 10 },
  { name: 'CONTENT', count: 7 },
  { name: 'COLLECTIBLES', count: 7 },
  { name: 'EVENTS', count: 3 },
  { name: 'TECHNOLOGY', count: 2 },
]

interface props {
  setIsShow: (isShow: boolean) => void
}
const CategoryNav = ({ setIsShow }: props) => {
  return (
    <div className="p-4 rounded-lg continer_color">
      <div className="flex flex-col border border-neutral-800 text-white w-full h-full rounded-xl gap-1 p-1 overlay-secondary-white hover:overlay-primary-white">
        {categories.map((category, index) => (
          <button
            key={index}
            className="group flex-1 flex justify-between items-center px-4 rounded-[20px] border border-neutral-800 overlay-secondary-white hover:overlay-primary-white"
          >
            <span className="text-white/60 group-hover:text-white text-sm md:text-xs lg:text-sm font-mono uppercase">
              {category.name}
            </span>
            <span className="font-LED text-white/80 group-hover:text-white/100 text-[24px] md:text-[1.55vw] xl:text-[24px] flex items-center justify-center pt-[5px] pt-px">
              {category.count}
            </span>
          </button>
        ))}
        <div className="gap-1 flex items-center justify-between">
          <button className="m-w-[80px] w-full md:w-auto relative flex overlay-primary-black hover:overlay-tertiary-white border-transparent shadow-inset-black hover:drop-shadow-none border hover:border-tertiary-white rounded-full p-0.5 gap-x-1">
            <div className="rounded-full p-2 w-1/2 flex justify-center items-center gap-x-2 ">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                style={{ height: '17px' }}
              >
                <path
                  d="M5.16667 4.33333V1M11.8333 4.33333V1M4.33333 7.66667H12.6667M2.66667 16H14.3333C15.2538 16 16 15.2538 16 14.3333V4.33333C16 3.41286 15.2538 2.66667 14.3333 2.66667H2.66667C1.74619 2.66667 1 3.41286 1 4.33333V14.3333C1 15.2538 1.74619 16 2.66667 16Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>{' '}
              <span className="uppercase leading-none text-sm font-mono md:hidden">
                Ordered
              </span>
            </div>
            <div className="rounded-full p-2 w-1/2 flex justify-center items-center gap-x-2 opacity-40">
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                style={{ height: '17px' }}
              >
                <path d="M14.0303 0.71967C13.7374 0.426777 13.2626 0.426777 12.9697 0.71967C12.6768 1.01256 12.6768 1.48744 12.9697 1.78033L13.4393 2.25H11.6085C10.5741 2.25 9.61272 2.78286 9.0645 3.66L8.84076 4.01799L10.0203 5.90437L10.7605 4.72C10.9432 4.42762 11.2637 4.25 11.6085 4.25H13.4393L12.9697 4.71967C12.6768 5.01256 12.6768 5.48744 12.9697 5.78033C13.2626 6.07322 13.7374 6.07322 14.0303 5.78033L16.0303 3.78033C16.171 3.63968 16.25 3.44891 16.25 3.25C16.25 3.05109 16.171 2.86032 16.0303 2.71967L14.0303 0.71967Z"></path>
                <path d="M4.3915 2.25C5.38269 2.25 6.30688 2.7393 6.8647 3.55196L10.1801 8.85433C10.1885 8.86777 10.1973 8.88083 10.2064 8.89351L10.7605 9.78C10.9432 10.0724 11.2637 10.25 11.6085 10.25H13.4393L12.9697 9.78033C12.6768 9.48744 12.6768 9.01256 12.9697 8.71967C13.2626 8.42678 13.7374 8.42678 14.0303 8.71967L16.0303 10.7197C16.171 10.8603 16.25 11.0511 16.25 11.25C16.25 11.4489 16.171 11.6397 16.0303 11.7803L14.0303 13.7803C13.7374 14.0732 13.2626 14.0732 12.9697 13.7803C12.6768 13.4874 12.6768 13.0126 12.9697 12.7197L13.4393 12.25H11.6085C10.649 12.25 9.75225 11.7915 9.18989 11.025L5.82011 5.63567C5.80201 5.60672 5.78217 5.57951 5.76082 5.5541L5.2395 4.72C5.05676 4.42762 4.73629 4.25 4.3915 4.25H1.5C0.947715 4.25 0.5 3.80228 0.5 3.25C0.5 2.69772 0.947715 2.25 1.5 2.25H4.3915Z"></path>
                <path d="M5.98299 8.59043L5.2395 9.78C5.05676 10.0724 4.73629 10.25 4.3915 10.25H1.5C0.947715 10.25 0.5 10.6977 0.5 11.25C0.5 11.8023 0.947715 12.25 1.5 12.25H4.3915C5.42587 12.25 6.38728 11.7171 6.9355 10.84L7.16249 10.4768L5.98299 8.59043Z"></path>
              </svg>{' '}
              <span className="uppercase leading-none text-sm font-mono md:hidden">
                Random
              </span>
            </div>
            <div
              className="absolute inset-0 p-[1px] inline-block w-1/2"
              style={{ transform: 'none' }}
            >
              <div className="rounded-full p-2 border-tertiary-white overlay-secondary-white h-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-transparent"
                  style={{ height: '17px' }}
                >
                  <path
                    d="M5.16667 4.33333V1M11.8333 4.33333V1M4.33333 7.66667H12.6667M2.66667 16H14.3333C15.2538 16 16 15.2538 16 14.3333V4.33333C16 3.41286 15.2538 2.66667 14.3333 2.66667H2.66667C1.74619 2.66667 1 3.41286 1 4.33333V14.3333C1 15.2538 1.74619 16 2.66667 16Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
          <button className="w-auto relative flex overlay-primary-black hover:overlay-tertiary-white border-transparent shadow-inset-black hover:drop-shadow-none border hover:border-tertiary-white rounded-full p-0.5 gap-x-1">
            <div className="rounded-full p-2 w-full flex justify-center items-center gap-x-2 opacity-40">
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                style={{ height: '17px' }}
              >
                <path d="M1.53597 10.4865C0.899492 10.4865 0.5 10.1159 0.5 9.52965C0.5 9.36119 0.547397 9.13208 0.635421 8.88275L3.30322 1.65229C3.5876 0.863881 4.06835 0.5 4.84025 0.5C5.63923 0.5 6.1132 0.850404 6.40436 1.64555L9.0857 8.88275C9.18049 9.14555 9.21435 9.32749 9.21435 9.52965C9.21435 10.0889 8.78777 10.4865 8.19192 10.4865C7.61638 10.4865 7.31168 10.2237 7.12886 9.5903L6.61426 8.05391H3.08654L2.57194 9.57008C2.38235 10.217 2.07766 10.4865 1.53597 10.4865ZM3.53343 6.47709H6.14029L4.84702 2.49461H4.79962L3.53343 6.47709Z"></path>
                <path d="M12.329 10.473C10.9477 10.473 9.89822 9.58356 9.89822 8.28302C9.89822 6.969 10.9139 6.20755 12.7285 6.09973L14.5567 5.99191V5.51348C14.5567 4.83962 14.0827 4.44879 13.3379 4.44879C12.7353 4.44879 12.3697 4.6442 11.9295 5.21024C11.7129 5.45283 11.4623 5.57412 11.1441 5.57412C10.6634 5.57412 10.318 5.26415 10.318 4.81941C10.318 4.66442 10.3519 4.52291 10.4196 4.37466C10.7581 3.51213 11.9228 2.97978 13.4259 2.97978C15.288 2.97978 16.5 3.93666 16.5 5.39218V9.50943C16.5 10.1631 16.1005 10.5 15.5385 10.5C15.0036 10.5 14.6312 10.2035 14.5906 9.62399V9.25337H14.5499C14.1437 10.0216 13.2364 10.473 12.329 10.473ZM12.9791 9.05121C13.8457 9.05121 14.5567 8.49191 14.5567 7.71024V7.18464L13.0264 7.27898C12.2884 7.33288 11.8686 7.66307 11.8686 8.1752C11.8686 8.71429 12.3155 9.05121 12.9791 9.05121Z"></path>
              </svg>
            </div>
            <div
              className="absolute inset-0 p-[1px] inline-block w-full"
              style={{ opacity: '0' }}
            >
              <div className="rounded-full p-2 border-tertiary-white overlay-secondary-white h-full">
                <svg
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-transparent"
                  style={{ height: '17px' }}
                >
                  <path d="M1.53597 10.4865C0.899492 10.4865 0.5 10.1159 0.5 9.52965C0.5 9.36119 0.547397 9.13208 0.635421 8.88275L3.30322 1.65229C3.5876 0.863881 4.06835 0.5 4.84025 0.5C5.63923 0.5 6.1132 0.850404 6.40436 1.64555L9.0857 8.88275C9.18049 9.14555 9.21435 9.32749 9.21435 9.52965C9.21435 10.0889 8.78777 10.4865 8.19192 10.4865C7.61638 10.4865 7.31168 10.2237 7.12886 9.5903L6.61426 8.05391H3.08654L2.57194 9.57008C2.38235 10.217 2.07766 10.4865 1.53597 10.4865ZM3.53343 6.47709H6.14029L4.84702 2.49461H4.79962L3.53343 6.47709Z"></path>
                  <path d="M12.329 10.473C10.9477 10.473 9.89822 9.58356 9.89822 8.28302C9.89822 6.969 10.9139 6.20755 12.7285 6.09973L14.5567 5.99191V5.51348C14.5567 4.83962 14.0827 4.44879 13.3379 4.44879C12.7353 4.44879 12.3697 4.6442 11.9295 5.21024C11.7129 5.45283 11.4623 5.57412 11.1441 5.57412C10.6634 5.57412 10.318 5.26415 10.318 4.81941C10.318 4.66442 10.3519 4.52291 10.4196 4.37466C10.7581 3.51213 11.9228 2.97978 13.4259 2.97978C15.288 2.97978 16.5 3.93666 16.5 5.39218V9.50943C16.5 10.1631 16.1005 10.5 15.5385 10.5C15.0036 10.5 14.6312 10.2035 14.5906 9.62399V9.25337H14.5499C14.1437 10.0216 13.2364 10.473 12.329 10.473ZM12.9791 9.05121C13.8457 9.05121 14.5567 8.49191 14.5567 7.71024V7.18464L13.0264 7.27898C12.2884 7.33288 11.8686 7.66307 11.8686 8.1752C11.8686 8.71429 12.3155 9.05121 12.9791 9.05121Z"></path>
                </svg>
              </div>
            </div>
          </button>
          <div
            onClick={() => {
              setIsShow(false)
            }}
            className="hidden md:flex w-full overlay-primary-black items-center justify-center font-mono text-sm text-white/60 border border-white/0 hover:border-tertiary-white hover:text-white hover:overlay-tertiary-white h-full uppercase drop-shadow-none shadow-inset-black items-center px-4 rounded-full cursor-pointer"
          >
            Back
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryNav
