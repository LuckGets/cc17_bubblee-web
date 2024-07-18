import { func } from "joi";

export function MailIcon({ classname = null }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  );
}

export function PhoneIcon({ className = null }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function PhoneHeaderIcon() {
  return (
    <>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
            fill="#fff"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
}

export function RightArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
          fill="#fff"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="User / User_02">
          <path
            id="Vector"
            d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function LeftArrowSlide() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M10 7L15 12L10 17"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function RightArrowSlide() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M10 7L15 12L10 17"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export function Person() {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000000"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="32" cy="18.14" r="11.14"></circle>
        <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path>
      </g>
    </svg>
  );
}

export function DollarsBank() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 38"
      enableBackground="new 0 0 64 38"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>Cash-dollar</title> <desc>Created with Sketch.</desc>{" "}
        <g id="Page-1" sketch:type="MSPage">
          {" "}
          <g
            id="Cash-dollar"
            transform="translate(1.000000, 1.000000)"
            sketch:type="MSLayerGroup"
          >
            {" "}
            <path
              id="Shape"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M60,36c1.1,0,2-0.9,2-2V2 c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2v32c0,1.1,0.9,2,2,2H60L60,36z"
            ></path>{" "}
            <path
              id="Shape_1_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M5,4h20.9"
            ></path>{" "}
            <path
              id="Shape_2_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M5,32h20.9"
            ></path>{" "}
            <path
              id="Shape_3_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M36.2,4H57"
            ></path>{" "}
            <path
              id="Shape_4_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M36.2,32H57"
            ></path>{" "}
            <circle
              id="Oval"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              cx="31"
              cy="18"
              r="15"
            >
              {" "}
            </circle>{" "}
            <path
              id="Shape_5_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M27.1,22.4c0,2,1.8,3.6,4,3.6 s4-1.6,4-3.6c0-2.9-4-4.4-4-4.4s-4-1.5-4-4.4c0-2,1.8-3.6,4-3.6s4,1.6,4,3.6"
            ></path>{" "}
            <path
              id="Shape_6_"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              d="M31.1,6.1V30"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function CorrectMark() {
  return (
    <svg
      viewBox="0 0 117 117"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title></title> <desc></desc> <defs></defs>{" "}
        <g
          fill="none"
          fillRule="evenodd"
          id="Page-1"
          stroke="none"
          strokeWidth="1"
        >
          {" "}
          <g fillRule="nonzero" id="correct">
            {" "}
            <path
              d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
              fill="#17AB13"
              id="Shape"
            ></path>{" "}
            <path
              d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
              fill="#000000"
              id="Shape"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function CrossMark({ className = null }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione-monotone"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
}

export function MapMarker() {
  return (
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect width="16" height="16" id="icon-bound" fill="none"></rect>{" "}
        <path d="M8,0C4.688,0,2,2.688,2,6c0,6,6,10,6,10s6-4,6-10C14,2.688,11.312,0,8,0z M8,8C6.344,8,5,6.656,5,5s1.344-3,3-3s3,1.344,3,3 S9.656,8,8,8z"></path>{" "}
      </g>
    </svg>
  );
}

export function CircleMark() {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path fill="#fff" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path>
      </g>
    </svg>
  );
}

export function LoaderIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="2rem"
      width="2rem"
      fill="#000"
      className={className}
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </svg>
  );
}
