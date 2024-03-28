import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  keynoteSpeaker?: {
    label?: string;
    title?: string;
    description?: string;
    photo?: ImageWidget;
    buttonText?: string;
  };

  popupKeyNoteSpeaker?: {
    linkedinUrl?: string;
    title?: string;
    subtitle?: string;
    description?: string;
  };
}

function LearnAbout(
  {
    keynoteSpeaker = {
      label: "🌟 Keynote Speaker",
      title: "Fernanda Weiden",
      description:
        "Tech leader, former CTO of VTEX, rich history at companies like Meta and Google.",
      photo: "https://via.placeholder.com/144x144",
      buttonText: "Learn About Fernanda",
    },
    popupKeyNoteSpeaker = {
      linkedinUrl: "https://www.linkedin.com/in/nandaweiden",
      title: "Fernanda Weiden",
      subtitle:
        "Tech leader from LatAm, former CTO of VTEX, with a rich history at companies like Meta and Google.",
      description:
        "Fernanda will share her invaluable insights. She dedicated her career to scaling systems and organizations. She brings a wealth of knowledge on what it means to be an SRE and the vital role it plays in today's tech landscape. She is deeply passionate about mentoring, fostering growth, and promoting the inclusion of women in the technology workforce.",
    },
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
        class="w-full max-lg:max-w-[398px] p-6 lg:p-2 gap-6 bg-white bg-opacity-5 rounded-[20px] lg:rounded-[999px] border border-white border-opacity-20 flex hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
        onClick={handleModal}
      >
        <img
          class="w-[110px] h-[195px] object-cover lg:w-36 lg:h-36 rounded-[20px] lg:rounded-[100px]"
          src={keynoteSpeaker.photo}
        />
        <div class="flex-col items-center lg:items-start gap-2 lg:gap-4 flex">
          <div class="flex-col lg:flex-row lg:gap-2 justify-center items-start flex">
            <div class="text-emerald-500 text-sm font-medium leading-[21px]">
              {keynoteSpeaker.label}
            </div>
            <div class="text-white text-base font-bold leading-normal">
              {keynoteSpeaker.title}
            </div>
          </div>

          <p class="max-w-[500.02px] text-zinc-400 text-base text-center lg:text-start font-normal leading-normal text-wrap">
            {keynoteSpeaker.description}
          </p>
          <div class="px-4 py-1 max-lg:w-full lg:px-6 bg-white bg-opacity-5 rounded-[104.66px] border border-[#949E9E] flex justify-center items-center gap-2">
            <p class="text-[#949E9E] font-medium text-[12px]">
              {keynoteSpeaker.buttonText}
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
          <div class="flex flex-col lg:flex-row justify-center gap-6 ">
            <div class="h-[286px] lg:min-w-[212px] w-full lg:max-h-[376px]">
              <Image
                class="h-full w-full object-cover rounded-[20px] border border-emerald-500"
                src={keynoteSpeaker.photo || "/images/about.png"}
                alt="Deco Day"
                width={150}
                height={150}
              />
            </div>

            <div class="flex flex-col justify-center gap-6 ">
              <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center">
                  <h3 class="text-green-500 text-2xl font-semibold leading-[28.80px]">
                    {popupKeyNoteSpeaker.title}
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
                  {popupKeyNoteSpeaker.subtitle}
                </h4>
              </div>
              <p class="text-neutral-500 text-base font-normal leading-normal">
                {popupKeyNoteSpeaker.description}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LearnAbout;
