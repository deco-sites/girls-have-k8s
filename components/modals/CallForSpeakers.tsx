import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import RSVPInput from "deco-sites/girls-have-k8s/islands/RSVPInputSpeaker.tsx";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  buttonText?: string;
  buttonTextScope?: string;
  title?: string;
  /** @format html */
  description?: string;
}

function CallForSpeakers(
  {
    buttonText = "I wanna speak!",
    buttonTextScope = "(girls only)",
    title = "Call for Speakers",
    description =
      "Have insights on SRE or a related topic you're eager to share? Interested in taking the virtual stage after Fernanda's keynote?",
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
          {buttonText}
          <span class="font-normal italic text-[1.125rem]">
            {" "} {buttonTextScope}
          </span>
        </p>
      </Button>

      <Modal
        id={id}
        open={displayModalSpeaker.value}
        loading="lazy"
        onClose={handleModal}
      >
        <div class="modal-box bg-white flex flex-col gap-5 p-8 lg:p-12 w-full max-w-[677px]">
          <div class="flex justify-end items-center lg:hidden">
            <label for={id}>
              <Icon
                class="w-[26.67px] h-[26.67px] lg:w-[15.71px] lg:h-[15.71px]"
                id="Close"
                size={24}
              />
            </label>
          </div>
          <div class="flex flex-col gap-8 lg:gap-6">
            <div class="flex items-center gap-4">
              <Icon class="w-[44px] h-[44px]" id="Microphone" size={24} />
              <h3 class="font-semibold text-[#0D1717] text-[28px] leading-[32px] -tracking-[0.8px]">
                {title}
              </h3>
            </div>
            <p class="text-[#616B6B] text-[20px] leading-[150%] -tracking-[0.2px]">
              {description}
            </p>
            <RSVPInput type="speaker" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CallForSpeakers;
