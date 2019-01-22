package main.java.commands;

import net.dv8tion.jda.core.entities.PrivateChannel;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Invite implements Runnable {
	
	MessageReceivedEvent event;
	public Invite(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		PrivateChannel dm = event.getAuthor().openPrivateChannel().complete();
		dm.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=336623511621861388&permissions=2080767223&scope=bot").complete();	
		dm.close().complete();
	}

}
