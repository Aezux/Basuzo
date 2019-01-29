package commands;

import util.Embed;
import util.RNG;
import net.dv8tion.jda.core.entities.Emote;
import net.dv8tion.jda.core.entities.Invite;
import net.dv8tion.jda.core.entities.Member;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.entities.PrivateChannel;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Roulette implements Runnable {
	
	MessageReceivedEvent event;
	public Roulette(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		
		if (event.getGuild().getOwnerId().equals(event.getAuthor().getId())) {
			String owner = new StringBuilder(event.getAuthor().getAsMention()).append(" I can't let you do that, as the server's owner we need you!").toString();
			MessageEmbed embed = Embed.getInstance().error(owner);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		int result = RNG.getInstance().generateNumber(6);
		
		if (result == 0) {
			Invite invite = event.getGuild().getDefaultChannel().createInvite().complete();
			PrivateChannel dm = event.getAuthor().openPrivateChannel().complete();
			dm.sendMessage(invite.getURL()).complete();	
			dm.close().complete();
			
			Member member = event.getGuild().getMemberById(event.getAuthor().getId());
			event.getGuild().getController().kick(member, "lost the game of roulette").complete();
			
			Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("loser", true).get(0);
			String loseMsg = new StringBuilder(event.getAuthor().getAsMention()).append(" lost in the game of roulette!").toString();
			MessageEmbed embed = Embed.getInstance().success(loseMsg);
			event.getChannel().sendMessage(embed).complete()
				.addReaction(emote).complete();
			
		} else {
			Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("winner", true).get(0);
			String winMsg = new StringBuilder(event.getAuthor().getAsMention()).append(" you are safe!").toString();
			MessageEmbed embed = Embed.getInstance().success(winMsg);
			event.getChannel().sendMessage(embed).complete()
				.addReaction(emote).complete();
		}

	}

}
