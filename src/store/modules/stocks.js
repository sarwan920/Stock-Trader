import stocks from '../../data/data'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },

    'RND_STOCKS'() {

    }
}


const actions={
    buyStock:({commit},order)=>{
        commit('BUY_STOCK',order);
    },
    initStocks:({commit})=>{
        commit('SET_STOCKS',stocks);
    },
    randomizeStock:({commit})=>{
        commit('RND_STOCK');
    }
}

const getters={
    stocks:state=>{
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}