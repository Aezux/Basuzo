package commands;

import util.Embed;
import net.dv8tion.jda.api.entities.Emote;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class Poll implements Runnable {
	
	MessageReceivedEvent event;
	public Poll(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		
		if (event.getMessage().getContentRaw().length() == 5) {
			String msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you need to give me something to poll.").toString();
			MessageEmbed empty = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(empty).complete();
			return;
		}
		
		String question = event.getMessage().getContentRaw().substring(6);
		if (question.charAt(question.length()-1) != '?') {
			question += "?";
		}
		String poll = new StringBuilder(":scales: **New Poll**:\n\n").append(question).toString();
		MessageEmbed embed = Embed.getInstance().success(poll);
		
		Emote yes = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("yes", true).get(0);
		Emote no = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("no", true).get(0);
		
		event.getMessage().delete().complete();
		Message msg = event.getChannel().sendMessage(embed).complete();
		msg.addReaction(yes).complete();
		msg.addReaction(no).complete();
	}

}
