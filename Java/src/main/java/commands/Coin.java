package main.java.commands;

import main.java.util.Embed;
import main.java.util.RNG;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Coin implements Runnable {
	
	MessageReceivedEvent event;
	public Coin(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		MessageEmbed embed = null;
		int rng = RNG.getInstance().generateNumber(2);
		switch (rng) {
			case 0: embed = Embed.getInstance().picture("https://cdn.discordapp.com/attachments/534888220626911265/534973755957444638/Heads.png"); break;
			case 1: embed = Embed.getInstance().picture("https://cdn.discordapp.com/attachments/534888220626911265/534973758918885397/Tails.png"); break;
		}
		event.getChannel().sendMessage(embed).complete();
	}

}