Explicacion del Pipeline:
Es un flujo automatizado en GitHub Actions que, ante cada actualización en la rama principal, construye el entorno desde cero y valida que el código esté limpio y sin errores antes de aceptarlo como válido

Explicacion del docker:
Es un archivo de configuración que define paso a paso cómo construir una imagen ligera y aislada de la aplicación, instalando únicamente las dependencias de producción para optimizar su peso y asegurar que se ejecute en cualquier entorno

Herramientas utilizadas:
Node.js: El motor y entorno de desarrollo que unifica todo el proyecto

Jest: La herramienta para crear la prueba automatizada que verifica que el cálculo es correcto

ESLint / Prettier: Es el corrector del código. Aseguran que todo esté bien escrito y formateado

Husky y lint-staged: Basicamente seguridad local. Son Git Hooks que bloquean cualquier intento de hacer commit si el codigo tiene errores

Docker: La plataforma que empaqueta nuestra app en un contenedor aislado

GitHub Actions: El servicio en la nube que ejecuta nuestro pipeline CI/CD automáticamente

Dificultades encontradas:
Conexión con el Daemon de Docker: Al intentar construir la imagen la primera vez, la terminal no se podía comunicar con el motor de Docker. Esto se resolvió encendiendo el servicio de Docker Desktop en segundo plano

Conflicto de instalación en el Dockerfile: Al ejecutar la instalación de producción en Docker, NPM intentaba lanzar los scripts automáticos de Husky, los cuales no existían en ese entorno. Esto lo resolvi pasando el parámetro --ignore-scripts en el comando de instalación