package cn.zichen.shopping.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import cn.zichen.shopping.dao.UserDao;
import cn.zichen.shopping.model.User;
import cn.zichen.shopping.util.HibernateUtil;

public class UserDaoImpl implements UserDao {

	@Override
	public User save(User user) {
		User u = null;
		Transaction transaction = null;
		Session session = null;
		try {
			//开启事务
			session = HibernateUtil.getSession();
			transaction = session.beginTransaction();
			
			u = (User) session.save(user);
			
			transaction.commit();
			
			//关闭事务
			HibernateUtil.closeSession(session);
		} catch (HibernateException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			HibernateUtil.rollbackTransaction(transaction);
		}
		return u;
	}

	@Override
	public boolean delete(int id) {
		String hql = "delete from User where id = " + id;
		return HibernateUtil.exeDelete(hql);
	}

	@Override
	public boolean update(User user) {
		boolean flag = false;
		Transaction transaction = null;
		Session session = null;
		try {
			//开启事务
			session = HibernateUtil.getSession();
			transaction = session.beginTransaction();
			
			User u = (User) session.load(User.class, user.getId());
			u.setName(user.getName());
			u.setPassword(user.getPassword());
			u.setAddr(user.getAddr());
			u.setEmail(user.getEmail());
			u.setPhone(user.getPhone());
			u.setQQ(user.getQQ());
			
			transaction.commit();
			
			//关闭事务
			HibernateUtil.closeSession(session);
			flag = true;
		} catch (HibernateException e) {
			e.printStackTrace();
			flag = false;
		} catch (Exception e) {
			e.printStackTrace();
			flag = false;
		} finally {
			HibernateUtil.rollbackTransaction(transaction);
		}
		return flag;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> findAll() {
		String hql = "from User";
		return HibernateUtil.exeQuery(hql);
	}

	@Override
	public boolean login(String name, String password) {
		String hql = "from User name = '" + name + "'and password = '" + password + "'";
		if (HibernateUtil.exeQuery(hql).size() > 0) {
			return true;
		}
		return false;
	}

	@Override
	public boolean checkUserName(String userName) {
		String hql = "from User name = " + userName;
		if (HibernateUtil.exeQuery(hql).size() > 0) {
			return true;
		}
		return false;
	}

}
