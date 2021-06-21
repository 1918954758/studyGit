package cn.zichen.shopping.model;

/**
 * 用户实体类
 * @author zichen
 *
 */
public class User {

	/** 人员编号 */
	private int id;
	/** 账号 */
	private String name;
	/** 密码 */
	private String password;
	/** 性别 */
	private boolean sex;
	/** 电话号码 */
	private long phone;
	/** QQ */
	private long QQ;
	/** 邮件地址 */
	private String email;
	/** 家庭住址 */
	private String addr;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public long getQQ() {
		return QQ;
	}
	public void setQQ(long qQ) {
		QQ = qQ;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
