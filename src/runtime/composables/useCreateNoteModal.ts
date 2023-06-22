import {
  CreateNoteModal,
  useCreateSatisfaction,
  Origin,
} from "@deegital/vue-3-trustup-io-satisfactions";
import { useModal } from "#imports";

export const useCreateNoteModal = ({
  origin,
  createdById,
  relatedToId,
  relatedToType,
}: {
  origin: Origin;
  createdById: number;
  relatedToId: string;
  relatedToType: string;
}) => {
  const { builder, onSuccess } = useCreateSatisfaction({
    origin,
    createdById,
    relatedToId,
    relatedToType,
  });
  const { open: rawOpen, close } = useModal(CreateNoteModal);
  const open = () =>
    rawOpen({
      builder,
    });

  return { open, close, onSuccess };
};
