// components/Modal.tsx

import React from 'react'
import styles from './Modal.module.css'
import CardMobile from '@/views/card-basic/CardMobile'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <CardMobile />
      </div>
    </div>
  )
}

export default Modal
