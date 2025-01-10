# Use uma imagem Node.js moderna
FROM node:18

# Instale o Ember CLI globalmente
RUN npm install -g ember-cli@6.0.1

# Configure o diretório de trabalho
WORKDIR /web

# Instale dependências ao montar o volume
COPY package.json package-lock.json /web/
# RUN npm install

# Exponha a porta padrão do Ember.js
EXPOSE 4200

# Comando para iniciar o servidor Ember.js
# CMD ["ember", "serve", "--host", "0.0.0.0"]
