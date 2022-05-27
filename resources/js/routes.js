import { createRouter,createWebHashHistory,editCtegory ,} from 'vue-router'
import Home from "./Home";
import AllCategories  from "./components/Categories/AllCategories";
import AddCategorie from "./components/Categories/AddCategorie.vue"; 
import EditCategorie from "./components/Categories/EditCategorie"; 
import AllScategories from "./components/SousCategories/AllSousCategories.vue"; 
import AddSousCategorie from "./components/SousCategories/AddSousCategorie.vue";
import EditSousCategorie from "./components/SousCategories/EditSousCategorie";
import AllArticles from "./components/Articles/AllArticles"; 
import AddArticles from "./components/Articles/AddArticle"; 
import EditArticle from "./components/Articles/EditArticle"; 
import Register from './components/Authentification/Register.vue';
import Login from './components/Authentification/Login.vue';
import Profile from './components/Authentification/Profile.vue'; 
import Logout from './components/Authentification/Logout.vue'; 

const routes = [
 {
 path: '/',
 name: 'home',
 component: Home
 },
 {
 path: '/categories',
 name: 'categories',
 component: AllCategories
 },
 {
    path: '/AddCat',
    name: 'AddCat',
    component: AddCategorie
    } ,
{
    path: '/editCategorie', 
    name: 'editCategorie',
    component: EditCategorie
 },
{
    path: '/scategories',
    name: 'scategories',
    component: AllScategories
 },
 {
    path: '/AddSousCategorie',
    name: 'AddSousCategorie',
    component: AddSousCategorie
    },
    {
      path: '/EditSousCategorie',
      name: 'EditSousCategorie',
      component: EditSousCategorie
      }, 
      {
         path: '/AllArticles',
         name: 'AllArticles',
         component: AllArticles
         },
         {
            path: '/AddArticles',
            name: 'AddArticles',
            component: AddArticles
            }, 
            {
               path: '/EditArticle',
               name: 'EditArticle',
               component: EditArticle
               },
               {
                  name: 'register',
                  path: '/register',
                  component: Register
                  },
                  {
                  name: 'login',
                  path: '/login',
                  component: Login
                  },
                  {
                  name: 'profile',
                  path: '/profile',
                  component: Profile 
                  },
                  {
                     name: 'logout',
                     path: '/logout',
                     component: Logout
                     }, 
                    
 ];
const router = createRouter({
 history: createWebHashHistory(),
 routes
 })

export default router 