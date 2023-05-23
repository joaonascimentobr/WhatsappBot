# Define a imagem base
FROM node

# Define o diretório de trabalho dentro da imagem
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
# COPY package*.json ./

# Instala as dependências do aplicativo
# RUN npm install

# Copia o restante dos arquivos do aplicativo para o diretório de trabalho
# COPY . .

# Expõe a porta em que o aplicativo estará executando
# EXPOSE 3000

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update && apt-get install -y google-chrome-stable

# Define o comando padrão a ser executado quando um contêiner baseado nesta imagem for iniciado
CMD [ "npm", "start" ]
