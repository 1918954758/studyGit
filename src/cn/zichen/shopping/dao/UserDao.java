package cn.zichen.shopping.dao;

import java.util.List;

import cn.zichen.shopping.model.User;

/**
 * 用户业务服务类
 * @author zichen
 *
 */
public interface UserDao {
	
	/**
	 * 用户注册
	 */
	public User save(User user);
	
	/**
	 * 删除用户
	 */
	public boolean delete(int id);
	
	/**
	 * 修改用户
	 */
	public boolean update(User user);
	
	/**
	 * 查询所有所用
	 */
	public List<User> findAll();
	
	/**
	 * 用户登录
	 */
	public boolean login(String name, String password);
	
	/**
	 * 检测用户是否存在, 存在返回true，不存在返回false
	 */
	public boolean checkUserName(String userName);
}
