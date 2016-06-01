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
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);

		}else{
			element['on'+type] = null;
		}
	}
}
