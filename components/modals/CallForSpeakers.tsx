import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import CFSInput from "deco-sites/girls-have-k8s/islands/CFSInput.tsx";

export interface Props {
  title?: string;
  description?: string;
}

function CallForSpeakers(
  {
    title = "Call for Speakers",
    description =
      "Have insights on SRE or a related topic you're eager to share? Interested in taking the virtual stage after Fernanda's keynote?",
  }: Props,
) {
  const id = useId();
  const open = useSignal(false);

  return (
    <>
      <Button
        class="px-6 py-3 bg-teal-950 rounded-[104.66px] border border-teal-950 flex justify-center items-center gap-2"
        onClick={() => open.value = true}
      >
        <p class="text-white font-medium  text-[24px] text-center text-nowrap">
          I wanna Speak!
          <span class="font-normal">
            {" "} (girls only)
          </span>
        </p>
      </Button>

      <Modal
        id={id}
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <div class="modal-box bg-white space-y-6 p-8 lg:p-12">
          <div class="flex justify-between items-center">
            <div class="flex">
              <p class="hidden lg:block text-[#0D1717] text-[13px] font-semibold leading-[16px] uppercase">
                PRESENT BY
              </p>
              <Icon
                class="w-[112.77px] h-[26.88px] lg:w-[72.17px] lg:h-[17.2px]"
                id="DecoGreenLogo"
                size={24}
              />
            </div>
            <label for={id}>
              <Icon
                class="w-[26.67px] h-[26.67px] lg:w-[15.71px] lg:h-[15.71px]"
                id="Close"
                size={24}
              />
            </label>
          </div>
          <div class="space-y-8 lg:space-y-6">
            <div class="flex items-center gap-4">
              <Icon class="w-[44px] h-[44px]" id="Microphone" size={24} />
              <h3 class="font-semibold text-[#0D1717] text-[28px] leading-[32px] -tracking-[0.8px]">
                {title}
              </h3>
            </div>
            <p class="text-[#616B6B] text-[20px] leading-[150%] -tracking-[0.2px]">
              {description}
            </p>
            <div class="px-4 lg:px-0 z-10 flex flex-col items-center justify-center gap-6 w-full">
              <CFSInput />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CallForSpeakers;
