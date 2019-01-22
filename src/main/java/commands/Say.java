package commands;

import util.Embed;
import net.dv8tion.jda.core.Permission;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Say implements Runnable {
	
	MessageReceivedEvent event;
	public Say(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		MessageEmbed embed;
		String msg;
		
		if (event.getMessage().getContentRaw().length() == 4) {
			msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you need to give me something to say.").toString();
			MessageEmbed empty = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(empty).complete();
			return;
		}

		if (event.getGuild().getMemberById(event.getAuthor().getId()).hasPermission(Permission.MESSAGE_MANAGE)) {
			event.getMessage().delete().queue();
			msg = event.getMessage().getContentRaw().substring(5);
			embed = Embed.getInstance().success(msg);
		} else {
			msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you don't have the permission to use that command.").toString();
			embed = Embed.getInstance().error(msg);
		}
		
		event.getChannel().sendMessage(embed).complete();

	}

}
