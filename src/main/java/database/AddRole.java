package database;

import java.util.List;
import net.dv8tion.jda.core.entities.Role;
import net.dv8tion.jda.core.events.guild.member.GuildMemberRoleAddEvent;

public class AddRole implements Runnable {
	
	GuildMemberRoleAddEvent event;
	public AddRole(GuildMemberRoleAddEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		Database db = new Database();
		String server = event.getGuild().getName().replaceAll("[^a-zA-Z0-9]+","");
		String user = event.getMember().getUser().getId();
		List<Role> roles = event.getMember().getRoles();
		StringBuilder stringBuilder = new StringBuilder();

		for (int i=0; i<roles.size(); i++) {
			stringBuilder.append(roles.get(i).getId());
			if (i < roles.size()-1) stringBuilder.append(",");
		}
		
		boolean userFound = db.findUser(server, user);
		if (!userFound) db.addUser(server, user, stringBuilder.toString());
		else db.updateUser(server, user, stringBuilder.toString());
	}

}
