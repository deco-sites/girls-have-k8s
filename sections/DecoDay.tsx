import { Section } from "deco/blocks/section.ts";
import { JSX } from "preact/jsx-runtime";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";
import SlideBanner, {
  Props as SlideBannerProps,
} from "../sections/Miscellaneous/Slide.tsx";
import SocialLinks, {
  Props as SocialLinksProps,
} from "../sections/SocialLinks.tsx";
import Modal from "../components/ui/Modal.tsx";
import { AppContext } from "../apps/site.ts";
import Image from "apps/website/components/Image.tsx";
import SaveYourSpot from "../islands/modals/SaveYourSpot.tsx";
import LearnAbout from "../islands/modals/LearnAbout.tsx";
import CallForSpeakers from "../islands/modals/CallForSpeakers.tsx";

/**
 * @title ToggleDarkMode
 */
interface ToggleDarkModeProps {
  /**
   * @hide
   */
  id: "darkmode";
}

function ToggleDarkMode(props: ToggleDarkModeProps) {
  return (
    <label class="swap swap-rotate absolute elem bg-white  p-2 rounded-full">
      <input type="checkbox" data-toggle-darkmode />
      <svg
        class="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
      <svg
        class="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}

/**
 * @title Radio
 */
interface RadioProps {
  /**
   * @hide
   */
  id: "radio";
  name: string;
}

function Radio({ name }: RadioProps) {
  return (
    <input
      type="radio"
      name={name}
      class="radio h-8 w-8 lg:w-9 lg:h-9 radio-primary elem absolute rounded-full checked:!bg-black hover:border-white  border-white "
      checked
    />
  );
}

/**
 * @title CheckBox
 */
interface CheckBoxProps {
  /**
   * @hide
   */
  id: "checkbox";
}

function CheckBox({}: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      checked
      class="checkbox border w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 elem absolute rounded-xl border-white "
    />
  );
}

/**
 * @title Toggle
 */
interface ToggleProps {
  /**
   * @hide
   */
  id: "toggle";
}

function Toggle({}: ToggleProps) {
  return (
    <input
      type="checkbox"
      style={`--tglbg: black; --handleoffset: 50px;`}
      class="toggle w-[80px] h-[40px] xl:w-[100px] xl:h-[45px] 2xl:w-[100px] 2xl:h-[50px] !text-white rounded-xl elem absolute"
      checked
    />
  );
}

/**
 * @title Input
 */
interface InputProps {
  /**
   * @hide
   */
  id: "input";
}

function Input({}: InputProps) {
  return (
    <input
      type="text"
      class="elem absolute input input-bordered rounded-xl input-sm xl:input-md 2xl:input-lg"
      placeholder="Type here"
    />
  );
}

interface ButtonProps {
  /**
   * @hide
   */
  id: "button";
  label: string;
  color: string;
  backgroundColor: string;
}

const toVar = (cssVar: string) =>
  `oklch(var(${cssVar}, var(--b2)) / var(--tw-bg-opacity))`;

function Button({ label, color, backgroundColor }: ButtonProps) {
  const bg = backgroundColor.includes("-")
    ? toVar(backgroundColor)
    : backgroundColor;
  const clr = color.includes("-") ? toVar(color) : color;

  return (
    <button
      style={`background-color: ${bg}; color: ${clr};`}
      class="elem btn w-[max-content] border-none absolute btn-sm xl:btn-md 2xl:btn-lg rounded-xl hover:brightness-[85%]"
    >
      {label}
    </button>
  );
}

/**
 * @title Slider
 */
interface SliderProps {
  /**
   * @hide
   */
  id: "slider";
}

function Slider({}: SliderProps) {
  return (
    <input
      type="range"
      style={`--range-shdw: black; --fallback-bc: #C9CFCF; --rounded-box: 6px;`}
      class="elem absolute range w-[200px] lg:w-[300px] border-white"
      min="0"
      max="100"
      value="40"
    />
  );
}

type AnimationElement =
  | SliderProps
  | ButtonProps
  | InputProps
  | ToggleProps
  | CheckBoxProps
  | RadioProps
  | ToggleDarkModeProps;

interface TopButton {
  label: string;
  icon: AvailableIcons;
  url: string;
}

export interface Props {
  animationElements: AnimationElement[];
  /**
   * @description Mobile Elements
   */
  animationElementsMobile: AnimationElement[];
  /**
   * @description Select Gravity Level - 1(super slow) to 7(super fast) | Default is 4(Earths Gravity)
   */
  /** @default 4 */
  gravitySensation?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** @format html */
  title?: string;
}

const AnimatedElementMap: Record<
  AnimationElement["id"],
  // deno-lint-ignore no-explicit-any
  (props: any) => JSX.Element
> = {
  button: Button,
  checkbox: CheckBox,
  darkmode: ToggleDarkMode,
  input: Input,
  radio: Radio,
  slider: Slider,
  toggle: Toggle,
};

export const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const device = await ctx.device;

  return {
    ...props,
    isMobile: device,
  };
};

export default function DecoDay({
  animationElements,
  animationElementsMobile,
  isMobile,
  gravitySensation,
  title,
}: Omit<Props, "isMobile"> & {
  animationElements: AnimationElement[];
  animationElementsMobile?: AnimationElement[];
  title: string;
  isMobile: string;
}) {
  return (
    <div class="flex flex-col bg-black lg:flex-row h-screen w-screen overflow-hidden">
      <div class="relative h-screen lg:h-screen w-screen overflow-clip">
        <div id="canvas" class="absolute z-[0]"></div>
        <div class="absolute z-[0] flex flex-col gap-12 p-4 items-center bg-black  h-full w-screen box-border">
          {/* Gradiente */}
          <div class="h-full top-[80px] lg:right-[50px] lg:top-[-50px] absolute inset-0 flex justify-center z-[-10]">
            <div class="lg:opacity-50 bg-[#9900E5] w-[21rem] h-[17rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
            </div>
            <div class="lg:opacity-50 bg-[#02F67C] w-[16rem] h-[19rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
            </div>
          </div>

          <div class="px-4 justify-between items-center flex">
            <Icon id="DecoLogo" class="w-[111px] h-[31px]" />
          </div>

          <div class="flex flex-row justify-center leading-[150%]">
            <div
              class={`open-button w-auto flex justify-center gap-[3px] text-white text-sm font-normal leading-[21px]`}
            >
              <Icon id="CalendarEvent" size={20} class="w-[13px] lg:w-auto" />
              <span>Monday April 4th, 12pm - 2pm BRT</span>
            </div>
            <div class="h-[21px] self-stretch origin-top-left mx-2 border border-white">
            </div>
            <div
              class={`open-button w-auto flex justify-center gap-[3px] text-white text-sm font-normal font-['Albert Sans'] leading-[21px]`}
            >
              <Icon id="MapPin" size={20} class="w-[13px] lg:w-auto" />
              <span>deco.cx/discord</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-6">
            {/* <Icon id="GirlsBanner" size={400} class="w-full h-full" /> */}
            <div class="w-full max-h-[185px]">
              <img
                class="w-full h-full object-scale-down"
                src="../girls-banner.png"
              />
            </div>

            <div class="self-stretch text-center text-white text-lg font-normal">
              An event dedicated to the female{" "}
              <br />contributions in DevOps and SRE
            </div>
          </div>
          <div class="px-4 lg:px-0 z-10 flex flex-col items-center justify-center gap-6 w-full">
            <SaveYourSpot />
            <CallForSpeakers />
          </div>
          <div class="p-2 bg-white bg-opacity-5 rounded-[999px] border border-white border-opacity-20 justify-start items-center gap-2 inline-flex">
            <img
              class="w-[91px] h-[91px] rounded-[100px]"
              src="https://via.placeholder.com/91x91"
            />
            <div class="flex-col justify-center items-start gap-2 inline-flex">
              <div class="flex-col justify-center items-start flex">
                <div class="text-emerald-500 text-sm font-medium leading-[21px]">
                  🌟 Keynote Speaker
                </div>
                <div class="text-white text-base font-bold leading-normal">
                  Fernanda Weiden
                </div>
              </div>
              <LearnAbout />
            </div>
          </div>
        </div>
        <div id="floatingElements" class="absolute z-0 invisible">
          {isMobile === "desktop"
            ? animationElements.map((elem: AnimationElement) =>
              AnimatedElementMap[elem.id](elem)
            )
            : animationElementsMobile.map((elem: AnimationElement) =>
              AnimatedElementMap[elem.id](elem)
            )}
        </div>
      </div>
      <script type="module" src="/matter-script.js" />
      {gravitySensation === 1 && (
        <div class="hidden" data-prop-editavel="0.1">
        </div>
      )}
      {gravitySensation === 2 && (
        <div class="hidden" data-prop-editavel="0.3">
        </div>
      )}
      {gravitySensation === 3 && (
        <div class="hidden" data-prop-editavel="0.6">
        </div>
      )}
      {gravitySensation === 4 && (
        <div class="hidden" data-prop-editavel="1">
        </div>
      )}
      {gravitySensation === 5 && (
        <div class="hidden" data-prop-editavel="1.5">
        </div>
      )}
      {gravitySensation === 6 && (
        <div class="hidden" data-prop-editavel="2">
        </div>
      )}
      {gravitySensation === 7 && (
        <div class="hidden" data-prop-editavel="3">
        </div>
      )}
    </div>
  );
}
