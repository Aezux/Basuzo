
import javax.security.auth.login.LoginException;
import util.Account;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;

public class Main {
	
	public static void main(String[] args) {
		
		String token = Account.getInstance().getToken();
		JDA bot = null;
		
		try {
			bot = new JDABuilder(token).build();
		} catch (LoginException e) {
			e.printStackTrace();
		} finally {
			if (bot == null) return;
		}
		
		bot.addEventListener(new BotEventListener());
		
	}
	
}
