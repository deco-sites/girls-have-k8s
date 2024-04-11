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
    <div class="flex flex-col w-full">
      <form
        class="flex flex-col gap-6 w-full rounded-[100px] justify-center items-center"
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
          class="input p-2 pl-6 text-[16px] lg:text-[20px] bg-[#EEF0F0] border-[#C9CFCF] border leading-[34.886px] w-full rounded-[100px] flex justify-center items-center text-[#0D1717]  placeholder:text-[#0D1717]"
        />
        <UiButton
          type="submit"
          disabled={statusResponse.value === "success"}
          loading={loading.value}
          class={`rounded-[100px] min-h-[auto!important] border-0 font-medium leading-normal content-center text-[18px] lg:text-[24px] py-[12px] px-[16px] lg:px-[28px] lg:py-[14px] bg-[#02F67C] disabled:bg-[#02F67C] disabled:text-[#0D1717] hover:opacity-70 hover:bg-[#02F67C] text-black items-center`}
        >
          {feedbackMessage.value.buttonMessage}
        </UiButton>
      </form>
      {feedbackMessage.value && (
        <span class="font-normal text-[#0D1717] text-center mt-2.5">
          {feedbackMessage.value.message}
        </span>
      )}
    </div>
  );
}
