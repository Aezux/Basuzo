package database;

import java.util.List;
import net.dv8tion.jda.core.entities.Member;
import net.dv8tion.jda.core.entities.Role;
import net.dv8tion.jda.core.events.guild.GuildJoinEvent;

public class AddGuild implements Runnable {
	
	GuildJoinEvent event;
	public AddGuild(GuildJoinEvent event) {
		this.event = event;
	}

	@Override
	public void run() {
		Database db = new Database();
		String server = event.getGuild().getName().replaceAll("[^a-zA-Z0-9]+","");
		boolean guildFound = db.findGuild(server);
		if (!guildFound) db.createTable(server);

		List<Member> members = event.getGuild().getMembers();
		for (Member member : members) {
			String user = member.getUser().getId();
			List<Role> roles = member.getRoles();
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

}
