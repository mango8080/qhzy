/**
* 控制 首页banner
*/ 

// 选项卡js部分
      // 获取按钮
      var option= document.getElementsByClassName('product-option');
      // 获取盒子
      var showcase= document.getElementsByClassName('operating-platform');
      // 遍历数组对象
      showcase[0].style.display = "block";  
      for (var i = 0; i < option.length; i++) {
        option[i].index=i;
        option[i].onclick = function(){  
                show(this.index);
                console.log(this.index);  
            }  
      }
      function show(a){  
        for(var j=0;j<showcase.length;j++){  
                showcase[j].style.display= "none";                     
            }
            showcase[a].style.display = "block";  
        }