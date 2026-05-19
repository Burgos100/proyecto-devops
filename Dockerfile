# Usar imagen oficial de Node.js
FROM node:18-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev --ignore-scripts

# Copiar el resto del código
COPY . .

# Comando de inicio
CMD ["node", "index.js"]