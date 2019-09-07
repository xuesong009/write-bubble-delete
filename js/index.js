window.onload = function () {
  //test
  var test = document.getElementsByClassName('test').item(0);
  //cover 遮罩层
  var cover = document.querySelector('.cover');
  //info
  var info = document.querySelector('.info');

  var infoArr = ["匠心打造 中国芯", '2019.10 魅力临沂'];

  /*text*/
  var flag = 0; //infoArr 计数
  var textArr = null;

  var writeFn = function (flag) {
    //textArr 计数
    var i = 0;

    // 获取text,--> arr
    textArr = infoArr[flag].split('');
    //console.log(textArr);

    // 100ms写一个字
    var writeTimer = setInterval(function () {
      if (i >= textArr.length) { // 写完
        clearInterval(writeTimer);

        //延时3s
        var timeOutTimer = setTimeout(function () {
          //遮罩层宽度增加 仿删除效果
          i = 1;//i重置
          var deleteTimer = setInterval(function () {
            if (parseInt(cover.offsetWidth) >= parseInt(test.offsetWidth)) { //删完
              clearInterval(deleteTimer);
              clearTimeout(timeOutTimer);

              cover.style.width = '0px';
              info.innerText = '';

              //下一条数据
              if (flag == 0) {
                flag = 1;
              } else {
                flag = 0;
              }
              writeFn(flag);
            } else {
              cover.style.width = i * 16 + 'px';
              i++;
            }
          }, 50);
        }, 1000);
      } else {
        info.innerText += textArr[i];
        // console.log(info.innerText += textArr[i]);
        i++;
      }
    }, 100);
  };

  writeFn(flag);

  /*bubble*/
  function getRandom(lowerValue, upperValue) {
    if (lowerValue > upperValue) {
      var i = lowerValue;
      lowerValue = upperValue;
      upperValue = i;
    }
    var choice = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choice + lowerValue);
  }

  var bubblesArr = document.getElementsByClassName('bubble');
  var size;//大小
  var top,
    left;
  // console.log(test.clientHeight);
  var bubbleTimer = setInterval(function () {
    for (var index = 0; index < bubblesArr.length; index++) {
      size = getRandom(1, 15);
      bubblesArr[index].style.width = size + 'px';
      bubblesArr[index].style.height = size + 'px';
      top = getRandom(0, test.clientHeight);
      left = getRandom(0, test.clientWidth);
      bubblesArr[index].style.top = top + 'px';
      bubblesArr[index].style.left = left + 'px';
    }
  }, 500);
};
