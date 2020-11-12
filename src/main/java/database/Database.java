package database;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Database {

	private final String jdbc;
	private final String user;
	private final String pass;

	public Database() {
		final String host = "192.168.1.64";
		final String database = "Servers";	
		jdbc = new StringBuilder("jdbc:mysql://")
				.append(host).append(":3306/").append(database)
				.append("?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC")
				.toString();

		user = "basuzo";
		pass = "discord";
	}

	public void createTable(String tableName) {
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			Statement statment = connection.createStatement();
			String query = new StringBuilder("CREATE TABLE ").append(tableName).append(" ")
				.append("(id VARCHAR(30) not NULL, ")
				.append("roles VARCHAR(1024), ")
				.append("PRIMARY KEY ( id ));").toString();
			statment.executeUpdate(query);
			statment.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void addUser(String tableName, String userID, String userRoles) {
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			Statement statment = connection.createStatement();
			String value1 = new StringBuilder("'").append(userID).append("'").toString();
			String value2 = new StringBuilder("'").append(userRoles).append("'").toString();
			String query = new StringBuilder("INSERT INTO ").append(tableName)
					.append(" values (").append(value1).append(", ").append(value2).append(")").toString();
			statment.executeUpdate(query);
			statment.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void updateUser(String tableName, String userID, String userRoles) {
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			Statement statment = connection.createStatement();
			String value1 = new StringBuilder("'").append(userRoles).append("'").toString();
			String value2 = new StringBuilder("'").append(userID).append("'").toString();
			String query = new StringBuilder("UPDATE ").append(tableName)
					.append(" SET roles = ").append(value1).append("WHERE id = ").append(value2).toString();
			statment.executeUpdate(query);
			statment.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getRoles(String tableName, String userID) {
		String roles = null;
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			Statement statment = connection.createStatement();
			String value = new StringBuilder("'").append(userID).append("'").toString();
			String query = new StringBuilder("SELECT roles from ").append(tableName).append(" WHERE id = ").append(value).toString();
			ResultSet result = statment.executeQuery(query);
			if (result.first()) roles = result.getString("roles");
			result.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return roles;
	}
	
	public boolean findGuild(String tableName) {
		boolean found = false;
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			DatabaseMetaData dbm = connection.getMetaData();
			ResultSet tables = dbm.getTables(null, null, tableName, null);
			if (tables.next()) found = true;
			tables.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return found;
	}
	
	public boolean findUser(String tableName, String userID) {
		boolean found = false;
		try {
			Connection connection = DriverManager.getConnection(jdbc, user, pass);
			Statement statment = connection.createStatement();
			String value = new StringBuilder("'").append(userID).append("'").toString();
			String query = new StringBuilder("SELECT 1 FROM ").append(tableName).append(" WHERE id = ").append(value).toString();
			ResultSet result = statment.executeQuery(query);
			if (result.next()) found = true;
			result.close();
			connection.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return found;
	}
	
}
