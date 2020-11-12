package commands;

import java.util.ArrayList;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.entities.PermissionOverride;
import net.dv8tion.jda.api.entities.Role;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import util.Embed;

public class Lock implements Runnable {
	
	MessageReceivedEvent event;
	public Lock(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		
		String author = event.getAuthor().getAsMention();
		String message = event.getMessage().getContentRaw();
		Role everyoneRole = event.getGuild().getRolesByName("@everyone", false).get(0);
		PermissionOverride permissions = event.getTextChannel().getPermissionOverride(everyoneRole);
		
		ArrayList<Permission> allowed;
		ArrayList<Permission> denied;
		
		if (permissions == null) {
			allowed = new ArrayList<Permission>();
			denied = new ArrayList<Permission>();
		} else {
			if (permissions.getAllowed().size() == 0) {
				allowed = new ArrayList<Permission>();
			} else {
				allowed = new ArrayList<Permission>(permissions.getAllowed());
			}
			
			if (permissions.getDenied().size() == 0) {
				denied = new ArrayList<Permission>();
			} else {
				denied = new ArrayList<Permission>(permissions.getDenied());
			}
		}

		String reason = new StringBuilder(event.getAuthor().getName())
				.append(" has used the ~lock command in the channel").toString();
		MessageEmbed embed;
		
		if (!event.getGuild().getMemberById(event.getAuthor().getId()).hasPermission(Permission.MANAGE_CHANNEL)) {
			String errorMsg = new StringBuilder(event.getAuthor().getAsMention().toString())
					.append(" you don't have the permission to use that command.").toString();			
			MessageEmbed error = Embed.getInstance().error(errorMsg);
			event.getChannel().sendMessage(error).complete();
			return;
		}
		
		if (message.length() == 5) {
			if (!denied.contains(Permission.MESSAGE_WRITE)) {
				denied.add(Permission.MESSAGE_WRITE);
				embed = Embed.getInstance().status("Channel is now Locked");
			} else {
				String errorMsg = new StringBuilder(author)
						.append(" Channel is already Locked").toString();
				embed = Embed.getInstance().error(errorMsg);
			}
		} else {
			try {
				String unlock = message.split(" ")[1].toLowerCase();
				if (unlock.equals("unlock")) {
					if (denied.contains(Permission.MESSAGE_WRITE)) {
						denied.remove(Permission.MESSAGE_WRITE);
						embed = Embed.getInstance().status("Channel is now Unlocked");
					} else {
						String errorMsg = new StringBuilder(author)
								.append(" Channel is already Unlocked").toString();
						embed = Embed.getInstance().error(errorMsg);
					}
				} else {
					String errorMsg = new StringBuilder(author)
							.append(" that is not the correct way to use the command").toString();
					embed = Embed.getInstance().error(errorMsg);
				}
			} catch (Exception e) {
				String errorMsg = new StringBuilder(author)
						.append(" that is not the correct way to use the command").toString();
				embed = Embed.getInstance().error(errorMsg);
				event.getChannel().sendMessage(embed).complete();
				return;
			}
		}

		event.getTextChannel().putPermissionOverride(everyoneRole)
			.setDeny(denied).setAllow(allowed).reason(reason).complete();
		event.getChannel().sendMessage(embed).complete();
	}

}
