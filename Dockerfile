# Estágio de build
FROM node:18-alpine as build-stage

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de package
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte
COPY . .

# Constrói a aplicação
RUN npm run build

# Estágio de produção
FROM nginx:stable-alpine as production-stage

# Copia a configuração personalizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do estágio anterior
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"] 