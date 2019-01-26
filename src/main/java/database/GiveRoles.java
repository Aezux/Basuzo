package database;

import net.dv8tion.jda.core.entities.Role;
import net.dv8tion.jda.core.events.guild.member.GuildMemberJoinEvent;

public class GiveRoles implements Runnable {
	
	GuildMemberJoinEvent event;
	public GiveRoles(GuildMemberJoinEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		Database db = new Database();
		String server = event.getGuild().getName().replaceAll("[^a-zA-Z0-9]+","");
		String user = event.getMember().getUser().getId();
		boolean userFound = db.findUser(server, user);
		if (userFound) {
			String[] roles = db.getRoles(server, user).split(",");
			for (String role : roles) {
				Role guildRole = event.getGuild().getRoleById(role);
				event.getGuild().getController().addSingleRoleToMember(event.getMember(), guildRole).queue();
			}
		}
	}

}
