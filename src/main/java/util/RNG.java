package util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Random;

public class RNG {
	
	public static RNG instance = null;
	Random rand = new Random();
	
	private RNG() {}
	
	public static RNG getInstance() {
		if (instance == null) instance = new RNG();
		return instance;
	}
	
	public int generateNumber(int maxRandom) {

		int result = -1;
		String request = new StringBuilder("https://www.random.org/integers/?num=1&min=0&max=")
			.append(Integer.toString(maxRandom)).append("&col=1&base=10&format=plain&rnd=new").toString();

		try {
			URL url = new URL(request);
			URLConnection connection = url.openConnection();
	        InputStream inputStream = connection.getInputStream();
	        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
	        result = Integer.parseInt(bufferedReader.readLine());
		} catch (Exception e) {
			return -1;
		}
		
		return result;
	}

}
