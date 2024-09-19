# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o Next.js rodará
EXPOSE 3000

# Defina o comando padrão para rodar o servidor de desenvolvimento do Next.js
CMD ["npm", "run", "dev"]
