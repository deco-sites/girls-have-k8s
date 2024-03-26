import Button from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import type { ImageObject } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import SYSInput from "deco-sites/girls-have-k8s/islands/SYSInput.tsx";

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

function LearnAbout(
  {
    title = "Fernanda Weiden",
    subtitle =
      "Tech leader from LatAm, former CTO of VTEX, with a rich history at companies like Meta and Google.",
    description =
      "Fernanda will share her invaluable insights. She dedicated her career to scaling systems and organizations. She brings a wealth of knowledge on what it means to be an SRE and the vital role it plays in today's tech landscape. She is deeply passionate about mentoring, fostering growth, and promoting the inclusion of women in the technology workforce.",
  }: Props,
) {
  const id = useId();
  const open = useSignal(false);

  return (
    <>
      <Button
        class="px-6 py-3 bg-white bg-opacity-5 rounded-[104.66px] border border-teal-950 flex items-center gap-2"
        onClick={() => open.value = true}
      >
        <p class="text-neutral-400 font-medium text-sm">
          Learn about Fernanda
        </p>
        <div class="w-6 h-6">
          <Icon id="ArrowRight" size={24} />
        </div>
      </Button>

      <Modal
        id={id}
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <div class="modal-box max-w-[60%] bg-white space-y-6 p-8 lg:p-12">
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
          <div class="flex flex-col lg:flex-row justify-center gap-6 ">
            <div class="h-[286px] w-full lg:max-h-[376px]">
              <Image
                class="h-full w-full object-scale-down rounded-[20px] border border-emerald-500"
                src="/images/about.png"
                alt="Deco Day"
                width={150}
                height={150}
              />
            </div>

            <div class="flex flex-col justify-center gap-6 ">
              <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center">
                  <h3 class="text-green-500 text-2xl font-semibold leading-[28.80px]">
                    {title}
                  </h3>
                  <div class="flex justify-center items-center w-10 h-10 p-2 bg-emerald-500 rounded-[71.76px]">
                    <Icon
                      id="LinkedinIcon"
                      class="w-6 h-6 fill-black"
                      size={24}
                    />
                  </div>
                </div>
                <h4 class="text-neutral-900 text-xl font-normal leading-[30px]">
                  {subtitle}
                </h4>
              </div>
              <p class="text-neutral-500 text-base font-normal leading-normal">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LearnAbout;
