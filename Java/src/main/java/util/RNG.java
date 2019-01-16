package main.java.util;

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
		return rand.nextInt(maxRandom);
	}

}
