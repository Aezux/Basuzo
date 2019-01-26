package util;

public class Account {
	
	private static Account instance = null;
	private String[] bannedWords;
	private String token;
	private String joeID;
	private String prefix;
	private String owner;
	
	private Account() {
		bannedWords = new String[] {};
	    token = "";
		owner = "";
	    joeID = "";
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
	
	public String getJoeID() {
		return joeID;
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
