			var audioDom = document.getElementById("audio");
			function dom(id){
				return document.getElementById(id);
			};
			var mkAudio = {
				init :function(){
					//播放器加载完毕后执行函数
					audioDom.oncanplaythrough = function(){
						dom("stime").innerHTML=mkAudio.format(this.duration);
					}
					dom("over").onmousedown=function(e){
						var x = e.clientX;
						var pleft = dom("container").offsetLeft+276;
						var pwidth = this.parentElement.offsetWidth;
						var pw=x-pleft;
						var percent=Math.ceil(pw/pwidth*100);
						dom("percent").style.width=percent+"%";
						audioDom.currentTime = audioDom.duration*pw/pwidth;
					};
				},
				play:function(obj){
					var idom = obj.getElementsByTagName("i")[0];
					if(idom.className=="iconfont icon-icon-test"){
						audioDom.play();
						idom.className = "iconfont icon-music_bell";
					}
					else
					{
						audioDom.pause();	
						idom.className = "iconfont icon-icon-test";
					}
					//播放时长
					audioDom.ontimeupdate=function(){	
						dom("ttime").innerHTML=mkAudio.format(this.currentTime);
						var percent =Math.ceil(this.currentTime/this.duration*100);
						dom("percent").style.width=percent+"%";
					};
				},
				format:function(time){
					var m = Math.ceil(time/60)-1;
					var s = Math.ceil(time%60);
					if(m<10)m="0"+m;
					if(s<10)s="0"+s;
					return m+":"+s
				}
			};
			mkAudio.init();