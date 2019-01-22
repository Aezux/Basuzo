package main.java.util;

import java.awt.Color;

import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.entities.MessageEmbed;

public class Embed {
	
	private static Embed instance = null;

	private Embed() {} 
	
	public static Embed getInstance() { 
	    if (instance == null) instance = new Embed(); 
	    return instance; 
	}
	
	public MessageEmbed error(String description) {
		EmbedBuilder embed = new EmbedBuilder();
		embed.setColor(new Color(255, 43, 0));
		embed.setDescription(description);
		return embed.build();
	}
	
	public MessageEmbed success(String description) {
		EmbedBuilder embed = new EmbedBuilder();
		embed.setColor(new Color(0, 213, 255));
		embed.setDescription(description);
		return embed.build();
	}
	
	public MessageEmbed warning(String description) {
		EmbedBuilder embed = new EmbedBuilder();
		embed.setColor(new Color(225, 234, 0));
		embed.setDescription(description);
		return embed.build();
	}
	
	public MessageEmbed status(String description) {
		EmbedBuilder embed = new EmbedBuilder();
		embed.setColor(new Color(170, 0, 255));
		embed.setDescription(description);
		return embed.build();
	}
	
	public MessageEmbed picture(String url) {
		EmbedBuilder embed = new EmbedBuilder();
		embed.setColor(new Color(255, 128, 0));
		embed.setImage(url);
		return embed.build();
	}

}
	