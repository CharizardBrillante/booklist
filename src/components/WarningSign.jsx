import { Alert } from 'react-bootstrap'

const WarningSign = (props) => (
    <Alert variant="warning">Warning! {props.message}</Alert>
)

export default WarningSign;