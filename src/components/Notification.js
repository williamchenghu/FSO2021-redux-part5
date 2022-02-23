import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    display: props.notification.display ? "block" : "none",
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>{props.notification.content}</div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notifications
  }
}

export default connect(mapStateToProps)(Notification)