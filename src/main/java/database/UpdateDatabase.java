package database;

import java.util.List;
import net.dv8tion.jda.core.entities.Guild;
import net.dv8tion.jda.core.entities.Member;
import net.dv8tion.jda.core.entities.Role;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import util.Account;

public class UpdateDatabase implements Runnable {
	
	MessageReceivedEvent event;
	public UpdateDatabase(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {

		if (!event.getAuthor().getId().equals(Account.getInstance().getOwnerID())) return;
		
		Database db = new Database();
		List<Guild> guilds = event.getJDA().getGuilds();
		
		for (Guild guild : guilds) {
			String server = guild.getName().replaceAll(" ", "_");
			boolean guildFound = db.findGuild(server);
			if (!guildFound) db.createTable(server);
			
			List<Member> members = guild.getMembers();
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

}
