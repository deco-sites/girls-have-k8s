import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import RSVPInput from "deco-sites/girls-have-k8s/islands/RSVPInput.tsx";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  buttonText?: string;
  buttonTextScope?: string;
  description?: string;
}

function SaveYourSpot(
  {
    buttonText = "Save your spot",
    buttonTextScope = "(everyone)",
    description = "Join us for an exclusive virtual lunch session!",
  }: Props,
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
          {buttonText}{" "}
          <span class="font-normal italic text-[1.125rem]">
            {buttonTextScope}
          </span>
        </p>
      </Button>

      <Modal
        id={id}
        open={displayModalSpot.value}
        loading="lazy"
        onClose={handleModal}
      >
        <div class="modal-box bg-white space-y-6 p-8 lg:p-12">
          <div class="flex justify-end items-center">
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
