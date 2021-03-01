<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Gerador de Link do WhatsApp</title>
  </head>
  <body>
    <div id="app">
      <h2>Gerador de link do <span class="greenName">WhatsApp</span></h2>
      <div class="container-phone">
        <input type="text" v-model="prefix" class="prefix" />
        <input
          v-model="phone"
          type="text"
          placeholder="N° do celular (DDD+número)"
          class="phone"
        />
      </div>
      <textarea v-model="text" placeholder="Mensagem de texto"></textarea>

      <button @click="gerarLink">Gerar link</button>

      <span class="link greenName" v-if="link">
        Link gerado!
        <a :href="link" target="_blanck">Clique aqui</a>
      </span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="vue.js"></script>
  </body>
</html>