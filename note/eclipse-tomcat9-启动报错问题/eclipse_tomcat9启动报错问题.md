## 1. 问题描述
#### eclipse+外置Tomcat9
#### 启动报错

```txt
信息: The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [E:\java\jdk8\jre1.8.0_281\bin;C:\Windows\Sun\Java\bin;C:\Windows\system32;C:\Windows;E:/java/jdk8/jre1.8.0_281/bin/server;E:/java/jdk8/jre1.8.0_281/bin;E:/java/jdk8/jre1.8.0_281/lib/amd64;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Program Files\Common Files\Oracle\Java\javapath;F:\oracle\oracle11g\win64_11gR2_client\app\Administrator\product\11.2.0\client_1\bin;F:\oracle\oracle11g\app\Administrator\product\11.2.0\dbhome_1\bin;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;E:\java\jdk8\jdk1.8.0_281\bin;E:\java\jdk8\jdk1.8.0_281\jre\bin;E:\git\Git\cmd;E:\Python\Python38\Scripts;E:\Python\Python38;E:\DB\mysql-8.0.20-winx64\bin;E:\zookeeper\zookeeper-3.4.10\bin;C:\mingw64\bin;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files (x86)\Yarn\bin\;C:\ProgramData\chocolatey\bin;E:\apache-maven-3.6.3\bin;D:\Xshell\Xshell 7\;%EXTJS_CMD_HOME%;E:\ExtJS\Cmd;E:\Python\Python38\Scripts\;E:\Python\Python38\;C:\Users\Administrator\AppData\Local\Microsoft\WindowsApps;;E:\Python\JetBrains\PyCharm 2020.1.3\bin;;E:\IDEA\JetBrains\IntelliJ IDEA 2020.3.3\bin;;F:\go\IDE\JetBrains\GoLand 2019.2.3\bin;;E:\c_study_self\CLion\JetBrains\CLion 2020.3\bin;;C:\Users\Administrator\AppData\Local\Yarn\bin;E:\Eclipse\eclipse-jee-oxygen-3-win32-x86_64\eclipse;;.]
```
#### 解决方案一：
- 由于Tomcat9中没有 tcnative-1.dll 文件，我们可以使用别的版本中的tcnative-1.dll文件 （%tomcatx.x%\bin 下）
- 将tcnative-1.dll复制到  C:\Windows\System32 目录中
- 此报错不会影响Tomcat的使用

## 2. 问题描述
#### eclipse+外置Tomcat9
#### 启动报错

```txt
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: Server.服务器版本: Apache Tomcat/9.0.48
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 服务器构建:        Jun 10 2021 09:22:01 UTC
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 服务器版本号:      9.0.48.0
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 操作系统名称:      Windows 10
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: OS.版本:           10.0
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 架构:              amd64
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: Java 环境变量:     E:\java\jdk8\jdk1.8.0_291\jre
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: Java虚拟机版本:    1.8.0_291-b10
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: JVM.供应商:        Oracle Corporation
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: CATALINA_BASE:     E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: CATALINA_HOME:     E:\apache-tomcat\apache-tomcat-9.0.48
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 命令行参数：       -Dcatalina.base=E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 命令行参数：       -Dcatalina.home=E:\apache-tomcat\apache-tomcat-9.0.48
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 命令行参数：       -Dwtp.deploy=E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\webapps
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 命令行参数：       -Djava.endorsed.dirs=E:\apache-tomcat\apache-tomcat-9.0.48\endorsed
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.VersionLoggerListener log
信息: 命令行参数：       -Dfile.encoding=UTF-8
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.AprLifecycleListener lifecycleEvent
信息: 使用APR版本[1.7.0]加载了基于APR的Apache Tomcat本机库[1.2.30]。
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.AprLifecycleListener lifecycleEvent
信息: APR功能：IPv6[true]、sendfile[true]、accept filters[false]、random[true]、UDS [true]。
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.AprLifecycleListener lifecycleEvent
信息: APR/OpenSSL配置：useAprConnector[false]，useOpenSSL[true]
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.AprLifecycleListener initializeSSL
信息: OpenSSL成功初始化 [OpenSSL 1.1.1k  25 Mar 2021]
六月 25, 2021 10:46:49 下午 org.apache.coyote.AbstractProtocol init
信息: 初始化协议处理器 ["http-nio-8080"]
六月 25, 2021 10:46:49 下午 org.apache.catalina.startup.Catalina load
信息: 服务器在[529]毫秒内初始化
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.StandardService startInternal
信息: 正在启动服务[Catalina]
六月 25, 2021 10:46:49 下午 org.apache.catalina.core.StandardEngine startInternal
信息: 正在启动 Servlet 引擎：[Apache Tomcat/9.0.48]
六月 25, 2021 10:46:51 下午 org.apache.jasper.servlet.TldScanner scanJars
信息: 至少有一个JAR被扫描用于TLD但尚未包含TLD。 为此记录器启用调试日志记录，以获取已扫描但未在其中找到TLD的完整JAR列表。 在扫描期间跳过不需要的JAR可以缩短启动时间和JSP编译时间。
六月 25, 2021 10:46:51 下午 org.apache.catalina.util.SessionIdGeneratorBase createSecureRandom
警告: 使用[SHA1PRNG]创建会话ID生成的SecureRandom实例花费了[189]毫秒。
六月 25, 2021 10:46:51 下午 org.apache.catalina.core.ContainerBase startInternal
严重: 子容器启动失败
java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:928)
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:835)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:263)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:437)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:934)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.startup.Catalina.start(Catalina.java:772)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.apache.catalina.startup.Bootstrap.start(Bootstrap.java:345)
	at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:476)
Caused by: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at org.apache.catalina.util.LifecycleBase.handleSubClassException(LifecycleBase.java:440)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:198)
	at org.apache.catalina.core.StandardContext.resourcesStart(StandardContext.java:4885)
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5023)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	... 21 more
Caused by: java.lang.IllegalArgumentException: 指定的主资源集 [E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\webapps\shopping1.0] 无效
	at org.apache.catalina.webresources.StandardRoot.createMainResourceSet(StandardRoot.java:751)
	at org.apache.catalina.webresources.StandardRoot.startInternal(StandardRoot.java:708)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	... 30 more

六月 25, 2021 10:46:51 下午 org.apache.catalina.core.ContainerBase startInternal
严重: 子容器启动失败
java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: 子容器启动失败
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:928)
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:263)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:437)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:934)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.startup.Catalina.start(Catalina.java:772)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.apache.catalina.startup.Bootstrap.start(Bootstrap.java:345)
	at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:476)
Caused by: org.apache.catalina.LifecycleException: 子容器启动失败
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:940)
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:835)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	... 13 more
Caused by: java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:928)
	... 21 more
Caused by: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at org.apache.catalina.util.LifecycleBase.handleSubClassException(LifecycleBase.java:440)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:198)
	at org.apache.catalina.core.StandardContext.resourcesStart(StandardContext.java:4885)
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5023)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	... 21 more
Caused by: java.lang.IllegalArgumentException: 指定的主资源集 [E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\webapps\shopping1.0] 无效
	at org.apache.catalina.webresources.StandardRoot.createMainResourceSet(StandardRoot.java:751)
	at org.apache.catalina.webresources.StandardRoot.startInternal(StandardRoot.java:708)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	... 30 more

六月 25, 2021 10:46:51 下午 org.apache.catalina.startup.Catalina start
严重: 所必需的服务组件启动失败，所以无法启动Tomcat
org.apache.catalina.LifecycleException: 子容器启动失败
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:940)
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:263)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:437)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:934)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.startup.Catalina.start(Catalina.java:772)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.apache.catalina.startup.Bootstrap.start(Bootstrap.java:345)
	at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:476)
Caused by: java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: 子容器启动失败
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:928)
	... 13 more
Caused by: org.apache.catalina.LifecycleException: 子容器启动失败
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:940)
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:835)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	... 13 more
Caused by: java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:928)
	... 21 more
Caused by: org.apache.catalina.LifecycleException: 无法启动组件[org.apache.catalina.webresources.StandardRoot@256d8f17]
	at org.apache.catalina.util.LifecycleBase.handleSubClassException(LifecycleBase.java:440)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:198)
	at org.apache.catalina.core.StandardContext.resourcesStart(StandardContext.java:4885)
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5023)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1388)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75)
	at java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:134)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:921)
	... 21 more
Caused by: java.lang.IllegalArgumentException: 指定的主资源集 [E:\Eclipse\Eclipse-workspace2-project\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\webapps\shopping1.0] 无效
	at org.apache.catalina.webresources.StandardRoot.createMainResourceSet(StandardRoot.java:751)
	at org.apache.catalina.webresources.StandardRoot.startInternal(StandardRoot.java:708)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	... 30 more

六月 25, 2021 10:46:51 下午 org.apache.coyote.AbstractProtocol pause
信息: 暂停ProtocolHandler["http-nio-8080"]
六月 25, 2021 10:46:51 下午 org.apache.catalina.core.StandardService stopInternal
信息: 正在停止服务[Catalina]
六月 25, 2021 10:46:51 下午 org.apache.coyote.AbstractProtocol destroy
信息: 正在摧毁协议处理器 ["http-nio-8080"]

```#### 错误原因：- 由于Server Locations设置的路径有问题	
#### 解决方案：
- 正确配置：	- 选择 Use Tomcat installation (takes control of Tomcat installation)	- Deploy path: 选择Tomcat中的 webapps 文件夹即可
![image-Tomcat-Overview-config](../image/Tomcat-Overview-config.png)







