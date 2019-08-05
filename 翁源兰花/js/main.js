jQuery(document).ready(function(){
    var swiper_banner = new Swiper('.swiper_banner.swiper-container', {
        // loop:true,
        spaceBetween: 30,
        // autoplay:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
          },
        on:{
            slideChangeTransitionStart:function(){
                var index = this.activeIndex;
                $('#timeid li').removeClass('light');
                $('#timeid li').eq(index).addClass('light');
            }
        }
      });

      // 优质产品
      var swiper_product = new Swiper('.swiper_product.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop:true,
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

       // 入园企业
       var swiper_company = new Swiper('.swiper_company.swiper-container', {
          slidesPerView: 5,
          spaceBetween: 30,
          loop:true,
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });


      // 旅游指南
      var swiper_travel = new Swiper('.swiper_travel.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 118,
          loop:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

      // 申请成功
      $('#applyid .state').click(function(){

          $(this).addClass('active').siblings('.state').removeClass('active');
      })


      // 未推荐
      $('.select').click(function(){
        $(this).next('.recommend_list').slideToggle();
      })

      // 推荐弹窗
      $('.tuijian_btn').click(function(){
        
          $('.modal_box').show();
      })
      $('#sureid').click(function(){
        $('.modal_box').hide();
      })

      // 兰花商城
      $('.store_list .lg_title').click(function(){
        
          if(!$(this).hasClass('active')){
              $(this).addClass('active');
              $(this).parent('.store_list').find('.flower_item').slideUp();
          }else {
              $(this).removeClass('active');
              $(this).parent('.store_list').find('.flower_item').slideDown();
          }
      })
      // 人才招聘
      $('.talents .img_box').click(function(){
        
          if(!$(this).parents('.talents').hasClass('active')) {
            
            $(this).parents('.talents').addClass('active');
            $(this).parents('.talents').find('.text_box').slideDown();

          }else {
            $(this).parents('.talents').removeClass('active');
            $(this).parents('.talents').find('.text_box').slideUp();
          }
      })
      // 人才招聘详情
      $('.talents_detail .img_box').click(function(){
        
          if(!$(this).parents('.talents_detail').hasClass('active')) {
            
            $(this).parents('.talents_detail').addClass('active');
            $(this).parents('.talents_detail').find('.text_box').slideUp();

          }else {
            $(this).parents('.talents_detail').removeClass('active');
            $(this).parents('.talents_detail').find('.text_box').slideDown();
          }
      })

     

    // 注册
    $("#user_name").click(function () {
        var mobile = $("#phone").val();
        var reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if (!reg.test(mobile)) {
            $(this).parents('.input_box').prev('.input_box').find('.warn').show().html("请输入正确的手机号码");
            return false;
        } else {
            alert('正确')
            $(this).parents('.input_box').prev('.input_box').find('.warn').hide();
            return true;
        }
    });

    $('#send_code').click(function(){
        var pass1 = $('#password').val();
        var pass2 = $('#password_o').val();
        
        if(pass1 !== pass2) {
          $('#password_o').parents('.input_box').find('.warn').show().html('密码不一致');
          return false;
        }else {
          // 
          return true;
        }

    })
      


    



   
})




