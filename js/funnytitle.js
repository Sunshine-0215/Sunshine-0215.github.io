/*
 * @Author: sunshine
 * @Date: 1970-01-01 08:00:00
 * @Description: 
 */

 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function (){
     if (document.hidden){
         $('[rel="icon"]').attr('href', "/images/funny.ico");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else{
         $('[rel="icon"]').attr('href', "/images/head.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
         titleTime = setTimeout(function(){
             document.title = OriginTitle;
            }, 2000);
     }
 });