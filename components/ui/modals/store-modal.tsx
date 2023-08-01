"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";

export const StoreModal = ( )=> {
  const StoreModal = useStoreModal( );
  return (
  <Modal 
    title="Create Store"
    description="Add a new Store"
    isOpen= {StoreModal.isOpen}
    onClose={StoreModal.onClose}
    >
      Future Store Form
  </Modal>
  );
};