package main.java.util;

public class Account {
	
	private static Account instance = null;
	private String[] bannedWords;
	private String token;
	private String joeID;
	private String prefix;
	
	private Account() { 
	    token = "";
	    bannedWords = new String[] {};
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
	
	public String getID() {
		return joeID;
	}
	
	public String[] getWords() {
		return bannedWords;
	}
	
}