package util;

public class Account {
	
	private static Account instance = null;
	private String[] bannedWords;
	private String translateAPI;
	private String token;
	private String prefix;
	private String owner;
	
	private Account() {
		bannedWords = new String[] {};
	    token = "";
	    translateAPI = "";
		owner = "";
	    prefix = "";
	}
	
	public static Account getInstance() { 
	    if (instance == null) instance = new Account(); 
	    return instance; 
	}
	
	public String getToken() {
		return token;
	}
	
	public String getPrefix() {
		return prefix;
	}
	
	public String getOwnerID() {
		return owner;
	}
	
	public String getTranslateKey() {
		return translateAPI;
	}
	
	public String[] getWords() {
		return bannedWords;
	}
	
	public String[] getCulture(String cultureType) {
		String[] cultures;
		switch (cultureType) {
			default: cultures = null; break;
		}
        return cultures;
	}
	
}
