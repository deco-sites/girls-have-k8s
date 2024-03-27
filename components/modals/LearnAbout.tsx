import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: ImageWidget;
}

function LearnAbout(
  {
    title = "Fernanda Weiden",
    subtitle =
      "Tech leader from LatAm, former CTO of VTEX, with a rich history at companies like Meta and Google.",
    description =
      "Fernanda will share her invaluable insights. She dedicated her career to scaling systems and organizations. She brings a wealth of knowledge on what it means to be an SRE and the vital role it plays in today's tech landscape. She is deeply passionate about mentoring, fostering growth, and promoting the inclusion of women in the technology workforce.",
    image,
  }: Props,
) {
  const id = useId();
  const { displayModalAbout } = useUI();

  function handleModal() {
    displayModalAbout.value = !displayModalAbout.value;
  }

  return (
    <>
      <div
        class="w-full max-lg:max-w-[398px] p-2 bg-opacity-5 rounded-[999px] border border-white border-opacity-20 gap-2 flex hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
        onClick={handleModal}
      >
        <img
          class="w-[91px] h-[91px] lg:w-36 lg:h-36 rounded-[100px]"
          src={image}
        />
        <div class="flex-col items-start gap-2 lg:gap-4 flex">
          <p class="text-emerald-500 text-sm font-medium leading-[21px]">
            🌟 Keynote Speaker{"  "}
            <span class="text-white text-base font-bold leading-normal">
              Fernanda Weiden
            </span>
          </p>

          <div class="hidden lg:block">
            <p class="max-w-[500.02px] text-zinc-400 text-base font-normal leading-normal text-wrap">
              Tech leader, former CTO of VTEX, rich history at companies like
              Meta and Google.
            </p>
          </div>
          <div class="px-2 py-[2px]  bg-white bg-opacity-5 rounded-[104.66px] border border-teal-950 flex items-center">
            <p class="text-neutral-400 font-medium text-[12px]">
              Learn about Fernanda
            </p>
            <div class="w-6 h-6">
              <Icon id="ArrowRight" size={24} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        id={id}
        open={displayModalAbout.value}
        loading="lazy"
        onClose={handleModal}
      >
        <div class="modal-box lg:max-w-[60%] bg-white space-y-6 p-8 lg:p-12">
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
          <div class="flex flex-col lg:flex-row justify-center gap-6 ">
            <div class="h-[286px] lg:min-w-[212px] w-full lg:max-h-[376px]">
              <Image
                class="h-full w-full object-cover rounded-[20px] border border-emerald-500"
                src={image || "/images/about.png"}
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
