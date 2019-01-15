package main.java;

import javax.security.auth.login.LoginException;
import main.java.util.Account;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;

public class Main {
	
	public static void main(String[] args) {
		
		String token = Account.getInstance().getToken();
		JDA bot = null;
		
		try {
			bot = new JDABuilder(token).build();
			System.out.println("Login Succesful!");
		} catch (LoginException e) {
			System.out.println("Login Error!");
			e.printStackTrace();
		} finally {
			if (bot == null) return;
		}
		
		bot.addEventListener(new BotEventListener());
		
	}
	
}
