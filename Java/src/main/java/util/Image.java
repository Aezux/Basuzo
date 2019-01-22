package main.java.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Image {

	public static Image instance = null;
	
	private Image() {}
	
	public static Image getInstance() {
		if (instance == null) instance = new Image();
		return instance;
	}
	
	public String getImage(String subreddit) {
		
		String reddit = new StringBuilder("https://imgur.com/r/")
				.append(subreddit).append("/hot.json").toString();
		
		StringBuilder contentBuilder = new StringBuilder();
		String line;
		
		try {
			URL url = new URL(reddit);
		    URLConnection con = url.openConnection();
		    BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
		    
		    while ((line = in.readLine()) != null) {
	            contentBuilder.append(line).append("\r\n");
	        }
			
		    String json = contentBuilder.toString();
			JSONParser parser = new JSONParser();
			
			JSONObject object = (JSONObject) parser.parse(json);
			JSONArray data = (JSONArray) object.get("data");
			
			int rng = RNG.getInstance().generateNumber(data.size());
			
			JSONObject image = (JSONObject)data.get(rng);
			
			return new StringBuilder("https://imgur.com/")
					.append(image.get("hash")).append(image.get("ext")).toString();
		} catch (Exception e) {
			return null;
		}

	}
	
}
