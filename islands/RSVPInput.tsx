import UiButton from "deco-sites/girls-have-k8s/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import { useCallback, useEffect } from "preact/hooks";
import { invoke } from "deco-sites/girls-have-k8s/runtime.ts";

interface Props {
  type?: "speaker" | "attendee";
  placeholder?: string;
  subscribeMessage?: string;
  waitingMessage?: string;
  errorMessage?: string;
}

export default function RSVPInput({
  type = "speaker",
  placeholder = "Your email",
  subscribeMessage = "We've sent the confirmation to your email.",
  waitingMessage = "You've joined our waitlist.",
  errorMessage = "Ops, there was an error.",
}: Props) {
  const email = useSignal("");
  const loading = useSignal(false);
  const feedbackMessage = useSignal({
    message: "",
    buttonMessage: type === "speaker" ? "I wanna speak!" : "Save your spot",
  });
  const statusResponse = useSignal("");

  const onRsvp = useCallback(async () => {
    loading.value = true;
    const invokeResponse = await invoke({
      key: "deco-sites/girls-have-k8s/actions/submitRsvp.ts",
      props: {
        email: email.value,
        isSpeaker: type === "speaker",
      },
    });

    console.log("invokeResponse", invokeResponse);

    statusResponse.value = invokeResponse.status ?? "";
    if (invokeResponse.ok) {
      feedbackMessage.value = {
        message: subscribeMessage,
        buttonMessage: "You're in!",
      };
    } else {
      if (invokeResponse.status === "invalid-email") {
        feedbackMessage.value = {
          message: "Invalid email",
          buttonMessage: "Try again",
        };
      } else {
        feedbackMessage.value = {
          message: errorMessage,
          buttonMessage: "Try again",
        };
      }
    }

    loading.value = false;
  }, [email.value]);

  return (
    <div class="flex flex-col gap-3 w-full">
      <form
        class="flex gap-3 p-1.5 lg:p-2 w-full rounded-[100px] justify-center items-center bg-[#EEF0F0] border-[#C9CFCF] border"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRsvp();
        }}
      >
        <input
          onInput={(e) => (email.value = e.currentTarget.value)}
          value={email.value}
          disabled={loading.value}
          placeholder={placeholder}
          class="input pr-0 text-[16px] lg:text-[20px] bg-[#EEF0F0] leading-[34.886px] w-full rounded-[100px] flex justify-center items-center text-[#0D1717]  placeholder:text-[#0D1717]"
        />
        <UiButton
          type="submit"
          loading={loading.value}
          class={`rounded-[100px] min-h-[auto!important] border-0 font-[500] content-center text-[16px] lg:text-[20px] py-[9.95px] px-[19.9px] lg:px-[28px] lg:py-[14px] bg-[#02F67C] ${
            statusResponse.value
              ? "disabled cursor-auto hover:bg-[#02F67C]"
              : ""
          } text-black items-center`}
        >
          {feedbackMessage.value.buttonMessage}
        </UiButton>
      </form>
      {feedbackMessage.value && (
        <span class="font-normal text-[#0D1717] text-center">
          {feedbackMessage.value.message}
        </span>
      )}
    </div>
  );
}
