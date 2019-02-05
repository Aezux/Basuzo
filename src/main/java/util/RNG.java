package util;

import java.security.SecureRandom;
import java.util.Random;

public class RNG {
	
	public static RNG instance = null;
	Random rand = new SecureRandom();
	
	private RNG() {}
	
	public static RNG getInstance() {
		if (instance == null) instance = new RNG();
		return instance;
	}
	
	public int generateNumber(int maxRandom) {
		return rand.nextInt(maxRandom);
	}

}
