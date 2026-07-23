draw_self(); // Desenha a imagem da caixinha

draw_set_colour(c_black);
// Desenha o texto 20 pixels para a direita (x + 20) e na mesma altura (y)
draw_text( 110, y+20, "cost: $" + string(global.buy));
