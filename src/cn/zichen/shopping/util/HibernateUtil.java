package cn.zichen.shopping.util;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import cn.zichen.shopping.model.User;

@SuppressWarnings("deprecation")
public class HibernateUtil {

	private static Configuration configuration;
	private static SessionFactory sessionFactory;
	
	static {
		try {
			//在当前的ClassPath目录下寻找hibernate.cfg.xml配置文件，并将配置文件信息读入内存
			configuration = new Configuration().configure();
			
			//由Configuration类实例创建SessionFactory类实例，为以后我们创建Session类实例做准备
			sessionFactory = configuration.buildSessionFactory();
		} catch (Throwable e) {
			e.printStackTrace();
			System.out.println();
		}
	}
	
	/**
	 * 获取SessionFactory
	 * @return
	 */
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	public static Configuration getConfiguration() {
		return configuration;
	}
	
	public static void rebuildSessionFactory() {
		synchronized(sessionFactory) {
			try {
				sessionFactory = getConfiguration().buildSessionFactory();
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println();
			}
		}
	}
	
	/**
	 * 获得session对象
	 * @return
	 */
	public static Session getSession() {
		Session session = null;
		try {
			session = sessionFactory.openSession();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return session;
	}
	
	/**
	 * 关闭sessionFactory
	 */
	public static void close() {
		try {
			sessionFactory.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 关闭session对象
	 * @param session
	 */
	public static void closeSession(Session session) {
		try {
			if (null != session) {
				session.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 事务回滚
	 */
	public static void rollbackTransaction(Transaction transaction) {
		try {
			if (null != transaction) {
				transaction.rollback();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 返回一个List集合同一查询方法
	 * @param hql
	 * @return
	 */
	@SuppressWarnings({"rawtypes"})
	public static List exeQuery(String hql) {
		List list = null;
		Transaction transaction = null;
		Session session = null;
		try {
			//开启事务
			session = HibernateUtil.getSession();
			transaction = session.beginTransaction();
			
			list = session.createQuery(hql).list();
			
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
		return list;
	}
	
	/**
	 * 分页查询， 返回一个List集合
	 * @param hql
	 * @return
	 */
	@SuppressWarnings({"rawtypes" })
	public static List exeQueryPage(String hql, int start, int end) {
		List list = null;
		Transaction transaction = null;
		Session session = null;
		try {
			//开启事务
			session = HibernateUtil.getSession();
			transaction = session.beginTransaction();
			
			//分页查询方法
			list = session.createQuery(hql).setFirstResult(start).setMaxResults(end).list();
			
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
		return list;
	}
	
	/**
	 * 返回一个List集合同一查询方法
	 * @param hql
	 * @return
	 */
	public static boolean exeDelete(String hql) {
		boolean flag = false;
		Transaction transaction = null;
		Session session = null;
		try {
			//开启事务
			session = HibernateUtil.getSession();
			transaction = session.beginTransaction();
			
			session.createQuery(hql);
			
			transaction.commit();
			
			//关闭事务
			HibernateUtil.closeSession(session);
			flag = false;
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
	
	/**
	 * 返回一个List集合同一查询方法
	 * @param hql
	 * @return
	 */
	public static User exeSave(User user) {
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
	
}
