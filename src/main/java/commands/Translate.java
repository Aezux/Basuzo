package commands;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import net.dv8tion.jda.core.entities.MessageEmbed;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import util.Account;
import util.Embed;

public class Translate implements Runnable {
	
	MessageReceivedEvent event;
	public Translate(MessageReceivedEvent event) {
		this.event = event;
	}

	@Override
	public void run() {

		String translated = "";
		String targetLang = "pl";
		
		String message = event.getMessage().getContentRaw();
		if (message.length() == 10) {
			String embedMsg = new StringBuilder(event.getAuthor().getAsMention())
					.append(" you need to enter some text for me to translate (use proper grammar)").toString();
			MessageEmbed embed = Embed.getInstance().error(embedMsg);
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		String text = message.substring(10);
		text = text.replaceAll(" ", "%20");

		String request = new StringBuilder("https://translate.yandex.net/api/v1.5/tr.json/translate")
			.append("?key=").append(Account.getInstance().getTranslateKey()).append("&text=").append(text)
			.append("&lang=").append(targetLang).toString();
		
		try {
			URL url = new URL(request);
		    URLConnection con = url.openConnection();
		    BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
		    
		    String line;
		    StringBuilder contentBuilder = new StringBuilder();
		    while ((line = in.readLine()) != null) {
	            contentBuilder.append(line).append("\r\n");
	        }
			
		    String json = contentBuilder.toString();
			JSONParser parser = new JSONParser();
			
			JSONObject object = (JSONObject) parser.parse(json);
			JSONArray data = (JSONArray) object.get("text");
			translated = (String)data.get(0);
		} catch (Exception e) {
			MessageEmbed embed = Embed.getInstance().error("An error occurred while translating");
			event.getChannel().sendMessage(embed).complete();
			return;
		}
		
		MessageEmbed embed = Embed.getInstance().success(translated);
		event.getChannel().sendMessage(embed).complete();
	}

}
