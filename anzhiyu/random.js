var posts=["2024/10/03/Github图床折腾手记/","2024/10/27/CSP2024/","2024/10/03/奇思妙想—征集/","2024/10/03/完美匹配/","2024/10/07/Hello,C++/","2024/10/07/树上三染色/","2024/10/08/当代初中生笔记本使用状况/","2024/10/10/没有上司的舞会/","2024/10/04/感谢名单/","2024/10/07/递归/","2024/10/07/语言博物馆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };