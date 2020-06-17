  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }
      $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
    
    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide1();
    });
    //Функция отображения PopUp
    function PopUpShow1(){
        $("#popup11").show();
    }
    //Функция скрытия PopUp
    function PopUpHide1(){
        $("#popup11").hide();
    }