var eventUnit ={
	//添加句柄
	addHandler:function(element,type,handler){
		//能力嗅探技术
		if(element.addEventListener){

			element.addEventListener(type,handler,false);
		}else if(element.attchEvent){

			element.attchEvent("on"+type,handler);
		}else{
			element['on'+type] = handler;
		}
	},
	//删除句柄
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);

		}else{
			element['on'+type] = null;
		}
	},
	//获取事件类型
	getType:function(event){
		return event.type;
	},
	getElement:function(event){
		return event.target||event.srcElement;
	},
	//获取事件
	getEvent:function(event){
		return event?event:window.event;
	},
	//阻止事件默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue();
		}
	},
	//阻止事件冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;//兼容ie
		}
	}
}
