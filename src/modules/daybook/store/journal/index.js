import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getter from './getters'


const journalModule = {
    namespaced:true,
    state,
    mutations,
    actions,
    getter
}

export default journalModule