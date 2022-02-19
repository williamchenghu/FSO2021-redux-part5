import { useSelector } from 'react-redux'

const Notification = () => {
  const notificaton = useSelector(state => state.notificatons)
  const style = {
    display: notificaton.display ? "block" : "none",
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>{notificaton.content}</div>
  )
}

export default Notification