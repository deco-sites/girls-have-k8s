import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import type { ImageObject } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import RSVPInput from "deco-sites/girls-have-k8s/islands/RSVPInput.tsx";

export interface Props {
  description?: string;
}

function SaveYourSpot(
  { description = "Join us for an exclusive virtual lunch session!" }: Props,
) {
  const id = useId();
  const open = useSignal(false);

  return (
    <>
      <Button
        class="w-full max-w-[398px] px-6 py-3 bg-[#02F67C] border-none rounded-[104.66px] flex justify-center items-center"
        onClick={() => open.value = true}
      >
        <p class="text-neutral-900 font-medium text-[22px] text-center">
          Save your spot <span class="font-normal italic">(everyone)</span>
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
