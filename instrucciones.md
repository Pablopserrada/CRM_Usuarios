Instrucciones:
    - Creamos Componentes:
        - NavBar
        - Home
        - UsersForm
        - UsersList
            - UsersCard
        - PerfilUsuario
    - Services:
        - Users
    - Interfaces:
        - IUsuario

URL API:
https://peticiones.online/api/users






## APP frontend de un CRM de EMPLEADOS
  - usar tailwind como framework de css 
      - https://tailwindcss.com/docs
      - https://tailwindcss.com/docs/installation/framework-guides/angular
      - https://flowbite.com/
  
  - Url de nuestra https://crm-empleados-v2.onrender.com/api/empleados
        - entidades: USUARIOS, EMPLEADOS (interface, servicio)
  
  - Componentes - pages
      - Home => "/home" => HomeComponent
      - Login => "/login" => LoginComponent
      - Register ?? => "/register" => RegisterUserComponent
      - Dashboard => "/dashboard" => DashboardComponent
                - Rutas hijas
                    - lista empleados
                    - crear un nuevo empleado
                    - actualizar empleado
                    - borrar un empleado (no va ser un ruta va ser un evento)
  - Componentes - share
      - dashboardNav va ser la navegación de la pagina de dashboard 
  - Services
      - Employees
      - Users
  - Interfaces
      - IEmployee
      - IUser

  - Para hacer un login de usuario
        - https://crm-empleados-v2.onrender.com/api/usuarios/login
              {
                "password": "12345",
                "email": "jj@gmail.com"
              }
