package cn.zichen.shopping.service.impl;

import java.util.List;

import cn.zichen.shopping.dao.UserDao;
import cn.zichen.shopping.dao.impl.UserDaoImpl;
import cn.zichen.shopping.model.User;
import cn.zichen.shopping.service.UserService;

public class UserServiceImpl implements UserService {

	UserDao userDao = new UserDaoImpl();
	
	@Override
	public User register(User user) {
		return userDao.save(user);
	}

	@Override
	public boolean remove(int[] ids) {
		boolean flag = false;
		for (int id : ids) {
			flag = userDao.delete(id);
			return flag;
		}
		return flag;
	}

	@Override
	public boolean modify(User user) {
		return userDao.update(user);
	}

	@Override
	public List<User> getPersons() {
		return userDao.findAll();
	}

	@Override
	public boolean login(String name, String password) {
		return userDao.login(name, password);
	}

	@Override
	public boolean checkUserName(String userName) {
		return userDao.checkUserName(userName);
	}

	
}
