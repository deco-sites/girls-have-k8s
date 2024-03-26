import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import type { ImageObject } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import SYSInput from "deco-sites/girls-have-k8s/islands/SYSInput.tsx";

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
        class="px-6 pt-3 pb-4 bg-emerald-500 border-none rounded-[104.66px] flex justify-center items-center"
        onClick={() => open.value = true}
      >
        <p class="text-neutral-900 font-medium text-2xl text-center text-nowrap">
          Save your spot <span class="font-normal">(everyone)</span>
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
            <div class="px-4 lg:px-0 z-10 flex flex-col items-center justify-center gap-6 w-full">
              <SYSInput />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SaveYourSpot;
