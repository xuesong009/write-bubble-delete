##效果分析
###1、文本
  2组数据:"匠心打造 中国芯","2019.10 魅力临沂">2019.10 魅力临沂";
  轮流显示: 左边开始 一个字一个字 显示, 延时5秒, cover模仿删除, 显示下一条数据;
  
  备注:
    <1> 使用cover模仿删除效果时, .info应该处于文档流中,不应该position:absolute;top;left;z-index:1000;
    <2> 另外cover的background:rgb(255, 255, 255);
    <3> 使用innerText会忽略空格;

###2、bubble 
大小位置变化:
setInterval(function(){
  getRandom()
  width = height;
  top;
  left;
},500);