import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

interface Props {
  id: string;
  onClose?: () => void;
  open?: boolean;
  class?: string;
  style?: string;
  children?: ComponentChildren;
  loading?: "eager" | "lazy";
}

function Modal(props: Props) {
  const {
    id,
    children,
    open,
    onClose,
    loading = "lazy",
  } = props;
  const lazy = useSignal(loading === "lazy" && !open);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      (e.key === "Escape" || e.keyCode === 27) && open && onClose?.();

    addEventListener("keydown", handler);

    return () => {
      removeEventListener("keydown", handler);
    };
  }, [open]);

  useEffect(() => {
    lazy.value = false;
  }, []);

  return (
    <>
      <input
        id={id}
        checked={open}
        type="checkbox"
        class="modal-toggle"
        onChange={(e) => e.currentTarget.checked === false && onClose?.()}
      />
      <div class="modal transition-all duration-1000 ease-in-out backdrop-blur-sm">
        {!lazy.value && children}
        <label class="modal-backdrop" for={id}>Close</label>
      </div>
    </>
  );
}

export default Modal;
