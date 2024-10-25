// components/Modal.tsx

import React from 'react'
import styles from './Modal.module.css'
import CardMobile from '@/views/card-basic/CardMobile'
import CardWatch from '@/views/card-basic/CardWatch'
import CardHorizontalRatings from '@/views/card-basic/CardHorizontalRatings'
import CardSupport from '@/views/card-basic/CardSupport'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <CardSupport />
      </div>
    </div>
  )
}

export default Modal
