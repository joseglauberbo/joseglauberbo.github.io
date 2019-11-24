import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
  ]
})