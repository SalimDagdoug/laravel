import { createRouter,createWebHashHistory,editCtegory ,} from 'vue-router'
import Home from "./Home";
import AllCategories  from "./components/Categories/AllCategories";
import AddCat from "./components/Categories/AddCat.vue"; 
import EditCategorie from "./components/Categories/EditCategorie"; 
import AllScategories from "./components/SousCategories/AllSousCategories.vue"; 
import AddSousCategorie from "./components/SousCategories/AddSousCategorie.vue";

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
    component: AddCat
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
    }
   
 ];
const router = createRouter({
 history: createWebHashHistory(),
 routes
 })

export default router 