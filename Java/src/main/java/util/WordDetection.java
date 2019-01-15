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
					
					String reply = new StringBuilder(author).append("nani the fuck!?\n")
						.append("Your message has been **FLAGGED** and **DELETED** for containing a word that is not allowed on this server.")
						.append("\n\n :rotating_light: Your message has been recorded and sent to the moderators for review. :rotating_light:").toString();
					
					event.getChannel().sendMessage(reply).queue();
					String s = new StringBuilder(author).append(" wrote in #").append(channel).append(":\n\"").append(msg).append("\"").toString();
					
					adminChat.sendMessage(s).queue();
					break;
				}
			}
		}
	}

}
