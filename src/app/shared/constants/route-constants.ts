import { RoutesMenu } from "./routes-interfaces";

/**
 * Routes
 */
export class RouteConstants {
    /**
     * Login route
     */
    public static readonly Login = 'login';
    public static readonly Register = 'register'  

    public static readonly Home = 'home';
    public static readonly Ingresos = 'ingresos';
    public static readonly Egresos = 'egresos';
    public static readonly EnviarDinero = 'enviarDinero';
    public static readonly PlazosFijos = 'plazosFijos';
    public static readonly Usuarios = 'usuarios';
    public static readonly Perfil = 'perfil';
    public static readonly Billeteras = 'billeteras';
    
    public static readonly listItem: RoutesMenu [] =  [
        {
            itemName: 'Home',
            routes: RouteConstants.Home,
          },
          {
            itemName: 'Ingresos',
            routes: RouteConstants.Ingresos,
          },
          {
            itemName: 'Egresos',
            routes: RouteConstants.Egresos,
          },
          {
            itemName: 'Enviar Dinero',
            routes: RouteConstants.EnviarDinero,
          },
          {
              itemName: 'Plazos Fijos',
              routes: RouteConstants.PlazosFijos,
          },
          {
              itemName: 'Usuarios',
              routes: RouteConstants.Usuarios,
          },
          {
              itemName: 'Perfil',
              routes: RouteConstants.Perfil,
          },
          {
              itemName: 'Billeteras',
              routes: RouteConstants.Billeteras,
          }
    ]
}
