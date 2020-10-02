// import Vue from 'vue';
// import VueRouter from 'vue-router'


// Vue.use(VueRouter);

import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import PortfolioStock from './components/portfolio/Stock.vue'
import Stocks from './components/stocks/Stocks.vue'
import StocksStock from './components/stocks/Stock.vue'

export const routes = [{
            path: '/',
            component: Home,

        },
        {
            path: '/portfolio',
            component: Portfolio,
            children: [{
                path: '/portfolio/stock',
                component: PortfolioStock
            }]
        },
        {
            path: '/stocks',
            component: Stocks,
            children: [{
                path: '/stocks/stock',
                component: StocksStock
            }]


        }
    ]




