package cn.zichen.shopping.service;

import java.util.List;

import cn.zichen.shopping.model.User;

/**
 * 
 * @author zichen
 *
 */
public interface UserService {

	/**
	 * 用户注册
	 */
	public User register(User user);
	
	/**
	 * 删除用户
	 */
	public boolean remove(int[] id);
	
	/**
	 * 修改用户
	 */
	public boolean modify(User user);
	
	/**
	 * 查询所有所用
	 */
	public List<User> getPersons();
	
	/**
	 * 用户登录
	 */
	public boolean login(String name, String password);
	
	/**
	 * 检测用户是否存在
	 */
	public boolean checkUserName(String userName);
}
