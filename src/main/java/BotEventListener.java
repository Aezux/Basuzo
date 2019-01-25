
import java.util.List;

import commands.*;
import util.Account;
import util.Embed;
import util.WordDetection;
import net.dv8tion.jda.core.entities.Emote;
import net.dv8tion.jda.core.entities.Game;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.entities.TextChannel;
import net.dv8tion.jda.core.events.ReadyEvent;
import net.dv8tion.jda.core.events.guild.member.GuildMemberJoinEvent;
import net.dv8tion.jda.core.events.guild.member.GuildMemberLeaveEvent;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class BotEventListener extends ListenerAdapter{
	
	/* Bot is turned on */
	public void onReady(ReadyEvent event) {
		Game game = Game.playing("~help: view commands!");
		event.getJDA().getPresence().setGame(game);
	}

    /* Member joins the server */
    public void onGuildMemberJoin(GuildMemberJoinEvent event) {    	
    	String user = event.getUser().getName();
    	String guild = event.getGuild().getName();
    	String msg = new StringBuilder("Lets all welcome **")
    			.append(user).append("** to ").append(guild).toString();
    	
    	List<TextChannel> general = event.getGuild().getTextChannelsByName("general", true);
    	Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("hello", true).get(0);
    	MessageEmbed embed = Embed.getInstance().status(msg);
    	
    	TextChannel channel;
    	if (general.isEmpty()) channel = event.getGuild().getDefaultChannel();
    	else channel = general.get(0);
    	
    	channel.sendMessage(embed).complete()
    		.addReaction(emote).complete();
    }
    
    /* Member leaves the server */
    public void onGuildMemberLeave(GuildMemberLeaveEvent event) {
    	String user = event.getUser().getName();
    	String msg = new StringBuilder("**")
    			.append(user).append("** is no longer part of this server").toString();
    	
    	List<TextChannel> general = event.getGuild().getTextChannelsByName("general", true);
    	Emote emote = event.getJDA().getGuildsByName("BotIcons", false).get(0).getEmotesByName("respects", true).get(0);
    	MessageEmbed embed = Embed.getInstance().status(msg);
    	
    	TextChannel channel;
    	if (general.isEmpty()) channel = event.getGuild().getDefaultChannel();
    	else channel = general.get(0);
    	
    	channel.sendMessage(embed).complete()
    		.addReaction(emote).complete();
    }
    
    public void onMessageReceived(MessageReceivedEvent event) {
		if (event.getAuthor().isBot()) return; // Don't reply to bots
		if (event.getGuild() == null) return; // Don't reply to private messages
		
		String msg = event.getMessage().getContentRaw();
		Thread thread;
		
		/* The message is a command */
		if (msg.startsWith(Account.getInstance().getPrefix())) {
			String command = msg.split(" ")[0].substring(1).toLowerCase();
			
			switch (command) {
				case "8ball": thread = new Thread(new EightBall(event)); break;
				case "coin": thread = new Thread(new Coin(event)); break;
				case "culture": thread = new Thread(new Culture(event)); break;
				case "delete": thread = new Thread(new Delete(event)); break;
				case "help": thread = new Thread(new Help(event)); break;
				case "invite": thread = new Thread(new Invite(event)); break;
				case "mute": thread = new Thread(new Mute(event)); break;
				case "poll": thread = new Thread(new Poll(event)); break;
				case "ping": thread = new Thread(new Ping(event)); break;
				case "roulette": thread = new Thread(new Roulette(event)); break;
				case "say": thread = new Thread(new Say(event)); break;	
				default: thread = null;
			}
			
			if (thread != null) thread.start();
			
		}
		
		/* The message isn't a command */
		else new Thread(new WordDetection(event)).start();

	}

}
