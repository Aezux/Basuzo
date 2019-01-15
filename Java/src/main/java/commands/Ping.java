package main.java.commands;

import net.dv8tion.jda.core.entities.MessageChannel;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Ping implements Runnable {
	
	MessageReceivedEvent event;
	public Ping(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		MessageChannel channel = event.getChannel();
		String ping = new StringBuilder("Ping: `")
				.append(Long.toString(event.getJDA().getPing()))
				.append(" ms`").toString();
		channel.sendMessage(ping).queue();
	}

}
