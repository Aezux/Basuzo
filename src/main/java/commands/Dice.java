package commands;

import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import util.Embed;
import util.RNG;

public class Dice implements Runnable {
	
	MessageReceivedEvent event;
	public Dice(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		
		int sides;
		String author = event.getAuthor().getAsMention();
		String message = event.getMessage().getContentRaw();
		
		if (message.length() == 5) {
			sides = 6;
		} else {
			try {
				sides = Integer.parseInt(message.split(" ")[1]);
			} catch (Exception e) {
				String embedMsg = new StringBuilder(author)
						.append(" you need to enter the number of sides.").toString();
				MessageEmbed embed = Embed.getInstance().error(embedMsg);
				event.getChannel().sendMessage(embed).complete();
				return;
			}
		}

		int rng = RNG.getInstance().generateNumber(sides) + 1;
		MessageEmbed embed = Embed.getInstance().success(Integer.toString(rng));
		event.getChannel().sendMessage(embed).complete();
		
	}

}
