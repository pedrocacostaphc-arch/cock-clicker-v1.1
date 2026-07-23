if (auto_buy){

if (global.point >= global.buy) {
	sprite_index = pr_box_check;
    global.point -= global.buy;
    global.cliques *= 2;
	
    global.buy *= 2;
}
}