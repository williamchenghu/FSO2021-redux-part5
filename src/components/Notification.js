import { useSelector } from 'react-redux'

const Notification = () => {
  const notificaton = useSelector(state => state.notificatons)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>{notificaton}</div>
  )
}

export default Notification