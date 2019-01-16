package main.java.util;

import java.util.List;
import net.dv8tion.jda.core.entities.*;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class WordDetection implements Runnable {

	MessageReceivedEvent event;
	public WordDetection(MessageReceivedEvent event) {
		this.event = event;
	}
	
	@Override
	public void run() {

		if (event.getMessage().getContentRaw().startsWith("https://tenor.com")) {
			event.getMessage().delete().complete();
			return;
		}
		
		boolean detected = false;
		List<TextChannel> list = event.getGuild().getTextChannelsByName("admin_chat", true);
		if (!list.isEmpty()) {
			
			String msg = event.getMessage().getContentRaw().toLowerCase();
			String author = event.getAuthor().getAsMention().toString();
			String channel = new StringBuilder("<#").append(event.getChannel().getId()).append(">").toString();
			MessageChannel adminChat = list.get(0);
			
			String[] bannedWords = Account.getInstance().getWords();
			for (String word : bannedWords) {
				if(msg.contains(word)) {

					event.getMessage().delete().queue();
					
					String replyMsg = new StringBuilder(author)
						.append("\nYour message has been **FLAGGED** and **DELETED** for containing a word that is not allowed on this server.")
						.append("\n\n :rotating_light: Your message has been recorded and sent to the moderators for review. :rotating_light:").toString();

					String adminMsg = new StringBuilder(author).append(" wrote in ").append(channel).append(":\n\"").append(msg).append("\"").toString();
					
					MessageEmbed channelEmbed = Embed.getInstance().warning(replyMsg);
					MessageEmbed adminEmbed = Embed.getInstance().warning(adminMsg);
					
					Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("WeeWoo", true).get(0);
					event.getChannel().sendMessage(channelEmbed).complete()
						.addReaction(emote).complete();
					adminChat.sendMessage(adminEmbed).complete();
					detected = true;
					break;
				}
			}
		}

		if (!detected && event.getAuthor().getId().equals(Account.getInstance().getID())) {
			Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("joe", true).get(0);
			event.getMessage().addReaction(emote).complete();
		}
	}

}
