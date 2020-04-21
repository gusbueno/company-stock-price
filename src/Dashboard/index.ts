import  { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './Dashboard.connector'
import Dashboard from './Dashboard'

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
