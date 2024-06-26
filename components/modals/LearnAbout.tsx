import Icon from "deco-sites/girls-have-k8s/components/ui/Icon.tsx";
import Modal from "deco-sites/girls-have-k8s/components/ui/Modal.tsx";
import { useId } from "deco-sites/girls-have-k8s/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useUI } from "deco-sites/girls-have-k8s/sdk/useUI.ts";

export interface Props {
  label?: string;
  title?: string;
  description?: string;
  photo?: ImageWidget;
  buttonText?: string;

  linkedinUrlPopUp?: string;
  titlePopUp?: string;
  subtitlePopUp?: string;
  descriptionPopUp?: string;
}

function LearnAbout(
  {
    label = "🌟 Keynote Speaker",
    title = "Fernanda Weiden",
    description =
      "Tech leader, former CTO of VTEX, rich history at companies like Meta and Google.",
    photo = "https://via.placeholder.com/144x144",
    buttonText = "Learn About Fernanda",
    linkedinUrlPopUp = "https://www.linkedin.com/in/nandaweiden",
    titlePopUp = "Fernanda Weiden",
    subtitlePopUp =
      "Tech leader from LatAm, former CTO of VTEX, with a rich history at companies like Meta and Google.",
    descriptionPopUp =
      "Fernanda will share her invaluable insights. She dedicated her career to scaling systems and organizations. She brings a wealth of knowledge on what it means to be an SRE and the vital role it plays in today's tech landscape. She is deeply passionate about mentoring, fostering growth, and promoting the inclusion of women in the technology workforce.",
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
        class="w-full max-lg:max-w-[398px] p-6 lg:p-4 gap-6 bg-white bg-opacity-5 rounded-[20px] lg:rounded-[999px] border border-white border-opacity-20 flex hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
        onClick={handleModal}
      >
        <img
          class="w-[110px] h-full object-cover lg:w-36 lg:h-36 rounded-[20px] lg:rounded-[100px]"
          src={photo}
        />
        <div class="flex-col items-center lg:items-start gap-2 lg:gap-4 flex lg:pr-4">
          <div class="flex-col lg:flex-row lg:gap-2 justify-center items-start flex">
            <div class="text-emerald-500 text-sm font-medium leading-[21px]">
              {label}
            </div>
            <div class="text-white text-base font-bold leading-normal">
              {title}
            </div>
          </div>

          <p class="max-w-[500.02px] text-zinc-400 text-base text-center lg:text-start font-normal leading-normal text-wrap">
            {description}
          </p>
          <div class="px-4 py-1 max-lg:w-full lg:px-6 bg-white bg-opacity-5 rounded-[104.66px] border border-[#949E9E] flex justify-center items-center gap-2">
            <p class="text-[#949E9E] font-medium text-[12px]">
              {buttonText}
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
        <div class="modal-box flex flex-col gap-5 w-full max-w-[696px] bg-white p-8 lg:p-12 ">
          <div class="flex justify-end items-center lg:hidden">
            <label for={id}>
              <Icon
                class="w-[26.67px] h-[26.67px] lg:w-[15.71px] lg:h-[15.71px]"
                id="Close"
                size={24}
              />
            </label>
          </div>
          <div class="flex flex-col w-full lg:flex-row justify-center gap-6">
            <div class="h-[286px] w-full lg:w-1/2 lg:h-full">
              <Image
                class="h-full w-full aspect-[73/100] max-h-[376px] object-cover rounded-[20px] border border-emerald-500"
                src={photo || "/images/about.png"}
                alt="Deco Day"
                width={145.5}
                height={190}
              />
            </div>

            <div class="flex flex-col lg:w-1/2 justify-center gap-6 overflow-auto">
              <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center">
                  <h3 class="text-[#27AE6B] text-2xl lg:text-[1.75rem] font-semibold leading-[120%] lg:leading-[32px] tracking-[-0.8px]">
                    {titlePopUp}
                  </h3>
                  <a
                    class="flex justify-center items-center w-8 h-8 p-1 rounded-[71.76px] hover:opacity-70 transition-opacity duration-300"
                    href={linkedinUrlPopUp}
                    target="_blank"
                  >
                    <Icon
                      id="LinkedinIcon"
                      class="w-8 h-8 fill-black"
                      size={24}
                    />
                  </a>
                </div>
                <h4 class="text-[#0D1717] text-base font-normal leading-[150%] tracking-[-0.16px]">
                  {subtitlePopUp}
                </h4>
              </div>
              <p class="text-[#616B6B] text-sm lg:text-base font-normal leading-[150%] tracking-[-0.16px]">
                {descriptionPopUp}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LearnAbout;
