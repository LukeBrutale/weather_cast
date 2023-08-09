import React from 'react';
import s from './ErrorView.module.css'

function ErrorView({ message }) {
  return (
    <div className={s.error}>
      <p>{message}</p>
    </div>
  )
}

export default ErrorView;