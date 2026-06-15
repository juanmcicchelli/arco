# Futbol App Argentina
Proyecto Full Stack React + Node.js + MongoDB + JWT.
Documentación Profesional - Resultados de Fútbol
Argentina
1. Introducción
Proyecto web para consultar resultados de fútbol argentino con autenticación JWT, roles ADMIN y
USER, y almacenamiento en MongoDB Atlas.
2. Objetivos
Permitir registro y login de usuarios, administración de equipos y servir de base para resultados,
partidos y tabla de posiciones.
3. Tecnologías
Frontend HTML/CSS/JavaScript (evolucionable a React). Backend Node.js + Express. Base
MongoDB Atlas. Seguridad JWT.
5. Arquitectura
Cliente -> API Express -> MongoDB Atlas. Middlewares JWT y Roles protegen rutas.
6. Instalación
Instalar Node.js, clonar repositorio, ejecutar npm install y configurar archivo .env.
7. Variables de entorno
PORT=5001, JWT_SECRET=tu_clave, MONGO_URI=cadena_de_conexion.
8. Estructura
backend/config, middleware, models, routes, server.js y .env.
9. Casos de uso
Registro, Login, Dashboard ADMIN, Crear Equipo, Listar Equipos.
10. Seguridad
JWT firmado con JWT_SECRET y middleware de autenticación.
11. Publicación
GitHub para código fuente y Render/Railway para despliegue gratuito.
12. Estructura de carpetas
backend
■■■ config
■ ■■■ db.js
■■■ middleware
■ ■■■ authMiddleware.js
■ ■■■ roleMiddleware.js
■■■ models
■ ■■■ User.js
■ ■■■ Equipo.js
■■■ routes
■ ■■■ authRoutes.js
■ ■■■ adminRoutes.js
■ ■■■ userRoutes.js
■ ■■■ equiposRoutes.js
■■■ .env
■■■ package.json
■■■ server.js
13. server.js
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/equipos', equiposRoutes);
14. Pruebas API
POST /api/auth/register
POST /api/auth/login
GET /api/admin/dashboard
POST /api/equipos
GET /api/equipos
15. Ejemplo Login
{
 "email":"juan@test.com",
 "password":"123456"
}
16. Roadmap
CRUD Partidos, Tabla de Posiciones, API Football, Frontend React + Material UI, resultados en
vivo.
Conclusión
El proyecto constituye una base profesional para portfolio y evolución hacia una aplicación
completa de fútbol argentino.
