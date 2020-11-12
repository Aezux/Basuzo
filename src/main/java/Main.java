
import javax.security.auth.login.LoginException;
import util.Account;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.utils.MemberCachePolicy;

public class Main {
	
	public static void main(String[] args) {
		
		String token = Account.getInstance().getToken();
		JDA bot = null;
		
		try {
			JDABuilder builder = JDABuilder.createDefault(token);
			builder.setActivity(Activity.listening("~help"));
			builder.enableIntents(GatewayIntent.GUILD_MEMBERS);
			builder.setMemberCachePolicy(MemberCachePolicy.ALL);
			bot = builder.build();
		} catch (LoginException e) {
			e.printStackTrace();
		} finally {
			if (bot == null) return;
		}
		
		bot.addEventListener(new BotEventListener());
		
	}
	
}
