import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import { clx } from "../../sdk/clx.ts";
import type { Section } from "deco/blocks/section.ts";
import { ComponentChildren, toChildArray } from "preact";
import { useId } from "preact/hooks";
import { buttonClasses, ButtonColor, grid } from "../../constants.tsx";
import SaveYourSpot from "../../islands/modals/SaveYourSpot.tsx";
import LearnAbout from "../../islands/modals/LearnAbout.tsx";
import CallForSpeakers from "../../islands/modals/CallForSpeakers.tsx";

interface Layout {
  /** @description For desktop in px. */
  itemWidth?: number;
  gap?: {
    /** @default 2 */
    mobile?: "1" | "2" | "4" | "8" | "12" | "16";
    /** @default 4 */
    desktop?: "1" | "2" | "4" | "8" | "12" | "16";
  };
  hide?: {
    controls?: boolean;
    indicators?: boolean;
  };
}

/**
 * @title Carousel
 */
export interface Props {
  children?: ComponentChildren;
  /** @description For automatic sliding in seconds. */
  interval?: number;
  layout?: Layout;
  style?: {
    controlsColor?: ButtonColor;
    controlsOutline?: boolean;
  };
}

function Section({ interval = 0, layout, style, children }: Props) {
  const id = useId();
  const items = toChildArray(children);

  if (!items.length) {
    return null;
  }

  const controlClx = clx(
    buttonClasses[style?.controlsColor || "Default"],
    style?.controlsOutline && "btn-outline",
  );

  return (
    <>
      <div class="px-4 lg:px-0 z-10 flex flex-col items-center justify-center gap-6 w-full">
        <SaveYourSpot />
        <LearnAbout />
        <CallForSpeakers />
      </div>
    </>
  );
}

export default Section;
