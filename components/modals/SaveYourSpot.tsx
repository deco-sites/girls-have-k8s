import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import RSVPInput from "deco-sites/girls-have-k8s/islands/RSVPInput.tsx";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  description?: string;
}

function SaveYourSpot(
  { description = "Join us for an exclusive virtual lunch session!" }: Props,
) {
  const id = useId();
  const { displayModalSpot } = useUI();

  function handleModal() {
    displayModalSpot.value = !displayModalSpot.value;
  }

  return (
    <>
      <Button
        class="w-full max-w-[398px] px-6 py-3 bg-[#02F67C] hover:bg-[#02F67C] hover:opacity-70 border-none rounded-[104.66px] flex justify-center items-center"
        onClick={handleModal}
      >
        <p class="text-neutral-900 font-medium text-[22px] text-center">
          Save your spot <span class="font-normal italic">(everyone)</span>
        </p>
      </Button>

      <Modal
        id={id}
        open={displayModalSpot.value}
        loading="lazy"
        onClose={handleModal}
      >
        <div class="modal-box bg-white space-y-6 p-8 lg:p-12">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <p class="hidden lg:block text-[#0D1717] text-[13px] font-semibold leading-[16px] uppercase lg:mr-[8px]">
                PRESENT BY
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
            <p class="text-neutral-900 text-2xl font-bold leading-9">
              {description}
            </p>
            <RSVPInput type="attendee" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SaveYourSpot;
