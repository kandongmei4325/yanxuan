import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Bargain from "@/components/bargain"
import Special from "@/components/special"
import Special2 from "@/components/special2"
import Recommend from "@/components/recommend"
import SignIn from "@/components/signin"
import GiftVoucher from "@/components/giftVoucher"
import Classify from "@/components/classify"
import Cart from "@/components/cart"
import User from "@/components/user"
import Login from "@/components/login"
import Register from "@/components/register"
import Order from "@/components/order"
import MyAddress from "@/components/myAddress"
import NewAddress from "@/components/newAddress"

Vue.use(Router)
console.log('%c   侃♥侃', 'color:white;font-size:14px;text-shadow: 0px 0px 5px red;');

	function HSwipe(option) {
		if (this instanceof HSwipe) {
			return this._init(option);
		} else {
			return new HSwipe(option);
		}
	}

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      name:"home",
      component: Home
    }, 
    {
      path:"/classify",
      name:"classify",
      component: Classify
    },
    {
      path:"/cart",
      name:"cart",
      component: Cart 
    },
    {
      path:"/user",
      name:"user",
      component: User
    },
    {
      path:"/bargain",
      name:"bargain",
      component:Bargain
    },
    {
      path:"/special",
      name:"special",
      component:Special
    },
    {
      path:"/special/:id?",    //路由传参
      name:"special",
      component:Special2
    },
    {
      path:"/recommend",
      name:"recommend",
      component:Recommend
    },
    {
      path:"/signIn",
      name:"signIn",
      component:SignIn
    },
    {
      path:"/giftVoucher",
      name:"giftVoucher",
      component:GiftVoucher
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path:"/order",
      name:"order",
      component:Order
    },   
    {
      path:"/myAddress",
      name:"myAddress",
      component:MyAddress
    }, 
    {
      path:"/newAddress",
      name:"newAddress",
      component:NewAddress
    },   
  ]
})
