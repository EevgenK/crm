'use client';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}
const PromotionFormModal = ({
  companyId,
  onClose,
  ...rest
}: PromotionFormModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
