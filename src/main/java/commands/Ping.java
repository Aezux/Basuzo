package commands;

import util.Embed;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class Ping implements Runnable {
	
	MessageReceivedEvent event;
	public Ping(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		String ping = new StringBuilder("Ping: `")
				.append(Long.toString(event.getJDA().getGatewayPing()))
				.append(" ms`").toString();
		MessageEmbed success = Embed.getInstance().success(ping);
		event.getChannel().sendMessage(success).complete();
	}

}
