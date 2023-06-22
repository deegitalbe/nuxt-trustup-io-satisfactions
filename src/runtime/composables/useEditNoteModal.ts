import {
  EditNoteModal,
  useEditSatisfaction,
} from "@deegital/vue-3-trustup-io-satisfactions";
import { useModal } from "#imports";

export const useEditNoteModal = (identifier: string) => {
  const { uuid, builder, onSuccess } = useEditSatisfaction(identifier);
  const { open: rawOpen, close } = useModal(EditNoteModal);
  const open = () =>
    rawOpen({
      builder,
      uuid,
    });

  return { open, close, onSuccess };
};
