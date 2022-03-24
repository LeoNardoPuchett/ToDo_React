// Layouts 
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutSign from "../layouts/LayoutSign";

//Pages

import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Error404 from "../pages/Error404";

//arreglo de rutas 
    const routesToDo  =[
                    {
                    path : '/',
                    layout: LayoutBasic,
                    component :Home ,
                    
                    },
                    {
                    path :'/todo',
                    layout: LayoutBasic,
                    component : ToDo,
                    
                    },
                    {
                    path : '*',
                    layout : LayoutBasic,
                    component: Error404
                    }
                    ];
    const routesSign = [
                    {
                    path : '/signin',
                    layout: LayoutSign,
                    component :SignIn ,   
                    },
                    {
                    path :'/signup',
                    layout: LayoutBasic,
                    component : SignUp,
                    
                    },
                    ];
    const routes = [...routesToDo , ...routesSign] ; 
     
    export default routes ; 



