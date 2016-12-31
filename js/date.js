function showTime(){
	var NowDate = new Date();
	var year = NowDate.getFullYear();
	var month=NowDate.getMonth()+1;
	var day = NowDate.getDate();
	var h = NowDate.getHours();
	var m = NowDate.getMinutes();
	var s = NowDate.getSeconds();
	m = CheckTime(m);
	s = CheckTime(s);
	document.getElementById("time").innerHTML =  + year + "/" + month + "/" + day + "/" + " "+ h + ":" + m + ":" + s;
	t=setTimeout('showTime()',500);
	
}
function CheckTime(i){
	if(i<10){
		i='0'+i;
	}
	return i;
}

function FestivalTime(){
	var Christmas = new Date('2016/12/24 20:00:00');
	var NewYear = new Date('2016/12/30 20:00:00');
	var Spring = new Date('2017/01/27 17:30:00');
	var Valentine = new Date('2017/02/13 20:00:00');
	// var festivals = new Array();
	// festivals[0] = Christmas;
	// festivals[1] = NewYear;
	// festivals[2] = Spring;
	// festivals[3] = Valentine;
	var ChrId = document.getElementById("Christmas");
	var NewId = document.getElementById("NewYear");
	var SprId = document.getElementById("Spring");
	var ValId = document.getElementById("Valentine");
	var NowDate = new Date();
	var Chr_discrepancy = NowDate.getTime() - Christmas.getTime();
	var New_discrepancy = NowDate.getTime() - NewYear.getTime();
	var Spr_discrepancy = NowDate.getTime() - Spring.getTime();
	var Val_discrepancy = NowDate.getTime() - Valentine.getTime();
	//创建audio节点通过JS控制选择哪首音乐
	var audio = document.createElement("audio");
	audio.setAttribute("loop","loop");
	audio.setAttribute("autoplay","");
	//可以创建多个html来实现文字改变 $('#Christmas').attr('href',"Christmas.html");
	if(Chr_discrepancy >= 0){
		$('#Christmas').click(function(){ $('#text').html('嘻嘻嘻嘻，我的傻瓜小河马，你看到这条的时候现在是平安夜了呢，我们平安夜没有在一起，但没关系，我们明天就可以见到了呢，我好开心哦！今天是我们在一起的123天，我们吵过，痛过，开心过，幸福过，我多想和你一直走下去。虽然我知道这很难。但我还是想说，纵使前途荆棘，亦要破釜沉舟。燕过留声，泥泞留痕，而我们爱情的结晶留下的，一定是珍惜，是疼爱，是美满。你说过你喜欢圣诞节，所以我会陪着你，满足你的心愿。如果你看到这里，给我发好多亲亲的表情好不好？哈哈。我不知道我仅仅送你这样一个礼物，你会不会开心。本想很多东西用英文写的，怕我这个水平加上很多错误语法的网上翻译雷到你，所以还是算了嘻嘻。但真的是脑子里突然闪过的灵光，至于到底浪不浪漫，不重要喽，总之是老公对你的爱。明天就要见到了呢，睡个好觉，期待明天！我们还会走下去，我爱你！我们的故事还没有停...')})
		ChrId.onclick = function(){
			audio.setAttribute("src","jingle bell.mp3");
			document.getElementsByTagName('body')[0].appendChild(audio);
		}
	}
	else ChrId.onclick = function(){alert("傻河马，还没到呢，别急(΄◉◞౪◟◉‵)")};
	
	if(New_discrepancy >= 0){
		$('#NewYear').click(function(){$('#text').html('哇，我们又等到元旦了呢，我的小河马。虽然没有过很久，我想如果不出意外的话现在我们很大程度是在一起的。真快，2016年转瞬即逝，真的不懂做了些什么，有多少收获，如果说最大的收获的话，那就是遇到了值得我爱的人：立平女神。对于2017，最期待的事就是我们可以一直走下去，可以有艰难险阻，但好希望我们可以一起克服。跟你跨年了呢，这辈子第一次和女生跨年，如果我们现在在一起，那我们尽情的吻对方好不好，不要松开好不好？吻到窒息，好！不！好！最后，祝我最爱的河马老婆新的一年越来越美丽，工作越来越顺利，越来越爱她的大狗，越来越幸福！')})
		NewId.onclick = function(){
			audio.setAttribute("src","Happy NewYear.mp3");
			document.getElementsByTagName('body')[0].appendChild(audio);
		}	
	}
	else NewId.onclick = function(){alert("傻河马，今天才几号，你就着急过元旦了？(◕ܫ◕)")};
	
	if(Spr_discrepancy >= 0){
		$('#Spring').click(function(){$('#text').html('亲爱的河马老婆，回家还没有很久就要春节了呢，我故意把春节写给你的话在年三十晚上6点可以看到，这样你就可以看完我温暖的话吃饺子看春晚了。这就过节了哦，相信河马的家里一定开心疯了，这么一大家子人，在一起一定很红火啊，真的好羡慕。可惜我从小到大都是一家三口过年，不过习惯了也就没啥，觉得还是蛮开心的。我们现在在各自的家乡，一定好久没见了吧？你想我吗河马？如果你想我现在给我打个电话吧，嘻嘻。老公好想你。我们在一起的第一个春节，在一起的156天，多幸福啊，一想到我们还在一起，就觉得心里暖暖的。记得给老公发你的美照哦？一定很美呢！快去放竹鞭炮，许个心愿，有大狗保佑一定可以成真呢！')})
		SprId.onclick = function(){
			audio.setAttribute("src","xiangqinxiangai.mp3");
			document.getElementsByTagName('body')[0].appendChild(audio);
		}		
	}
	else SprId.onclick = function(){alert("傻河马，春节还早呢，这个钥匙你可以在年三十那天的下午5点半以后打开哦！(≧∀≦)")};
	
	if(Val_discrepancy >= 0){
		$('#Valentine').click(function(){$('#text').html('真快，这么久就到情人节了哦？真的好快。说句你会打我的话，我不知道我们现在还在不在一起，因为你现在看到的文字，是我在2个月前写的。如果我们还在继续的话，那现在就是我们在一起的174天，半年了呢。一路走来，真的不容易。所有的过往都历历在目，我记着所有和我们俩有关的东西，我记得我在鹅銮鼻给你系鞋带，在阿里山和你吵架，在高雄动物园和你看小动物，你生日那天一起去的火锅店，你来东海我们一起在路思义拍的影子合照，等等的等等，不管是开心的难过的，都过去了，都成为了我们最珍贵的回忆。情人节到了呢，长这么大还没有过过情人节，也一直觉得蛮无聊的一个节日，不是有句话是爱对了人天天都是情人节吗？我知道我们在一起我没有带给你绝对的快乐和幸福，我想在一起的大部分日子都没有给你情人节。我会越来越好，我们也会越来越好，如果你还愿意，那我们就一定要走下去。多好！最后，如果到这里我们已经彻底分开了，那你记得我还爱着你，即使有了别人，也还深爱你，别问我为什么。如果我们现在不联系了，那祝你幸福！给你写的最后一个节日，想要告诉你：我爱你！王立平！')})
			ValId.onclick = function(){
			audio.setAttribute("src","You belong with me.mp3");
			document.getElementsByTagName('body')[0].appendChild(audio);
		}	
	}
	else ValId.onclick = function(){alert("傻河马，爱对了人每天都是情人节，别急(*^__^*) 嘻嘻……")};
}

// function createaudio(){
	// var audio = document.createElement("audio");
	// audio.setAttribute("loop","loop");
	// audio.setAttribute("autoplay","");
	// audio.setAttribute("src","You belong with me.mp3");
	// document.getElementsByTagName('body')[0].appendChild(audio);
// }




window.onload = function(){
	showTime();
	FestivalTime();
}






// 圣诞节：嘻嘻嘻嘻，我的傻瓜小河马，如果不出意外，现在你应该是和我在一起吧，今天是我们在一起123天，我们吵过，痛过，开心过，幸福过，我多想和你一直走下去。虽然我知道这很难。但我还是想说，纵使前途荆棘，亦要破釜沉舟。燕过留声，泥泞留痕，而我们爱情的结晶留下的，一定是珍惜，是疼爱，是美满。你说过你喜欢圣诞节，所以我会陪着你，满足你的心愿。如果你看到这里，抱着我狠狠亲一口好不好？我不知道我仅仅送你这样一个礼物，你会不会开心。但真的是脑子里突然闪过的灵光，至于浪不浪漫，我就不讲了，总之是老公对你的爱。我们还会走下去，我们的故事还没有停...

// 元旦：哇，我们又等到元旦了呢，我的小河马。虽然没有过很久，我想如果不出意外的话现在我们很大程度现在是在一起的。真快，2016年转瞬即逝，真的不懂做了些什么，有多少收获，如果说最大的收获的话，那就是遇到了值得我爱的人：立平女神。对于2017前，最期待的事就是我们可以一直走下去，可以有艰难险阻，但好希望我们可能一起克服。跟你跨年了呢，这辈子第一次和女生跨年，如果我们现在在一起，那我们尽情的吻对方好不好，不要松开好不好？吻到窒息，好！不！好！最后，祝我最爱的河马老婆新的一年越来越美丽，工作越来越顺利，越来越爱她的大狗，越来越幸福！

// 春节：亲爱的河马老婆，回家还没有很久就要春节了呢，我故意把春节写给你的话在年三十晚上6点可以看到，这样你就可以看完我温暖的话吃饺子看春晚了。这就过节了哦，相信河马的家里一定开心疯了，这么一大家子人，在一起一定很红火啊，真的好羡慕。可惜我从小到大都是一家三口过年，不过习惯了也就没啥，觉得还是蛮开心的。我们现在在各自的家乡，一定好久没见了吧？你想我吗河马？如果你想我现在给我打个电话吧，嘻嘻。老公好想你。我们在一起的第一个春节，在一起的156天，多幸福啊，一想到我们还在一起，就觉得心里暖暖的。记得给老公发你的美照哦？一定很美呢！快去放竹鞭炮，许个心愿，有大狗保佑一定可以成真呢！

//情人节：真快，这么久就到情人节了哦？真的好快。说句你会打我的话，我不知道我们现在还不在不在一起，因为你现在看到的文字，是我在2个月前写的。如果我们还在继续的话，那现在就是我们在一起的174天，半年了呢。一路走来，真的不容易。所有的过往都历历在目，我记着所有和我们俩有关的东西，我记得我在鹅銮鼻给你系鞋带，在阿里山和你吵架，在高雄动物园和你看小动物，你生日那天一起去的火锅店，你来东海我们一起在路思义拍的影子合照，等等的等等，不管是开心的难过的，都过去了，都成为了我们最珍贵的回忆。情人节到了呢，长这么大还没有过过情人节，也一直觉得蛮无聊的一个节日，不是有句话是爱对了人天天都是情人节吗？我知道我们在一起我没有带给你绝对的快乐和幸福，我想在一起的大部分日子都没有给你情人节。我会越来越好，我们也会越来越好，如果你还愿意，那我们就一定要走下去。多好！最后，如果到这里我们已经彻底分开了，那你记得我还爱着你，即使有了别人，也还深爱你，别问我为什么。如果我们现在不联系了，那祝你幸福！给你写的最后一个节日，想要告诉你：我爱你！






