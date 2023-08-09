import s from './PendingView.module.css'

function PendingView(props) {
  return (
    <div>
      <span className={s.loader}></span>
    </div>

  )
}

export default PendingView;