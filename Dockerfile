# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e package-lock.json (se houver)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Verificar se o next foi instalado
RUN npm list next

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o Next.js rodará
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento Next.js
CMD ["npm", "run", "dev"]
