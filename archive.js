
function batalha(jog,ini){
    console.log(jog.nome+" VS "+ini.nome)
    while(jog.hp>0&&ini.hp>0){
        jog.hp--
        ini.hp--
    }
}
let jogador = {
    nome: "" ,
    classe: "",
    hp: 0 ,
    forca: 0 ,
    def: 0 ,
    mag: 0 ,
    des: 0 ,
    inventario: [],
}
let inimigo = {
    nome: "Rato Maromba" ,
    classe: "Rato Maromba",
    hp: 10 ,
    forca: 10 ,
    def: 10 ,
    mag: 0 ,
    des: 5 ,
    inventario: ["creatina", "whey protein", "trembolona"],
}
console.log("===Bem vindo(a)===\nVamos criar o seu personagem.")

jogador.nome = prompt("Primeiro, Qual o seu nome?") 

console.log("Agora vamos escolher a sua classe.\n[1]Mago:\n[2]Arqueiro\n[3]Guerreiro\n[4]Bardo\n[5]Artista Marcial")

let esc = Number (prompt("Digite o número da classe escolhida:"))
switch(esc){
    case 1:
        jogador.classe = "Mago"
        jogador.hp = jogador.hp+10
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+7
        jogador.mag = jogador.mag+20
        jogador.des = jogador.des+3
        jogador.inventario = ["varinha", "chapéu de mago", "livro"]
        break
    case 2:
        jogador.classe = "Arqueiro"
        jogador.hp = jogador.hp+12
        jogador.forca = jogador.forca+8
        jogador.def = jogador.def+8
        jogador.mag = jogador.mag+5
        jogador.des = jogador.des+20
        jogador.inventario = ["arco", "aljava", "chapéu de arqueiro"]
        break
    case 3:
        jogador.classe = "Guerreiro"
        jogador.hp = jogador.hp+20
        jogador.forca = jogador.forca+15
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+0
        jogador.des = jogador.des+2
        jogador.inventario = ["espada", "escudo", "chapéu de guerreiro"]
        break
    case 4:
        jogador.classe = "Bardo"
        jogador.hp = jogador.hp+15
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+16
        jogador.des = jogador.des+8
        jogador.inventario = ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"]
        break
    case 5:
        jogador.classe = "Artista Marcial"
        jogador.hp = jogador.hp+16
        jogador.forca = jogador.forca+16
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+0
        jogador.des = jogador.des+10
        jogador.inventario = ["faixa", "calçados de artista marcial", "pergaminho encantado"]        
        break 
    default:
        jogador.classe =
        jogador.hp =
        jogador.forca =
        jogador.def =
        jogador.mag =
        jogador.inventario = []
        break
}
console.log(jogador)
const inimigos = [
    { nome: "", hp: 20, forca: 8, xp: 50 },
    { nome: "Esqueleto", hp: 15, forca: 5, xp: 30 },
    { nome: "Ricardo Milos", hp: 12, forca: 4, xp: 20 },
    { nome: "Dragão", hp: 30, forca: 10, xp: 100 },
    { nome: "Hidra", hp: 25, forca: 9, xp: 80 },
    { nome: "Bruxo", hp: 30, forca: 7, xp: 60 },
    { nome: "Morcego Gigante", hp: 10, forca: 3, xp: 15 },
    { nome: "Lobo", hp: 13, forca: 6, xp: 25 }
    