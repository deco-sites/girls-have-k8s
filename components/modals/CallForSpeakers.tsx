import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import RSVPInput from "deco-sites/girls-have-k8s/islands/RSVPInput.tsx";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  popupSpeaker?: {
    buttonText?: string;
    buttonTextScope?: string;
    title?: string;
    description?: string;
  };
}

function CallForSpeakers(
  {
    popupSpeaker = {
      buttonText: "I wanna speak!",
      buttonTextScope: "(girls only)",
      title: "Call for Speakers",
      description:
        "Have insights on SRE or a related topic you're eager to share? Interested in taking the virtual stage after Fernanda's keynote?",
    },
  }: Props,
) {
  const id = useId();
  const { displayModalSpeaker } = useUI();

  function handleModal() {
    displayModalSpeaker.value = !displayModalSpeaker.value;
  }

  return (
    <>
      <Button
        class="w-full max-w-[398px] px-2 py-3 bg-[#113032] rounded-[104.66px] border border-[#113032] flex justify-center items-center gap-2 hover:bg-[#113032] hover:opacity-70"
        onClick={handleModal}
      >
        <p class="text-white font-medium  text-[22px] text-center d">
          {popupSpeaker.buttonText}
          <span class="font-normal italic text-[1.125rem]">
            {" "} {popupSpeaker.buttonTextScope}
          </span>
        </p>
      </Button>

      <Modal
        id={id}
        open={displayModalSpeaker.value}
        loading="lazy"
        onClose={handleModal}
      >
        <div class="modal-box bg-white space-y-6 p-8 lg:p-12">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <p class="hidden lg:block text-[#0D1717] text-[13px] font-semibold leading-[16px] uppercase lg:mr-[8px]">
                PRESENTED BY
              </p>
              <Icon
                class="w-[112.77px] h-[26.88px] lg:w-[75.17px] lg:h-[20.2px] lg:mb-[5px]"
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
                {popupSpeaker.title}
              </h3>
            </div>
            <p class="text-[#616B6B] text-[20px] leading-[150%] -tracking-[0.2px]">
              {popupSpeaker.description}
            </p>
            <RSVPInput type="speaker" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CallForSpeakers;
