import { JSX } from "preact/jsx-runtime";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";
import { AppContext } from "../apps/site.ts";
import Image from "apps/website/components/Image.tsx";
import SaveYourSpot from "../islands/modals/SaveYourSpot.tsx";
import LearnAbout from "../islands/modals/LearnAbout.tsx";
import CallForSpeakers from "../islands/modals/CallForSpeakers.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @title ButtonIconSquare
 */
interface ButtonIconSquareProps {
  /**
   * @hide
   */
  id: "buttonIconSquare";
  label?: string;

  icon: AvailableIcons;
  color: string;
  backgroundColor: string;
}

function ButtonIconSquare(
  { icon, color, backgroundColor }: ButtonIconSquareProps,
) {
  const bg = backgroundColor.includes("-")
    ? toVar(backgroundColor)
    : backgroundColor;
  const clr = color.includes("-") ? toVar(color) : color;

  return (
    <button
      style={`background-color: ${bg}; color: ${clr};`}
      class={`elem p-[13.11px] rounded-xl border border-white justify-start items-start flex`}
    >
      <Icon id={icon} size={24} class={`w-[24px] fill-[${color}] h-[24px]`} />
    </button>
  );
}

/**
 * @title buttonIconRounded
 */
interface ButtonIconRoundedProps {
  /**
   * @hide
   */
  id: "buttonIconRounded";
  label?: string;

  icon: AvailableIcons;
  color: string;
  backgroundColor: string;
}

function ButtonIconRounded(
  { icon, color, backgroundColor }: ButtonIconRoundedProps,
) {
  const bg = backgroundColor.includes("-")
    ? toVar(backgroundColor)
    : backgroundColor;
  const clr = color.includes("-") ? toVar(color) : color;

  return (
    <button
      style={`background-color: ${bg}; color: ${clr};`}
      class={`elem p-[13.11px] rounded-full border border-white justify-start items-start flex`}
    >
      <Icon id={icon} size={24} class={`w-[24px] fill-[${color}] h-[24px]`} />
    </button>
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
  | ButtonIconRoundedProps
  | ButtonIconSquareProps;

interface TopButton {
  label: string;
  icon: AvailableIcons;
  url: string;
}

export interface Props {
  animationElements: AnimationElement[];
  // /**
  //  * @description Mobile Elements
  //  */
  // animationElementsMobile: AnimationElement[];
  /**
   * @description Select Gravity Level - 1(super slow) to 7(super fast) | Default is 4(Earths Gravity)
   */
  /** @default 4 */
  gravitySensation?: 1 | 2 | 3 | 4 | 5 | 6 | 7;

  imageDesk?: ImageWidget;
  imageMobile?: ImageWidget;
  imageAbout?: ImageWidget;
}

const AnimatedElementMap: Record<
  AnimationElement["id"],
  // deno-lint-ignore no-explicit-any
  (props: any) => JSX.Element
> = {
  button: Button,
  checkbox: CheckBox,
  buttonIconSquare: ButtonIconSquare,
  buttonIconRounded: ButtonIconRounded,
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
  const device = ctx.device;

  if (device === "desktop") {
    return {
      ...props,
      isDesktop: true,
    };
  } else {
    return {
      ...props,
      isDesktop: false,
    };
  }
};

export default function DecoDay({
  animationElements,
  // animationElementsMobile,
  gravitySensation,
  imageAbout,
  imageDesk,
  imageMobile,
  isDesktop,
}: Props & {
  animationElements: AnimationElement[];
  isDesktop: boolean;
  // animationElementsMobile?: AnimationElement[];
}) {
  return (
    <div class="flex flex-col bg-black h-full w-full">
      {/* Mobile */}
      {!isDesktop &&
        (
          <div class="lg:hidden flex flex-col gap-12 p-4 pt-[22px] lg:p-4 items-center  bg-black  h-full w-screen box-border">
            {/* Gradiente */}
            <div class="h-full bg-black top-[80px] lg:right-[50px] lg:top-[-50px] absolute inset-0 flex justify-center">
              <div class="lg:opacity-50 bg-[#9900E5] w-[21rem] h-[17rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
              </div>
              <div class="lg:opacity-50 bg-[#02F67C] w-[16rem] h-[19rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
              </div>
            </div>

            <div class="hidden lg:block z-10 px-4 self-center">
              <Icon id="DecoLogo" class="w-[111px] h-[31px]" />
            </div>

            <div class="z-10 flex flex-row justify-center leading-[150%]">
              <div
                class={`open-button w-auto flex justify-center gap-[3px] text-white text-sm font-normal leading-[21px]`}
              >
                <Icon id="CalendarEvent" size={20} class="w-[13px] lg:w-auto" />
                <span>Thursday April 4th, 12pm - 2pm BRT</span>
              </div>
              <div class="h-[21px] self-stretch origin-top-left mx-2 border border-white">
              </div>
              <a
                class={`open-button w-auto flex justify-center gap-[3px] text-white text-sm font-normal leading-[21px] hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer`}
                href={"https://discord.gg/NEyNv2E7J7?event=1221650438978273301"}
                target="_blank"
              >
                <Icon id="MapPin" size={20} class="w-[13px] lg:w-auto" />
                <span>deco.cx/discord</span>
              </a>
            </div>
            <div class="z-10 w-full flex flex-col items-center">
              {/* <Icon id="GirlsBanner" size={400} class="w-full h-full" /> */}
              <div class="w-full h-[200px]">
                <Picture preload={true}>
                  <Source
                    src={imageMobile || ""}
                    width={200}
                    height={200}
                  />
                  <img
                    class="w-full h-full mb-6 object-contain"
                    src={imageMobile || ""}
                    decoding="async"
                    loading={"lazy"}
                  />
                </Picture>
              </div>

              <div class="text-center text-white text-lg font-normal">
                An event dedicated to the female{" "}
                <br />contributions in DevOps and SRE
              </div>
            </div>
            <div class="z-10 flex flex-col items-center justify-center gap-6 w-full">
              <div class="text-center text-white text-base font-medium italic">
                Apply for a 5m lightning talk! {"<"}5 slots available{">"}
              </div>
              <CallForSpeakers />
              <SaveYourSpot />
            </div>

            <div class="max-w-[398px] z-10 p-6 bg-white bg-opacity-5 rounded-[20px] border border-white border-opacity-20 flex-col justify-center items-center gap-4 flex">
              <div class="text-white text-lg font-bold leading-[30px]">
                Join us for an exclusive virtual lunch session!
              </div>
              <div class="text-zinc-400 text-sm font-normal leading-normal">
                Together we will explore the future of scalability, reliability,
                performance, and efficiency in technology. This event is a
                celebration of female voices in tech, but everyone is invited to
                attend and contribute.
              </div>
            </div>

            <div class="z-10 flex justify-center w-full">
              <LearnAbout image={imageAbout} />
            </div>

            <div class="flex items-center gap-[3px] pb-2">
              <p class="text-white text-base font-bold uppercase">
                PRESENTED BY
              </p>
              <Icon
                class="w-[98.57px] h-[28.97px] mb-[8px]"
                id="DecoGreenLogo"
                size={24}
              />
            </div>
          </div>
        )}

      {/* Desktop */}
      {isDesktop &&
        (
          <div class="hidden lg:flex lg:flex-col lg:h-screen lg:w-screen lg:overflow-hidden">
            <div id="canvas" class="absolute z-[0] opacity-0"></div>

            <div class="flex flex-col gap-4 p-4  bg-black  h-screen w-screen box-border">
              {/* Gradiente */}
              <div class="h-full bg-black top-[80px] lg:right-[50px] lg:top-[-50px] absolute inset-0 flex justify-center items-center">
                <div class="lg:opacity-50 bg-[#02F67C] w-[16rem] h-[19rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
                </div>
                <div class="lg:opacity-50 bg-[#9900E5] w-[21rem] h-[17rem] lg:w-96 lg:h-96 rounded-full blur-[200px]">
                </div>
              </div>

              <div class="z-10 flex flex-row justify-center leading-[150%] self-end px-6 py-[30px]">
                <div
                  class={`open-button w-auto flex justify-center gap-[3px] lg:gap-4 text-white text-xl font-normal leading-[21px]`}
                >
                  <Icon
                    id="CalendarEvent"
                    size={20}
                    class="w-[13px] lg:w-[17.90px]"
                  />
                  <span>Thursday April 4th, 12pm - 2pm BRT</span>
                </div>
                <div class="h-[21px] self-stretch origin-top-left mx-8 border border-white">
                </div>
                <a
                  class={`open-button w-auto flex justify-center gap-[3px] lg:gap-4 text-white text-xl font-normal leading-[21px] hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer`}
                  href={"https://discord.gg/NEyNv2E7J7?event=1221650438978273301"}
                  target="_blank"
                >
                  <Icon id="MapPin" size={20} class="w-[13px] lg:w-[17.90px]" />
                  <span>deco.cx/discord</span>
                </a>
              </div>
              {/* Content */}
              <div class="z-10 flex flex-row items-center justify-center gap-20">
                <div class="items-center flex flex-col gap-[54px]">
                  <div class="flex flex-col">
                    <div class="w-full h-[280px]">
                      <Picture preload={true}>
                        <Source
                          src={imageDesk || ""}
                          width={250}
                          height={250}
                        />
                        <img
                          class="w-full h-full mb-6 object-scale-down"
                          src={imageDesk || ""}
                          decoding="async"
                          loading={"eager"}
                        />
                      </Picture>
                    </div>

                    <div class="self-stretch text-center text-white text-lg font-normal">
                      An event dedicated to the female{" "}
                      <br />contributions in DevOps and SRE
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-6 w-full">
                    <div class="text-center text-white text-base font-medium font-['Albert Sans'] italic ">
                      Apply for a 5m lightning talk! {"<"}5 slots available{">"}
                    </div>
                    <CallForSpeakers />
                    <SaveYourSpot />
                  </div>
                </div>

                <div class="flex flex-col gap-10">
                  <div class="max-w-[662.02px] h-[188px] p-8 bg-white bg-opacity-5 rounded-[20px] border border-white border-opacity-20 flex-col justify-center items-center gap-4 inline-flex">
                    <div class="self-stretch text-white text-2xl font-bold leading-9">
                      Join us for an exclusive virtual lunch session!
                    </div>
                    <div class="self-stretch text-zinc-400 text-base font-normal leading-normal">
                      Together we will explore the future of scalability,
                      reliability, performance, and efficiency in technology.
                      This event is a celebration of female voices in tech, but
                      everyone is invited to attend and contribute.
                    </div>
                  </div>
                  <LearnAbout image={imageAbout} />
                  <div class="flex items-center self-end gap-[3px]">
                    <p class="text-white text-base font-bold uppercase">
                      PRESENTED BY
                    </p>
                    <Icon
                      class="w-[98.57px] h-[28.97px] mb-[8px]"
                      id="DecoGreenLogo"
                      size={24}
                    />
                  </div>
                </div>
              </div>
              <div id="floatingElements" class="absolute z-0 invisible">
                {animationElements.map((elem: AnimationElement) =>
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
        )}
    </div>
  );
}
