package DB;

import java.awt.Desktop;
import java.net.URI;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import DataClass.insert_LoginData;

public class DB_Conn {

	public String _sql;

	Connection conn = null;

	public DB_Conn() {
		Connection();
	}

	public DB_Conn(String _sql) {
		Connection();
		this._sql = _sql;
	}

	void Connection() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			String url = "jdbc:mysql://localhost/naver_join?characterEncoding=UTF-8&serverTimezone=UTC";
			String id = "root"; // mysql 접속아이디
			String pwd = "1234"; // mysql 접속 비번
			conn = DriverManager.getConnection(url, id, pwd);
			System.out.println("db접속 성공");
		} catch (Exception e) {

			System.out.println("db접속 실패");
			e.printStackTrace();
		}

	}

	public void Inser_UserData(insert_LoginData _Data) {
		// Connection conn = null; // DB접속 객체
		PreparedStatement pstmt = null; // SQL실행객체

		try {
			String sql = "insert into join_info(User_ID, User_PW, User_NAME, User_BIRTH, User_GENDER, User_EMAIL, User_PHONE)"
					+ "values(?,?,?,?,?,?,?)";
			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, _Data.ID);
			pstmt.setString(2, _Data.PW);
			pstmt.setString(3, _Data.NAME);
			pstmt.setString(4, _Data.BIRTH);
			pstmt.setNString(5, _Data.GENDER);
			pstmt.setString(6, _Data.EMAIL);
			pstmt.setNString(7, _Data.PHONE);

			pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstmt != null) {
					pstmt.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}

	}

	public void selectLogin(insert_LoginData _Data) {
		// TODO Auto-generated method stub
		Statement stmt = null;
		ResultSet res = null;

		try {
			stmt = conn.createStatement();
			String sql = "select User_ID, User_PW ,Admin_chk from join_info where User_ID = '" + _Data.ID + "'";
			res = stmt.executeQuery(sql);
			
			while (res.next()) {
				String _ID = res.getString("User_ID");
				String _PW = res.getString("User_PW");
				int _Ad = res.getInt("Admin_chk");
				
				
				
				if(_Data.ID.equals( _ID)) {
					if(_PW.equals (_Data.PW)) {
						if(_Ad == 2) {
							Desktop.getDesktop().browse(new URI("http://mdago.tistory.com/"));
						}
						else {
							Desktop.getDesktop().browse(new URI("http://www.naver.com/"));
						}
					}
					else {
						System.out.println("아이디 또는 비밀번호를 확인해주세요");
						
					}
				}
				break;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (stmt != null) {
					stmt.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}

	}
}
