import  { connect } from 'react-redux'

import { mapDispatchToProps } from './Dashboard.connector'
import Dashboard from './Dashboard'

export default connect(null, mapDispatchToProps)(Dashboard)
