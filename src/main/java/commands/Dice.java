package commands;

import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import util.Embed;
import util.RNG;

public class Dice implements Runnable {

	MessageReceivedEvent event;
	public Dice(MessageReceivedEvent event) {
		this.event = event;
	}

	private String roll(String roll) {
		StringBuilder rolls = new StringBuilder();
		int dice = 1, sides = 6, modifier = 0;
		char[] characters = { '+', '-', 'x', '/' };
		char operation = ' ';

		roll = roll.toLowerCase().replaceAll("\\s", "");
		rolls.append("input: " + roll + "\n");

		// get the amount of dice to roll
		int dLocation = roll.indexOf('d');
		if (dLocation != 0) {
			dice = Integer.parseInt(roll.substring(0, dLocation));
		}

		// checkes if there is a modifier
		int modifierLocation = -1;
		for (char character : characters) {
			int index = roll.indexOf(character);
			if (index != -1) {
				operation = character;
				modifierLocation = index;
				break;
			}
		}

		// gets the side and modifier values
		if (modifierLocation != -1) {
			modifier = Integer.parseInt(roll.substring(modifierLocation + 1));
			sides = Integer.parseInt(roll.substring(dLocation + 1, modifierLocation));
		} else {
			sides = Integer.parseInt(roll.substring(dLocation + 1));
		}

		// roll the dice
		int rollValue = 0;
		for (int i = 1; i <= dice; ++i) {
			int diceRoll = RNG.getInstance().generateNumber(sides) + 1;
			rolls.append("  -> roll " + i + ": " + diceRoll + "\n");
			rollValue += diceRoll;
		}

		// add the modifier to the result
		switch (operation) {
		case '+':
			rollValue += modifier;
			break;
		case '-':
			rollValue -= modifier;
			break;
		case 'x':
			rollValue *= modifier;
			break;
		case '/':
			rollValue /= modifier;
			break;
		default:
			break;
		}

		rolls.append("Total roll value: [" + rollValue + "]");
		return rolls.toString();
	}

	@Override
	public void run() {
		String author = event.getAuthor().getAsMention();
		String message = event.getMessage().getContentRaw();

		if (message.length() == 5) {
			String embedMsg = new StringBuilder(author)
					.append(" you need to enter a dice roll.").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
		} else if (message.length() > 5) {
			String input = message.substring(5);
			MessageEmbed embed = Embed.getInstance().success(roll(input));
			event.getChannel().sendMessage(embed).complete();
		}
	}

}
