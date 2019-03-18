//----------------------------------------------------------全局页面修改∨∨∨∨∨∨
function tdinitRightbar() {	
    $("#rbar_myProfile").unbind('click');
	
    //内置 客服 图标修改
    /*
    $("#rbar_onlineSer").css("border-radius","6px");
    $("#rbarOnlineSerIcon").css("width","42px");
    $("#rbarOnlineSerIcon").css("height","42px");
    $("#rbarOnlineSerIcon").css("border-radius","5px");
    */

    //内置 我的资料 图标修改
    $("#rbar_myProfile").css("border-radius", "6px");
    $("#rbarProfileIcon").css("width", "42px");
    $("#rbarProfileIcon").css("height", "42px");
    $("#rbarProfileIcon").css("border-radius", "5px");
    //我的资料---鼠标悬浮图片切换效果设置		
    $('#rbarProfileIcon').hover(function() {
        $('#rbarProfileIcon').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAgtaaI5AUo59r98wIwKjgq.jpg")');
    },
    function() {
        $('#rbarProfileIcon').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAgtaaI5AUolPjBmAcwKjgq.jpg")');
    });

    $('#rbarProfileIcon').click(function() {
        Site.showBookingPanel( - 1, 540, 540);
		rechangeBookingPanel();
    });

    //改变提示框颜色---我的资料
    $("#J_rbarProfileTip").css("background", "white");
    $("#J_rbarProfileTip").css("opacity", "0");
    $("#J_rbarProfileTip").css("color", "black");
    //$("#J_rbarProfileTip").children('[class=fk-triangle]').css("color","white");
    $("#J_rbarProfileTip").html('立即预约...<div class="fk-triangle" style="color: white;">◆</div>');
    $("#J_rbarProfileTip").css("border-radius", "5px");
	$("#J_rbarProfileTip").css("box-shadow", "1px 1px 6px rgba(0,0,0,0.2)");

    //自定义一---在线咨询
    $("#rbar_myItem0").css("border-radius", "6px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').css("width", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').css("height", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').css("border-radius", "5px");
    $("#J_rbarmyItem0").css("border-radius", "5px");
    //自定义一按钮------在线咨询---鼠标悬浮图片切换效果设置
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').hover(function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg6PT44wUovJTkmQUwKjgq.jpg")');
        $("#J_rbarmyItem0").css("background", "white");
		$("#J_rbarmyItem0").css("box-shadow", "1px 1px 6px rgba(0,0,0,0.2)");
        $("#J_rbarmyItem0").css("opacity", "0");
        $("#J_rbarmyItem0").css("color", "black");
        $("#J_rbarmyItem0").children('[class=fk-triangle]').css("color", "white");
		$("#rbarFeedbackIcon").css("cursor", "pointer");
		$("#J_rbarmyItem0").css("cursor", "pointer");
    },
    function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem0"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg5-T44wUo2a3fggcwKjgq.jpg")');
    });
	
	//添加工具图标事件
    $('#rbarFeedbackIcon').click(function() {
        $("#nb_icon_wrap").click();
    });
    $('#J_rbarmyItem0').click(function() {
        $("#nb_icon_wrap").click();
    });
	$('#J_rbarProfileTip').click(function(){
		$("#rbarProfileIcon").trigger("click");
	});
	

    //自定义二---微信二维码
    $("#rbar_myItem1").css("border-radius", "6px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').css("width", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').css("height", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').css("border-radius", "5px");
    $("#fk-rbar-myItem-ImgShow-myItem1").css("border-radius", "5px");
    //自定义二按钮------微信二维码---鼠标悬浮图片切换效果设置
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').hover(function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg6vT44wUo6JnRmQYwKjgq.jpg")');
    },
    function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem1"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg6PT44wUohKK84AUwKjgq.jpg")');
    });

    //自定义三---留言
    $("#rbar_myItem2").css("border-radius", "6px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').css("width", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').css("height", "42px");
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').css("border-radius", "5px");
    $("#J_rbarmyItem2").css("border-radius", "5px");
    //自定义三按钮------留言---鼠标悬浮图片切换效果设置
    $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').hover(function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg6PT44wUoucXshwIwKjgq.jpg")');
        $("#J_rbarmyItem2").css("background", "white");
		$("#J_rbarmyItem2").css("box-shadow", "1px 1px 6px rgba(0,0,0,0.2)");
        $("#J_rbarmyItem2").css("opacity", "0");
        $("#J_rbarmyItem2").css("color", "black");
        $("#J_rbarmyItem2").children('[class=fk-triangle]').css("color", "white");
    },
    function() {
        $('[class="fk-rbar-feedBackItem-logo icon_font  J_fk-rb-icon-myItem2"]').css("background-image", 'url("//18833441.s21i.faiusr.com/2/ABUIABACGAAg6PT44wUo0NX4zQYwKjgq.jpg")');
    });
	
	//	
    $("#J_WebRightBar").css("display","");
    $('[class="fk-rbar-tabs"]').css("padding-top", "196px");
	
	
	//隐藏百度商桥咨询图标
	$("#nb_icon_wrap").css("display","none");
	
	
	tdManualTabButton();
	
}


//标签排版自定义控制hover click事件测试
function tdManualTabButton(){	
	var ftdUrl = window.location.pathname;
	if ( ftdUrl == "/" && tdAutoHeightAndScroll ) {			
			//自动适应屏幕高度
			var ftdWindowHeight = 0;
			if (window.innerHeight){
				ftdWindowHeight = window.innerHeight;
			} else if ((document.body) && (document.body.clientHeight)){
				ftdWindowHeight = document.body.clientHeight;
			}
			if ( ftdWindowHeight > 900 ){
				$(bodyElement2resize[0]).css( "height", ( ftdWindowHeight - bodyElement2height[0] ) + "px" );
			}
	}
			
	$("#formTabButton505-0").trigger("click");			
}

$(window).resize(function(){
	setTimeout("removeRightbar()", 500);
});

function removeRightbar(){
    $('[class="fk-rbar-tabs"]').css("padding-top", "196px");
}
//----------------------------------------------------------全局页面修改∧∧∧∧∧∧∧∧




//----------------------------------------------------------产品展示页面修改∨∨∨∨∨∨
function rechangePdhtml(){
	$('[class="fk-mallBuy-big pd-mt8 "]').css("border-radius", "6px");
	//$('[class="fk-mallBuy-big pd-mt8 "').removeAttr("onclick");
	$('[class="fk-mallBuy-big pd-mt8 "]').attr("onclick","Site.logDog(200332, 11);Site.showBookingPanel(1, 540, 540);rechangeBookingPanel()");	
}
function rechangeBookingPanel(){
	$("#module44").css("border-radius", "6px");	
}
//----------------------------------------------------------产品展示页面修改∧∧∧∧∧∧∧


//----------------------------------------------------------自动滚轮切换∨∨∨∨∨∨
var tdAutoHeightAndScroll = false;
var scrollRuning = true;
var preTop = 1;
var curTop = 0;
var curIndex = 0;
var bodyElement2scroll = ["#fk-webHeaderZone","#module314","#module359","#module377","#module396","#module396"];
var bodyElement2resize = ["#bannerV2","#module314","#module359","#module337","#module377","#module396"];
var bodyElement2height = [200,                 0,         0,         0,         0,         0];

function tdAutoscrollandAutoheight(){
	//控制鼠标滚轮事件触发	
	$(window).scroll(function (e) {
		if(scrollRuning) {			
			scrollRuning = false;
			curTop = $(document).scrollTop();
			//var heightNum = Math.floor(preTop / document.body.clientHeight);
			if ( preTop <= curTop ) {//向下滚			
				if( curIndex < 5 ) curIndex = curIndex + 1;
				$('body,html').animate({scrollTop:$(bodyElement2scroll[curIndex]).offset().top}, 500,function(){
					setTimeout(function () {
						preTop = $(document).scrollTop();
						scrollRuning = true;},200);	
					return false;
				});
			} else {//向上滚
				if( curIndex > 0 ) curIndex = curIndex - 1;
				$('body,html').animate({scrollTop:$(bodyElement2scroll[curIndex]).offset().top}, 500,function(){
					setTimeout(function () {
						preTop = $(document).scrollTop();
						scrollRuning = true;},200);										
				});	
			}
			//自动适应屏幕高度
			var ftdWindowHeight = 0;
			if (window.innerHeight){
				ftdWindowHeight = window.innerHeight;
			} else if ((document.body) && (document.body.clientHeight)){
				ftdWindowHeight = document.body.clientHeight;
			}
			if ( ftdWindowHeight > 900 )
				$(bodyElement2resize[curIndex]).css( "height", ( ftdWindowHeight - bodyElement2height[curIndex] ) + "px" );	
		}
	});	
}
//----------------------------------------------------------自动滚轮切换∧∧∧∧∧∧∧

//页面加载后运行
$(document).ready(function() {
	//隐藏掉百度商桥的链接图片
	$("#nb_icon_wrap").css("display","none");
	
    //设置为右侧全透明
    $("#J_WebRightBar").css("display","none");
    $('[class="fk-rbar-tabs"]').css("background", "rgba(0,0,0,0)");
	
	$("#module399FlBtn").attr('href','javascript:Site.showBookingPanel( - 1, 540, 540);rechangeBookingPanel();');

    //修改底部支持信息
    $('[class="footerFaisco J_supportItem"]').html('技术支持：福润网科');
	
	//获取URL，判断访问位置
	var ftdUrl = window.location.pathname;
	console.log(ftdUrl);	
	
	//修改产品展示页面效果
	if ( ftdUrl == "/pd.jsp" ) {
		rechangePdhtml();
	}
	
	//调用页面通栏div高度自适应和滚轮通栏自定位
	if ( ftdUrl == "/" && tdAutoHeightAndScroll ) {			
		tdAutoscrollandAutoheight();
	}
	
	//调用自定义初始化函数
    setTimeout("tdinitRightbar()", 1000);
	
    /*---------------------------------------------------------------------------------------测试用
	//动态添加的元素  事件定义
	$("body").on("mouseover", "#module44",function(){
		$("#module44").css("border-radius", "6px");
	});
	//自定义悬浮侧边栏
	//document.getElementById("module612").style.width = "200px";
	//document.getElementById("module612").style.height = "200px";
	$("#module590").hover(function(){
		document.getElementById("module612").style.display = "";
		document.getElementById("module612").style.width = "200px";
		document.getElementById("module612").style.height = "200px";
	},function(){
		document.getElementById("module612").style.display = "none";
	});	
	*/

});