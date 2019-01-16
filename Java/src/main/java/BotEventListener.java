package main.java;

import main.java.commands.*;
import main.java.util.Account;
import main.java.util.WordDetection;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class BotEventListener extends ListenerAdapter{

	public void onMessageReceived(MessageReceivedEvent event) {
		if (event.getAuthor().isBot()) return; // Don't reply to bots
		if (event.getGuild() == null) return; // Don't reply to private messages
		
		String msg = event.getMessage().getContentRaw();
		Thread thread;
		
		/* The message is a command */
		if (msg.startsWith(Account.getInstance().getPrefix())) {
			String command = msg.split(" ")[0].substring(1).toLowerCase();
			
			switch (command) {
				case "ping": thread = new Thread(new Ping(event)); break;
				case "say": thread = new Thread(new Say(event)); break;
				case "help": thread = new Thread(new Help(event)); break;
				case "delete": thread = new Thread(new Delete(event)); break;
				case "roulette": thread = new Thread(new Roulette(event)); break;
				case "coin": thread = new Thread(new Coin(event)); break;
				case "poll": thread = new Thread(new Poll(event)); break;
				case "8ball": thread = new Thread(new EightBall(event)); break;
				case "mute": thread = new Thread(new Mute(event)); break;
				case "lock": thread = new Thread(new Lock(event)); break;
				default: thread = null;
			}
			
			if (thread != null) thread.start();
			
		}
		
		/* The message isn't a command */
		else new Thread(new WordDetection(event)).start();

	}
}
