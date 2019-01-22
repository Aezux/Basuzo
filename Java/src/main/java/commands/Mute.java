package main.java.commands;

import java.util.List;

import main.java.util.Embed;
import net.dv8tion.jda.core.entities.Member;
import net.dv8tion.jda.core.entities.Message;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.entities.Role;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Mute implements Runnable {
	
	MessageReceivedEvent event;
	int sec = 1000, min = 60000, hour = 3600000;
	
	public Mute(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		Message msg = event.getMessage();
		String author = event.getAuthor().getAsMention();
		List<Member> mentioned = event.getMessage().getMentionedMembers();
		List<Role> roles = event.getGuild().getRolesByName("mute", true);
		String timePeriod;
		int number;
		
		if (mentioned.isEmpty()) {
			String embedMsg = new StringBuilder(author)
					.append(" you need to mention someone.").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
	
		if (msg.getContentRaw().length() == 5) {
			String embedMsg = new StringBuilder(author)
					.append(" useage: mute [@user] [time]").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		if (roles.isEmpty()) {
			String embedMsg = new StringBuilder(author)
					.append(" you need to have a **mute** role for this to work.").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		try {
			timePeriod = event.getMessage().getContentRaw().split(" ")[2];
		} catch (Exception e) {
			String embedMsg = new StringBuilder(author)
					.append(" you need to set a time.").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		try {
			number = Integer.parseInt(timePeriod.substring(0, timePeriod.length()-1));
		} catch (Exception e) {
			String embedMsg = new StringBuilder(author)
					.append(" you need to enter a correct number.").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		char time = timePeriod.charAt(timePeriod.length()-1);
		switch (time) {
			case 's': number *= sec; break;
			case 'm': number *= min; break;
			case 'h': number *= hour; break;
			default: 
				String embedMsg = new StringBuilder(author)
					.append(" You need to enter a correct time.").toString();
				MessageEmbed embed = Embed.getInstance().error(embedMsg);
				event.getChannel().sendMessage(embed).complete();
				return;
		}
		
		event.getGuild().getController().addSingleRoleToMember(mentioned.get(0), roles.get(0)).complete();
		String muteMsg = new StringBuilder(mentioned.get(0).getAsMention())
				.append(" has been muted.").toString();
		MessageEmbed muteEmbed = Embed.getInstance().status(muteMsg);
		event.getChannel().sendMessage(muteEmbed).complete();
		
		try {
			Thread.sleep(number);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		if (mentioned.get(0).getRoles().contains(roles.get(0))) {
			event.getGuild().getController().removeSingleRoleFromMember(mentioned.get(0), roles.get(0)).complete();
			String embedMsg = new StringBuilder(mentioned.get(0).getAsMention())
					.append(" has been unmuted.").toString();
			MessageEmbed embed = Embed.getInstance().status(embedMsg);
			event.getChannel().sendMessage(embed).complete();
		}
	}

}
