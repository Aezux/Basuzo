package main.java.commands;

import net.dv8tion.jda.core.entities.PrivateChannel;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class Help implements Runnable {
	
	MessageReceivedEvent event;
	public Help(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		event.getMessage().delete().complete();
		String content = new StringBuilder("```asciidoc\n")
			.append("   8ball :: Ask the 8Ball\n")
			.append("    coin :: Flip a coin\n")
			.append(" culture :: Diffrent cultures\n")
			.append("  delete :: Delete multiple messages\n")
			.append("    help :: List of commands\n")
			.append("  invite :: Invite Basuzo to your server\n")
			.append("    mute :: Mute someone\n")
			.append("    poll :: Poll something\n")
			.append("    ping :: Test latency\n")
			.append("roulette :: Nothing good can come from this\n")
			.append("     say :: Say something\n")
			.append("```").toString();		
		PrivateChannel dm = event.getAuthor().openPrivateChannel().complete();
		dm.sendMessage(content).complete();	
		dm.close().complete();
	}

}
