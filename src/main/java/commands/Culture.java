package commands;

import util.Account;
import util.Embed;
import util.Image;
import util.RNG;
import net.dv8tion.jda.core.entities.Emote;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Culture implements Runnable {
	
	MessageReceivedEvent event;
	public Culture(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		
		if (event.getMessage().getContentRaw().length() == 8) {
			String msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you didn't specify the culture.").toString();
			MessageEmbed empty = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(empty).complete();
			return;
		}
		
		String culture = event.getMessage().getContentRaw().split(" ")[1].toLowerCase();
		String[] cultures = Account.getInstance().getCulture(culture);
		
		if (cultures == null) {
			String msg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" that culture doesn't seem to exist in the database...\nCheck the spelling or ask to have it created.").toString();
			MessageEmbed error = Embed.getInstance().error(msg);
			event.getChannel().sendMessage(error).complete();
			return;
		}
		
		Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName(culture, true).get(0);
		int rng = RNG.getInstance().generateNumber(cultures.length);
		String url = Image.getInstance().getImage(cultures[rng]);
		
		MessageEmbed msg = Embed.getInstance().picture(url);
		event.getChannel().sendMessage(msg).complete()
			.addReaction(emote).complete();
	}

}
