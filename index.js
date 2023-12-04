
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
client.on("messageCreate", async message => {
  if (message.content.includes("@everyone") || message.content.includes("@here") || message.content.includes(`<@!${client.user.id}>`) || message.content.includes(`Free`) || message.content.includes(`Marj Tanha Reaction`)) {
    if (!message.content.includes("Invite") && !message.content.includes("Marj vc") && !message.content.includes("add")) {
      const allMessages = await message.channel.messages.fetch({
        limit: 3
      })
      allMessages.forEach(async id => {
        let messager = await message.channel.messages.fetch(id.id);
        if (messager.reactions) {
          if (messager.reactions.cache) {
            let reactions = messager.reactions.cache;
            if (reactions.size > 0) {
              reactions.forEach(reaction => {
                if (reaction.emoji.id) {
                  messager.react(reaction.emoji.id);

                } else {
                  messager.react(reaction.emoji.name);
                }

              })
            }
          }
        }
      })
    }
  }
})
client.login("token");
// Copyright by s1vann
