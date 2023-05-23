import { create, Whatsapp } from "venom-bot";

export const startVenomBot = async (): Promise<Whatsapp> => {
  const client = await create({
    session: "sesion_confirm",
  })
    .then(async (client) => {
      try {
        await client
          .sendText("5521994123123@c.us", "A plataforma iniciou!")
          .then()
          .catch((erro) => {
            console.error("Error when sending: ", erro); //return object error
          });
        return client;
      } catch (error) {
        console.log(error);
        throw new Error("Error");
      }
    })
    .catch(() => {
      throw new Error("Error");
    });

  return client;
};



(async () => {
  const whats = await startVenomBot();
  whats.onMessage((message) => {
    whats
      .sendText(message.from, '[Messagem automática] No momento estou sem Whatsapp. Por hora estou acessível no telegram.')
      .then((result) => {})
      .catch(() => {console.log("deu merdaaaaaaaaaaa")})
  })
  // whats.sendText("5571986751101@c.us", "tu é gay!");
})();