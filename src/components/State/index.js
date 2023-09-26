import './index.css'

const State = props => {
  const {sandt} = props
  const {id, capitalDisplayText} = sandt

  return (
    <>
      <option value={id}>{capitalDisplayText}</option>
    </>
  )
}

export default State
