package commands;

import java.util.List;
import util.Embed;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.entities.MessageHistory;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class Delete implements Runnable {
	
	MessageReceivedEvent event;
	public Delete(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		int deleteAmount = 0;
		
		if (event.getMessage().getContentRaw().length() == 7) {
			String msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you need to tell me how much to delete.").toString();
			MessageEmbed empty = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(empty).complete();
			return;
		}
		
		if (event.getGuild().getMemberById(event.getAuthor().getId()).hasPermission(Permission.MESSAGE_MANAGE)) {

			try {
				deleteAmount = Integer.parseInt(event.getMessage().getContentRaw().substring(8));
			} catch (NumberFormatException e) {
				String errorDesc = new StringBuilder(event.getAuthor().getAsMention().toString())
						.append(" you need to correctly enter a number.").toString();
				
				MessageEmbed error = Embed.getInstance().error(errorDesc);
				event.getChannel().sendMessage(error).complete();
				return;
			}
			
			MessageHistory history = new MessageHistory(event.getChannel());
			List<Message> messages = history.retrievePast(deleteAmount+1).complete();
			event.getTextChannel().purgeMessages(messages);
		
		} else {
			String msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you don't have the permission to use that command.").toString();			
			MessageEmbed error = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(error).complete();
			return;
		}

	}

}
