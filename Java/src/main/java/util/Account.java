package main.java.util;

public class Account {
	
	private static Account instance = null;
	private String[] bannedWords;
	private String token;
	
	private Account() { 
	    token = "";
	    bannedWords = new String[] {};
	} 
	
	public static Account getInstance() { 
	    if (instance == null) instance = new Account(); 
	    return instance; 
	}
	
	public String getToken() {
		return token;
	}
	
	public String[] getWords() {
		return bannedWords;
	}
	
}