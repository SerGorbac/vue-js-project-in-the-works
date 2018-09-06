import Home from '@/design/Home.vue'
import Products from '@/design/Products/Products.vue'

export default [{
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      displayName: 'Home Page',
      displayPageTitle: 'Projects'
    }
  },
  {
    name: 'Products',
    path: '/products',
    component: Products,
    meta: {
      displayName: 'Products',
      displayPageTitle: 'Products'
    }
  },
]