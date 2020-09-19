package com.RISE_Replica.server.Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	// Static reference to itself
	private static ConnectionFactory instance = new ConnectionFactory();

	public static final String DRIVER_CLASS = "org.postgresql.Driver";
	public static final String URL = "jdbc:postgresql://127.0.0.1:5432/Rise";
	public static final String USER = "shreyataneja";
	public static final String PASSWORD = "9467";
	
	// private constructor
	private ConnectionFactory() {
		try {
			Class.forName(DRIVER_CLASS);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	private Connection createConnection() {
		Connection connection = null;
		try {
			connection = DriverManager.getConnection(URL, USER, PASSWORD);
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("ERROR: Unable to Connect to Database.");
		}
		return connection;
	}

	public static Connection getConnection() {
		return instance.createConnection();
	}
}