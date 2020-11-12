package commands;

import util.Embed;
import util.RNG;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class EightBall implements Runnable {
	
	String[] answers = new String[] {
	                    "Signs point to yes.", 
	                    "Yes.",
	                    "Reply hazy, try again.",
	                    "Without a doubt.",
	                    "My sources say no.",
	                    "As I see it, yes.",
	                    "You may rely on it.",
	                    "Concentrate and ask again.",
	                    "Outlook not so good.",
	                    "It is decidedly so.",
	                    "Better not tell you now.",
	                    "Yes - definitely.",
	                    "It is certain.",
	                    "Cannot predict now.",
	                    "Most likely.",
	                    "Ask again later.",
	                    "My reply is no.",
	                    "Outlook good.",
	                    "Don't count on it.",
	                    "Who cares?",
	                    "Never, ever, ever.",
	                    "Possibly.",
	                    "There is a small chance."
	};
	
	MessageReceivedEvent event;
	
	public EightBall(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		MessageEmbed embed;
		String msg = event.getMessage().getContentRaw().substring(6);
		if (!msg.matches("^(?!\\s*$).+")) {
			embed = Embed.getInstance().error("I mean I can shake this 8ball all I want but without a question it's kinda dumb.");
		} else {
			int rng = RNG.getInstance().generateNumber(answers.length);
			String answer = new StringBuilder(":8ball: The Magic 8 Ball says: **")
					.append(answers[rng])
					.append("** :8ball:").toString();
			embed = Embed.getInstance().success(answer);
		}
		event.getChannel().sendMessage(embed).complete();
	}

}
